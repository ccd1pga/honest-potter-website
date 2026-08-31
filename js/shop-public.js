(function () {
  const products = window.shopProducts || window.shopSandboxProducts || [];
  const grid = document.querySelector("#shop-product-grid");
  const dialog = document.querySelector("#product-dialog");
  const dialogContent = document.querySelector("#product-dialog-content");
  const closeButton = dialog.querySelector(".dialog-close");
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

  function displayTitle(product) {
    const number = product.sku.split("-").pop().replace(/^0+/, "");
    return `Floating Blue Bowl No. ${number}`;
  }

  function shortDescription(product) {
    if (product.sku === "HB26-005") {
      return "A larger, more decorative hand-thrown bowl with generous glaze movement across its broad form.";
    }

    return "A one-off, hand-thrown bowl with floating blue glaze flowing over a warm white base.";
  }

  function conditionText(product) {
    if (product.sku !== "HB26-002") {
      return "";
    }

    return "Studio piece: this bowl has a slight chip to the foot ring. It is shown in the photographs and reflected in the price.";
  }

  function cardMarkup(product) {
    return `
      <article class="product-card">
        <div class="product-card-media">
          <img src="${escapeHtml(product.images[0].src)}" alt="${escapeHtml(product.images[0].alt)}" loading="lazy">
          <span class="product-badge">Decorative piece</span>
        </div>
        <div class="product-card-copy">
          <div class="product-card-heading">
            <h3>${escapeHtml(displayTitle(product))}</h3>
            <span class="product-card-price">${escapeHtml(money.format(product.price))}</span>
          </div>
          <p class="product-card-description">${escapeHtml(shortDescription(product))}</p>
          <p class="product-card-meta">Ø ${escapeHtml(product.diameterCm)} × ${escapeHtml(product.heightCm)} cm · ${escapeHtml(product.weightG)} g</p>
          <div class="product-card-actions">
            <span class="product-availability">Available at launch</span>
            <button class="product-view-button" type="button" data-product-id="${escapeHtml(product.id)}">View piece</button>
          </div>
        </div>
      </article>
    `;
  }

  function dialogMarkup(product) {
    const condition = conditionText(product);

    return `
      <div class="dialog-layout">
        <div class="dialog-gallery">
          <div class="dialog-main-image">
            <img src="${escapeHtml(product.images[0].src)}" alt="${escapeHtml(product.images[0].alt)}">
          </div>
          <div class="dialog-thumbnails" aria-label="Photographs of ${escapeHtml(displayTitle(product))}">
            ${product.images.map((image, index) => `
              <button
                class="dialog-thumbnail"
                type="button"
                data-src="${escapeHtml(image.src)}"
                data-alt="${escapeHtml(image.alt)}"
                aria-label="Show ${escapeHtml(image.label.toLowerCase())} photograph"
                aria-pressed="${index === 0 ? "true" : "false"}"
              >
                <img src="${escapeHtml(image.src)}" alt="" loading="lazy">
                <span>${escapeHtml(image.label)}</span>
              </button>
            `).join("")}
          </div>
        </div>
        <div class="dialog-product-copy">
          <p class="dialog-kicker">One-off piece · ${escapeHtml(product.sku)}</p>
          <div class="dialog-heading-row">
            <h2 id="dialog-title">${escapeHtml(displayTitle(product))}</h2>
            <span class="dialog-price">${escapeHtml(money.format(product.price))}</span>
          </div>
          <p class="dialog-description">${escapeHtml(shortDescription(product))} Small variations in form and finish are part of its handmade character.</p>
          <dl class="dialog-specs">
            <div><dt>Diameter</dt><dd>${escapeHtml(product.diameterCm)} cm</dd></div>
            <div><dt>Height</dt><dd>${escapeHtml(product.heightCm)} cm</dd></div>
            <div><dt>Item weight</dt><dd>${escapeHtml(product.weightG)} g</dd></div>
            <div><dt>Glaze</dt><dd>Floating blue</dd></div>
          </dl>
          ${condition ? `<p class="dialog-condition">${escapeHtml(condition)}</p>` : ""}
          <p class="dialog-use-note"><strong>Decorative use only.</strong> This experimental glaze has not been independently tested for food contact, so the piece is not intended for food or drink.</p>
          <p class="dialog-delivery">UK Royal Mail Tracked 48 delivery will be added at checkout. Payment will be handled securely by Stripe.</p>
          ${product.stripePaymentLink
            ? `<a class="dialog-checkout is-active" href="${escapeHtml(product.stripePaymentLink)}" rel="noopener">Buy securely with Stripe</a>`
            : '<button class="dialog-checkout" type="button" disabled>Checkout available when the shop launches</button>'}
        </div>
      </div>
    `;
  }

  function openProduct(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product) {
      return;
    }

    dialogContent.innerHTML = dialogMarkup(product);
    dialog.showModal();
  }

  grid.innerHTML = products.map(cardMarkup).join("");

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-id]");
    if (button) {
      openProduct(button.dataset.productId);
    }
  });

  dialog.addEventListener("click", (event) => {
    const thumbnail = event.target.closest(".dialog-thumbnail");
    if (thumbnail) {
      const mainImage = dialog.querySelector(".dialog-main-image img");
      mainImage.src = thumbnail.dataset.src;
      mainImage.alt = thumbnail.dataset.alt;
      dialog.querySelectorAll(".dialog-thumbnail").forEach((item) => {
        item.setAttribute("aria-pressed", String(item === thumbnail));
      });
      return;
    }

    if (event.target === dialog) {
      dialog.close();
    }
  });

  closeButton.addEventListener("click", () => dialog.close());
})();
