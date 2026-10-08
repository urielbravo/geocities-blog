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
    {
        label: "Archives",
        href: "#",
        children: [
            { label: "1997", href: "#post-1", scroll: true },
            { label: "1996", href: "#post-2", scroll: true },
            {
                label: "1995",
                href: "#post-3",
                scroll: true,
                children: [
                    { label: "Spring", href: "#post-3", scroll: true },
                    { label: "Summer", href: "#post-3", scroll: true },
                ],
            },
        ],
    },
    {
        label: "Download Theme",
        href: "https://organicthemes.com/retro-theme/",
        external: true,
    },
];