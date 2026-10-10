import { getCollection, type CollectionEntry } from "astro:content";

import { categories, POSTS_PER_PAGE } from "../data/blog.ts";

export type BlogPost = CollectionEntry<"blog">;

/** Newest first, drafts excluded. */
export async function sortedPosts(): Promise<BlogPost[]> {
    const posts = await getCollection("blog", ({ data }) => !data.draft);
    return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Formats a frontmatter date the way the old posts read: "August 24, 1997". */
export function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
    return (await sortedPosts()).find((post) => post.id === slug);
}

export async function getRecentPosts(limit = 5): Promise<BlogPost[]> {
    return (await sortedPosts()).slice(0, limit);
}

export function getCategoryName(slug: string): string {
    return categories.find((c) => c.slug === slug)?.name ?? slug;
}

/** Categories in declaration order, each with its (sorted) posts. */
export async function getCategories(): Promise<
    { slug: string; name: string; posts: BlogPost[] }[]
> {
    const sorted = await sortedPosts();
    return categories.map((category) => ({
        ...category,
        posts: sorted.filter((post) => post.data.category === category.slug),
    }));
}

export async function getPostsByCategory(slug: string): Promise<BlogPost[]> {
    return (await sortedPosts()).filter((post) => post.data.category === slug);
}

export interface Page<T> {
    items: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

/** Slices a list into a page. `requested` is clamped to the available range. */
export function paginate<T>(
    items: T[],
    requested: number,
    perPage: number = POSTS_PER_PAGE,
): Page<T> {
    const totalPages = Math.max(1, Math.ceil(items.length / perPage));
    const currentPage = Math.min(Math.max(1, requested), totalPages);
    const start = (currentPage - 1) * perPage;

    return {
        items: items.slice(start, start + perPage),
        currentPage,
        totalPages,
        totalItems: items.length,
    };
}

export async function totalBlogPages(): Promise<number> {
    const posts = await sortedPosts();
    return Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
}

/**
 * Builds a page URL under a base path. Page 1 lives at the base itself, later
 * pages live under `/page/n/`, which is what the catch-all routes resolve.
 *
 *   pageHref("/blog", 1)          -> "/blog/"
 *   pageHref("/blog", 2)          -> "/blog/page/2/"
 *   pageHref("/category/games/", 2) -> "/category/games/page/2/"
 */
export function pageHref(basePath: string, page: number): string {
    const base = basePath.endsWith("/") ? basePath : `${basePath}/`;
    return page <= 1 ? base : `${base}page/${page}/`;
}

/** Canonical URL for a post — the filename is the slug. */
export function postHref(id: string): string {
    return `/blog/${id}/`;
}

/** Canonical URL for a category listing. */
export function categoryHref(slug: string): string {
    return `/category/${slug}/`;
}
