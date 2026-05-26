(function () {
  const pieces = window.galleryPieces || [];
  const grid = document.querySelector("#gallery-grid");
  const filters = document.querySelector("#gallery-filters");
  const pieceCount = document.querySelector("#piece-count");
  const dialog = document.querySelector("#gallery-lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxTitle = document.querySelector("#lightbox-title");
  const lightboxMeta = document.querySelector("#lightbox-meta");
  const previousButton = document.querySelector("#previous-image");
  const nextButton = document.querySelector("#next-image");

  let activeCategory = "All";
  let activePieceIndex = 0;
  let activeImageIndex = 0;

  const categories = ["All", ...Array.from(new Set(pieces.map((piece) => piece.category)))];

  function renderFilters() {
    filters.innerHTML = categories.map((category) => {
      const count = category === "All"
        ? pieces.length
        : pieces.filter((piece) => piece.category === category).length;

      return `
        <button class="filter-button" type="button" data-category="${category}" aria-pressed="${category === activeCategory}">
          ${category} (${count})
        </button>
      `;
    }).join("");
  }

  function visiblePieces() {
    if (activeCategory === "All") {
      return pieces;
    }

    return pieces.filter((piece) => piece.category === activeCategory);
  }

  function renderGallery() {
    const currentPieces = visiblePieces();
    pieceCount.textContent = currentPieces.length;

    grid.innerHTML = currentPieces.map((piece, index) => `
      <article class="piece-card${piece.featured ? " featured" : ""}">
        <button class="piece-button" type="button" data-index="${index}">
          <div class="piece-media">
            <img src="${piece.images[0]}" alt="${piece.alt}" loading="lazy">
          </div>
          <div class="piece-body">
            <div class="piece-heading">
              <h2 class="piece-title">${piece.title}</h2>
              <span class="piece-year">${piece.year}</span>
            </div>
            <p class="piece-detail">${piece.detail}</p>
            <span class="piece-category">${piece.category}</span>
          </div>
        </button>
      </article>
    `).join("");
  }

  function updateLightbox() {
    const piece = visiblePieces()[activePieceIndex];
    const image = piece.images[activeImageIndex];

    lightboxImage.src = image;
    lightboxImage.alt = piece.alt;
    lightboxTitle.textContent = piece.title;
    lightboxMeta.textContent = `${piece.category} | ${piece.year} | ${activeImageIndex + 1} of ${piece.images.length}`;
    previousButton.hidden = piece.images.length < 2;
    nextButton.hidden = piece.images.length < 2;
  }

  function openLightbox(index) {
    activePieceIndex = index;
    activeImageIndex = 0;
    updateLightbox();
    dialog.showModal();
  }

  function moveImage(direction) {
    const piece = visiblePieces()[activePieceIndex];
    activeImageIndex = (activeImageIndex + direction + piece.images.length) % piece.images.length;
    updateLightbox();
  }

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-category]");
    if (!button) {
      return;
    }

    activeCategory = button.dataset.category;
    renderFilters();
    renderGallery();
  });

  grid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-index]");
    if (!button) {
      return;
    }

    openLightbox(Number(button.dataset.index));
  });

  previousButton.addEventListener("click", () => moveImage(-1));
  nextButton.addEventListener("click", () => moveImage(1));

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (!dialog.open) {
      return;
    }

    if (event.key === "ArrowLeft") {
      moveImage(-1);
    }

    if (event.key === "ArrowRight") {
      moveImage(1);
    }
  });

  renderFilters();
  renderGallery();
})();
