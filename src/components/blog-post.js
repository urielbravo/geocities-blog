/** Post tweaks: "Read More" line breaks and responsive video embeds. */
export function initBlogPosts() {
    // Line break before "Read More" links.
    document.querySelectorAll(".postarea .more-link").forEach((link) => {
        link.parentNode.insertBefore(document.createElement("br"), link);
    });

    // Responsive video embeds (FitVids replacement).
    document.querySelectorAll(".postarea iframe").forEach((frame) => {
        const width = frame.getAttribute("width");
        const height = frame.getAttribute("height");
        frame.style.width = "100%";
        frame.style.height = "auto";
        frame.style.aspectRatio = width && height ? `${width} / ${height}` : "16 / 9";
    });
}