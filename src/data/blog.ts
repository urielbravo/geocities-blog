export const POSTS_PER_PAGE = 4;

export interface PostCategory {
    slug: string;
    name: string;
}

/**
 * Declared order is display order in the sidebar. The slug values are also the
 * allowed set for a post's `category` frontmatter — see content.config.ts.
 */
export const categories: PostCategory[] = [
    { slug: "technology", name: "Technology" },
    { slug: "personal", name: "Personal" },
    { slug: "games", name: "Games" },
    { slug: "music", name: "Music" },
    { slug: "uncategorized", name: "Uncategorized" },
];
