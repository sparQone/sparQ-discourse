import { apiInitializer } from "discourse/lib/api";

// Replaces the site title text with the sparQ wordmark (purple Q).
// Previously lived in common/after_header.html as a deprecated
// <script type="text/discourse-plugin"> tag.

export default apiInitializer((api) => {
  api.onPageChange(() => {
    const titleLink = document.querySelector(".d-header .title a");
    if (titleLink && !titleLink.querySelector(".sparq-q")) {
      titleLink.innerHTML = 'spar<span class="sparq-q">Q</span>';
    }
  });
});
