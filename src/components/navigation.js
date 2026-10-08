/**
 * Vanilla JS replacement for the theme's jQuery scripts (superfish,
 * hoverIntent, jquery.custom, navigation).
 */
const BREAKPOINT = 767;
const HOVER_DELAY = 200;

/** Dropdown menu (Superfish-style). */
function setupDropdowns() {
    const menu = document.querySelector("#navigation ul.menu");
    if (!menu) return;

    menu.classList.add("sf-js-enabled", "sf-arrows");

    menu.querySelectorAll("li").forEach((li) => {
        const sub = li.querySelector(":scope > ul");
        if (!sub) return;

        const link = li.querySelector(":scope > a");
        if (link) {
            link.classList.add("sf-with-ul");
            link.setAttribute("aria-haspopup", "true");
            link.setAttribute("aria-expanded", "false");
        }

        let timer;
        function open() {
            clearTimeout(timer);
            if (window.innerWidth < BREAKPOINT) return;
            li.classList.add("sfHover");
            link?.setAttribute("aria-expanded", "true");
        }
        function close() {
            clearTimeout(timer);
            timer = setTimeout(() => {
                li.classList.remove("sfHover");
                link?.setAttribute("aria-expanded", "false");
            }, HOVER_DELAY);
        }

        li.addEventListener("mouseenter", open);
        li.addEventListener("mouseleave", close);
        li.addEventListener("focusin", open);
        li.addEventListener("focusout", (event) => {
            if (!li.contains(event.relatedTarget)) close();
        });
    });
}

/** Mobile menu toggle. */
function setupMobileToggle() {
    const container = document.getElementById("navigation");
    if (!container) return;

    const button = container.querySelector("button.menu-toggle");
    const menu = container.querySelector("ul");
    const holder = container.querySelector("div");
    if (!button) return;
    if (!menu) {
        button.style.display = "none";
        return;
    }

    const holderBase = holder ? holder.className : "";

    function setOpen(isOpen) {
        button.classList.toggle("toggled-on", isOpen);
        button.setAttribute("aria-expanded", String(isOpen));
        menu.classList.toggle("toggled-on", isOpen);
        menu.classList.toggle("menu", !isOpen);
        menu.classList.toggle("mobile-menu", isOpen);
        if (holder) {
            holder.className = isOpen
                ? holderBase.replace(/^menu/, "mobile-menu")
                : holderBase;
        }
        container.classList.toggle("main-small-navigation", isOpen);
        container.classList.toggle("navigation-main", !isOpen);
    }

    button.addEventListener("click", () => {
        setOpen(!button.classList.contains("toggled-on"));
    });

    window.addEventListener("resize", () => {
        if (
            window.innerWidth >= BREAKPOINT &&
            button.classList.contains("toggled-on")
        ) {
            setOpen(false);
        }
        if (window.innerWidth < BREAKPOINT) {
            menu.querySelectorAll(".sfHover").forEach((el) => {
                el.classList.remove("sfHover");
            });
        }
    });
}

export function initNavigation() {
    setupDropdowns();
    setupMobileToggle();
}