export type PostBlock =
    | { type: "paragraph"; text: string }
    | { type: "quote"; text: string }
    | { type: "list"; items: string[] };

export interface Post {
    /** Anchor target, also used for the feature image link. */
    id: string;
    title: string;
    /** Where the headline and "Read More" link point. */
    href: string;
    /** Alt-style label rendered inside the image placeholder. */
    imageLabel: string;
    /** Comment link text; `null` renders no comment link. */
    comments: string | null;
    date: string;
    author: string;
    authorHref: string;
    content: PostBlock[];
}

export const posts: Post[] = [
    {
        id: "post-1",
        title: "A Theme From The Past",
        href: "#post-1",
        imageLabel: "A beige computer showing a DOS prompt",
        comments: "3 Comments",
        date: "August 24, 1997",
        author: "Webmaster",
        authorHref: "#about",
        content: [
            {
                type: "paragraph",
                text: "Have you ever wished your website looked like an old homepage from the 90s? Probably not! But here we are anyway, with pixel fonts, neon colors and animated GIFs — mostly because we thought it would be funny.",
            },
            {
                type: "paragraph",
                text: "It's a great fit for gamers, guilds, video game reviews, collectors, kids and nostalgic adults. Grab a can of soda, crank up the modem, and enjoy the ride.",
            },
        ],
    },
    {
        id: "post-2",
        title: "The Best Games You Never Played",
        href: "#post-2",
        imageLabel: "A neon sunset over a green wireframe grid",
        comments: "1 Comment",
        date: "June 2, 1996",
        author: "Webmaster",
        authorHref: "#about",
        content: [
            {
                type: "paragraph",
                text: "Some cartridges collected dust while others got all the glory. We dug through the bargain bin to find the hidden gems that deserved a second chance — side-scrollers, puzzle games and one very strange racing sim.",
            },
            {
                type: "quote",
                text: '"Blow on the cartridge, then try again."',
            },
        ],
    },
    {
        id: "post-3",
        title: "Scientific Calculator Games!",
        href: "#post-3",
        imageLabel: "A blue floppy disk",
        comments: "Leave a Comment",
        date: "December 15, 1995",
        author: "Webmaster",
        authorHref: "#about",
        content: [
            {
                type: "paragraph",
                text: "Who needs a console when you have a graphing calculator and a very boring math class? Here are our favorite tricks for turning homework time into high-score time.",
            },
            {
                type: "list",
                items: [
                    "Number guessing games",
                    "Tiny text adventures",
                    "Pixel-by-pixel drawing programs",
                ],
            },
        ],
    },
];

/** Older write-ups listed in the "Recent Posts" widget. */
export const archivedPosts = [
    { title: "Netscape Releases Navigator!", href: "#" },
    { title: "Dial-Up Tips For Faster Downloads", href: "#" },
];

/** Posts shown on the current page of the pagination. */
export const pagination = {
    current: 1,
    /** Placeholder pages — no routes exist yet. */
    pages: [2, 3],
};