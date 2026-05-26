// --- Cookie Consent Core ---
(function () {
  const KEY = "cookie-consent"; // "accepted" | "declined"
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  const declineBtn = document.getElementById("cookie-decline");
  const settingsLink = document.getElementById("cookie-settings-link");

  // Public API
  window.cookieConsent = {
    get: () => localStorage.getItem(KEY),
    set: (value) => {
      localStorage.setItem(KEY, value);
      updateUI();
      if (value === "accepted") runConsentGrantedHooks();
      if (value === "declined") runConsentRevokedCleanup();
    },
    reset: () => {
      localStorage.removeItem(KEY);
      updateUI(true);
    }
  };

  // Hooks: push functions that should run AFTER consent is granted
  window.onConsentGranted = window.onConsentGranted || [];
  function runConsentGrantedHooks() {
    try {
      window.onConsentGranted.forEach(fn => typeof fn === "function" && fn());
    } catch (e) { /* no-op */ }
  }

  // Optional cleanup if user revokes/declines after previously accepting
  function runConsentRevokedCleanup() {
    // Example: disable GA
    // window['ga-disable-G-XXXXXXX'] = true;
    // Optionally remove known analytics cookies here.
  }

  function updateUI(forceShow = false) {
    const consent = localStorage.getItem(KEY);
    const shouldShow = forceShow || !consent;
    if (banner) banner.hidden = !shouldShow;
    if (settingsLink) {
      settingsLink.style.display = "inline";
      settingsLink.onclick = (e) => {
        e.preventDefault();
        if (banner) banner.hidden = false;
      };
    }
  }

  // Wire buttons
  if (acceptBtn) acceptBtn.addEventListener("click", () => window.cookieConsent.set("accepted"));
  if (declineBtn) declineBtn.addEventListener("click", () => window.cookieConsent.set("declined"));

  // Initial UI state
  document.addEventListener("DOMContentLoaded", () => {
    updateUI();
    if (window.cookieConsent.get() === "accepted") runConsentGrantedHooks();
  });
})();
