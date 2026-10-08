/**
 * Smooth scrolling for in-page `a.scroll` links (used by the navigation and
 * the sidebar widgets).
 */
export function initSmoothScroll() {
    document.querySelectorAll("a.scroll").forEach((link) => {
        link.addEventListener("click", (event) => {
            const target =
                link.hash && document.querySelector(link.hash);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            history.pushState(null, "", link.hash);
        });
    });
}