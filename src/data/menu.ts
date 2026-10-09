export interface MenuItem {
    label: string;
    href: string;
    /** Smooth-scrolls to the hash target instead of jumping. */
    scroll?: boolean;
    /** Opens in a new tab with `rel="noopener"`. */
    external?: boolean;
    current?: boolean;
    children?: MenuItem[];
}

export const mainMenu: MenuItem[] = [
    { label: "Home", href: "index.html", current: true },
    { label: "About", href: "#about", scroll: true },
    { label: "Links", href: "#links", scroll: true },
];