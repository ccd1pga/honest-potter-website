(function () {
  const products = window.shopSandboxProducts || [];
  const shippingProfiles = window.shopSandboxShippingProfiles || {};
  const grid = document.querySelector("#sandbox-product-grid");
  const summary = document.querySelector("#sandbox-summary");
  const gapList = document.querySelector("#sandbox-gap-list");

  const money = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0
  });

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatPrice(product) {
    return product.price === null ? "Price TBC" : money.format(product.price);
  }

  function packedWeight(product) {
    if (!product.weightG || !product.packingAllowanceG) {
      return null;
    }

    return product.weightG + product.packingAllowanceG;
  }

  function fieldState(value) {
    return value ? "Ready" : "Needed";
  }

  function specValue(value, suffix = "") {
    return value ? `${value}${suffix}` : "TBC";
  }

  function sizeValue(product) {
    if (!product.heightCm || !product.diameterCm) {
      return "TBC";
    }

    return `${product.heightCm} x ${product.diameterCm} cm`;
  }

  function stripeButton(product) {
    if (!product.stripePaymentLink) {
      return '<button class="sandbox-button" type="button" disabled>Stripe link needed</button>';
    }

    return `<a class="sandbox-button" href="${escapeHtml(product.stripePaymentLink)}" rel="noopener">Test checkout</a>`;
  }

  function productCard(product) {
    const shippingProfile = shippingProfiles[product.shippingProfile] || {};

    return `
      <article class="sandbox-card" id="${escapeHtml(product.id)}">
        <div class="sandbox-media">
          <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}" loading="lazy">
          <span>${escapeHtml(product.sku)}</span>
        </div>
        <div class="sandbox-body">
          <div class="sandbox-card-heading">
            <h2>${escapeHtml(product.title)}</h2>
            <span class="sandbox-pill">${escapeHtml(product.status)}</span>
          </div>
          <p>${escapeHtml(product.description)}</p>
          <dl class="sandbox-specs">
            <div><dt>Price</dt><dd>${escapeHtml(formatPrice(product))}</dd></div>
            <div><dt>Glaze</dt><dd>${escapeHtml(product.glaze || "TBC")}</dd></div>
            <div><dt>Capacity</dt><dd>${escapeHtml(specValue(product.capacityMl, " ml"))}</dd></div>
            <div><dt>Size</dt><dd>${escapeHtml(sizeValue(product))}</dd></div>
            <div><dt>Item weight</dt><dd>${escapeHtml(specValue(product.weightG, " g"))}</dd></div>
            <div><dt>Packed test weight</dt><dd>${escapeHtml(specValue(packedWeight(product), " g"))}</dd></div>
            <div><dt>Stock</dt><dd>${product.quantity}</dd></div>
          </dl>
          <div class="sandbox-checks" aria-label="Readiness checks">
            <span data-state="${fieldState(product.price)}">Price: ${fieldState(product.price)}</span>
            <span data-state="${fieldState(product.stripeProductId)}">Product ID: ${fieldState(product.stripeProductId)}</span>
            <span data-state="${fieldState(product.stripePriceId)}">Price ID: ${fieldState(product.stripePriceId)}</span>
            <span data-state="${fieldState(product.stripePaymentLink)}">Payment link: ${fieldState(product.stripePaymentLink)}</span>
          </div>
          <p class="sandbox-shipping">
            ${escapeHtml(shippingProfile.label || "Shipping TBC")}:
            ${escapeHtml(shippingProfile.note || "Shipping profile needed.")}
          </p>
          <div class="sandbox-actions">
            ${stripeButton(product)}
          </div>
        </div>
      </article>
    `;
  }

  function buildGaps() {
    const missingPrices = products.filter((product) => product.price === null).length;
    const missingLinks = products.filter((product) => !product.stripePaymentLink).length;
    const missingShippingRates = Object.values(shippingProfiles).filter((profile) => !profile.stripeShippingRateId).length;

    const gaps = [
      `${missingPrices} product prices to choose.`,
      `${missingLinks} Stripe test payment links to add.`,
      `${missingShippingRates} Stripe test shipping rate to connect.`,
      "Packed parcel weight needs measuring with real packaging.",
      "Returns, breakage, dispatch, and collection wording still need final copy."
    ];

    gapList.innerHTML = gaps.map((gap) => `<li>${escapeHtml(gap)}</li>`).join("");
  }

  function renderSummary() {
    const totalStock = products.reduce((sum, product) => sum + product.quantity, 0);
    const readyForCheckout = products.filter((product) => product.stripePaymentLink).length;

    summary.innerHTML = `
      <div><strong>${products.length}</strong><span>products</span></div>
      <div><strong>${totalStock}</strong><span>stock units</span></div>
      <div><strong>${readyForCheckout}</strong><span>checkout-ready</span></div>
      <div><strong>1</strong><span>shipping profile</span></div>
    `;
  }

  function render() {
    renderSummary();
    buildGaps();
    grid.innerHTML = products.map(productCard).join("");
  }

  render();
})();
