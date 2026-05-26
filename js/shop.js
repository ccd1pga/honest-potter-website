(function () {
  const pieces = window.galleryPieces || [];
  const shopItems = pieces.filter((piece) => piece.shop);
  const grid = document.querySelector("#shop-grid");
  const count = document.querySelector("#shop-count");

  function enquiryLink(piece) {
    const subject = encodeURIComponent(`Shop enquiry: ${piece.title}`);
    const body = encodeURIComponent(`Hello, I am interested in ${piece.title} from The Honest Potter shop.`);
    return `mailto:info@kelvinkilns.com?subject=${subject}&body=${body}`;
  }

  function renderShop() {
    count.textContent = shopItems.length;

    grid.innerHTML = shopItems.map((piece) => `
      <article class="shop-item" id="${piece.id}">
        <div class="shop-media">
          <img src="${piece.images[0]}" alt="${piece.alt}" loading="lazy">
        </div>

        <div class="shop-details">
          <h2>${piece.title}</h2>
          <div class="shop-meta">
            <span>${piece.category}</span>
            <span>${piece.year}</span>
          </div>
          <div class="shop-meta">
            <span class="shop-status">${piece.status || "Enquire"}</span>
            <span class="shop-price">${piece.price || "Enquire"}</span>
          </div>
          <p class="shop-description">${piece.detail}</p>
          <p class="shop-note">${piece.shopNote || "Please get in touch to ask about this piece."}</p>
          <div class="shop-actions">
            <a class="shop-action" href="${enquiryLink(piece)}">Enquire</a>
            <a class="shop-action secondary" href="../pages/gallery.html">Back to gallery</a>
          </div>
        </div>
      </article>
    `).join("");
  }

  function focusLinkedItem() {
    const linkedId = window.location.hash.slice(1);
    if (!linkedId) {
      return;
    }

    const item = document.getElementById(linkedId);
    if (!item) {
      return;
    }

    item.scrollIntoView({ block: "start" });
    item.classList.add("is-linked");
  }

  renderShop();
  window.addEventListener("load", focusLinkedItem);
})();
