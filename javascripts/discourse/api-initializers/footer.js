import { apiInitializer } from "discourse/lib/api";

// Injects the sparQ footer matching the static site layout:
//   Primary row:   sparQ | About | Status | Contact
//   Secondary row: Privacy | Terms | License | Acceptable Use | Security
//   Copyright:     © 2025-2026 remarQable LLC

export default apiInitializer((api) => {
  const showFooter = settings.show_footer;
  const copyright = settings.footer_copyright;

  if (!showFooter) return;

  api.onPageChange(() => {
    if (document.querySelector(".sparq-footer")) return;

    const footer = document.createElement("div");
    footer.className = "sparq-footer";
    footer.innerHTML = `
      <div class="wrap">
        <div class="sparq-footer-primary">
          <a href="https://www.sparqone.com">sparQ</a>
          <a href="https://www.sparqone.com/about.html">About</a>
          <a href="https://status.sparqone.com">Status</a>
          <a href="mailto:info@remarqable.io">Contact</a>
        </div>
        <div class="sparq-footer-secondary">
          <a href="https://www.sparqone.com/privacy.html">Privacy</a>
          <a href="https://www.sparqone.com/terms.html">Terms</a>
          <a href="https://www.sparqone.com/license.html">License</a>
          <a href="https://www.sparqone.com/acceptable-use.html">Acceptable Use</a>
          <a href="https://www.sparqone.com/security.html">Security</a>
        </div>
        <p class="sparq-footer-copyright">&copy; ${copyright}</p>
      </div>
    `;

    const mainOutlet = document.getElementById("main-outlet");
    if (mainOutlet) {
      mainOutlet.parentNode.insertBefore(footer, mainOutlet.nextSibling);
    }
  });
});
