export type PostBlock =
    | { type: "paragraph"; text: string }
    | { type: "quote"; text: string }
    | { type: "list"; items: string[] };

export interface PostCategory {
    slug: string;
    name: string;
}

export interface Post {
    /** URL segment: /blog/<slug>/ */
    slug: string;
    title: string;
    /** ISO date, so posts sort chronologically as strings. */
    date: string;
    category: string;
    /** Label rendered inside the image placeholder. */
    imageLabel: string;
    excerpt: string;
    content: PostBlock[];
}

export const POSTS_PER_PAGE = 4;

export const categories: PostCategory[] = [
    { slug: "technology", name: "Technology" },
    { slug: "personal", name: "Personal" },
    { slug: "games", name: "Games" },
    { slug: "music", name: "Music" },
    { slug: "uncategorized", name: "Uncategorized" },
];

export const posts: Post[] = [
    {
        slug: "automating-my-test-suite",
        title: "How I Automated My Test Suite",
        date: "2026-10-06",
        category: "technology",
        imageLabel: "A terminal full of green checkmarks",
        excerpt:
            "Three weeks of clicking, now nobody has to click anything. What I gained and the one thing I would do differently.",
        content: [
            {
                type: "paragraph",
                text: "Every release used to start with the same twenty minutes of running the suite by hand and watching a wall of green tick marks scroll past. Slow, boring, and exactly the kind of task a machine should be doing.",
            },
            {
                type: "paragraph",
                text: "The fix was not clever. I moved the suite into a pipeline, gave it a real exit code, and made a failure block the deploy. The tests were already automated one layer down; nobody had connected them to anything.",
            },
            {
                type: "quote",
                text: "A test nobody looks at is a test that quietly rots.",
            },
            {
                type: "paragraph",
                text: "Total time recovered so far: about six hours a week. The part I did not expect was the confidence — a red build is annoying, but it is honest in a way that a skipped manual pass never was.",
            },
            {
                type: "list",
                items: [
                    "Run everything, not just the changed parts",
                    "Fail the build, do not warn about it",
                    "Keep the output short enough that people read it",
                ],
            },
        ],
    },
    {
        slug: "meet-kito",
        title: "Meet Kito",
        date: "2026-10-02",
        category: "personal",
        imageLabel: "A dog in a Christmas suit",
        excerpt:
            "The other regular contributor to this site. He does not write the posts, but he supervises them.",
        content: [
            {
                type: "paragraph",
                text: "Kito is a good friend and a very bad influence. He has decided that laptop keyboards are for sleeping on, that walks should stop the moment they get interesting, and that my chair is the only comfortable place in the house.",
            },
            {
                type: "paragraph",
                text: "He is also the reason this site exists, because a 90s homepage needs something on it that is not a screenshot of a beige computer. The photos on the about page are his doing.",
            },
        ],
    },
    {
        slug: "building-a-website-that-looks-like-1997",
        title: "Building A Website That Looks Like 1997",
        date: "2026-09-27",
        category: "technology",
        imageLabel: "A beige computer showing a DOS prompt",
        excerpt:
            "Pixel fonts, neon borders and animated GIFs, built on a modern static site generator. Notes on making it feel wrong in the right way.",
        content: [
            {
                type: "paragraph",
                text: "The whole aesthetic is a constraint exercise. Everything on this site is either a real 1997 asset or a CSS approximation of one, and the theme rules came first — the layout had to survive the theme, not the other way around.",
            },
            {
                type: "paragraph",
                text: "The hard part is restraint. Beveled borders and hard shadows look like a period detail in isolation, and like a mess in quantity. The buttons in the sidebar work because there are only three of them.",
            },
            {
                type: "quote",
                text: "Pick one period and commit. Half measures read as neither.",
            },
            {
                type: "list",
                items: [
                    "Hard 3px borders, no blur, no gradients",
                    "Courier for structure, Georgia for reading",
                    "One neon colour, used sparingly",
                ],
            },
        ],
    },
    {
        slug: "cuentos-de-la-noche",
        title: "Cuentos De La Noche",
        date: "2026-09-15",
        category: "personal",
        imageLabel: "A candlelit desk with a microphone",
        excerpt:
            "My YouTube channel, where I tell scary stories in Spanish and pile on effects and sound until they are harder to sit through.",
        content: [
            {
                type: "paragraph",
                text: "Cuentos de la noche — tales of the night — is where I tell horror stories. The stories are the easy part; the work is in the layering. A voice, a room tone, something under the floorboards, and then the long silences where the listener does the work for you.",
            },
            {
                type: "paragraph",
                text: "It is in Spanish, which is a shame for anyone who reads this page in English. There is an episode embedded on the about page if you want a taste.",
            },
        ],
    },
    {
        slug: "resources-for-your-own-website",
        title: "Resources For Your Own Website",
        date: "2026-08-30",
        category: "uncategorized",
        imageLabel: "A directory of hand-built websites",
        excerpt:
            "The short list I keep open in a tab: image tools, colour pickers, and the archives where the good hand-made sites still live.",
        content: [
            {
                type: "paragraph",
                text: "Everyone who built a site in 1997 had a hand-written page and a scanned jpeg for a background. That was the whole toolchain. The list on the resources page is the modern equivalent — free, no account, and immediately useful.",
            },
            {
                type: "paragraph",
                text: "The one I use most is happyhues, because picking a palette that does not fight itself is genuinely hard to do by eye.",
            },
        ],
    },
    {
        slug: "a-theme-from-the-past",
        title: "A Theme From The Past",
        date: "1997-08-24",
        category: "games",
        imageLabel: "A beige computer showing a DOS prompt",
        excerpt:
            "Have you ever wished your website looked like an old homepage from the 90s? Probably not! But here we are anyway, with pixel fonts, neon colors and animated GIFs.",
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
        slug: "dial-up-tips-for-faster-downloads",
        title: "Dial-Up Tips For Faster Downloads",
        date: "1997-03-11",
        category: "technology",
        imageLabel: "A modem with blinking lights",
        excerpt:
            "Six things that actually moved the number, none of which were buying a faster modem.",
        content: [
            {
                type: "paragraph",
                text: "Everybody's first instinct was to buy the faster modem. Almost nobody's first instinct was to stop doing the things that were making the line slow.",
            },
            {
                type: "list",
                items: [
                    "Turn off the phone's own dial tone, it eats a second of handshake",
                    "Close the other modem line before dialling",
                    "Download one thing at a time, seriously",
                    "Check the phone cable for a kinked third pair",
                ],
            },
            {
                type: "quote",
                text: "The fastest modem in the house was the one that was not sharing a line.",
            },
        ],
    },
    {
        slug: "the-best-games-you-never-played",
        title: "The Best Games You Never Played",
        date: "1996-06-02",
        category: "games",
        imageLabel: "A neon sunset over a green wireframe grid",
        excerpt:
            "Some cartridges collected dust while others got all the glory. We dug through the bargain bin for the hidden gems that deserved a second chance.",
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
        slug: "the-mixtape-underground",
        title: "The Mixtape Underground",
        date: "1996-01-20",
        category: "music",
        imageLabel: "A cassette tape with a handwritten label",
        excerpt:
            "Nobody was buying records by the time the copying started, which meant the good stuff moved hand to hand and left no shelf behind.",
        content: [
            {
                type: "paragraph",
                text: "The mixtape era is remembered as a fad and it was, but it also quietly kept obscure records alive. A track could be unavailable in every shop in the country and completely common in one neighbourhood.",
            },
            {
                type: "paragraph",
                text: "Two copies of the same tape always turned up eventually, and the second one had the better B-side. That was the whole distribution system.",
            },
        ],
    },
    {
        slug: "scientific-calculator-games",
        title: "Scientific Calculator Games!",
        date: "1995-12-15",
        category: "technology",
        imageLabel: "A blue floppy disk",
        excerpt:
            "Who needs a console when you have a graphing calculator and a very boring math class? Here are the tricks for turning homework time into high-score time.",
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
    {
        slug: "how-to-make-a-hit-counter",
        title: "How To Make A Hit Counter",
        date: "1995-09-03",
        category: "technology",
        imageLabel: "A seven-segment counter display",
        excerpt:
            "Every page needed one. Mine was a transparent GIF that could not be fooled, which is a longer story than it sounds.",
        content: [
            {
                type: "paragraph",
                text: "Every page needed one, and everyone had one that read 000042 forever because nobody had worked out how to write the number back.",
            },
            {
                type: "paragraph",
                text: "The working version was one transparent GIF per digit, swapped server-side on each hit. It counted reliably and it looked exactly like 1995 was supposed to look.",
            },
            {
                type: "quote",
                text: "A counter that does not move is a decoration, not a counter.",
            },
        ],
    },
];
