import {
    categories,
    posts,
    POSTS_PER_PAGE,
    type Post,
} from "../data/posts";

/** Newest first. ISO dates sort correctly as plain strings. */
export function sortedPosts(): Post[] {
    return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

/** Formats an ISO date the way the old posts read: "August 24, 1997". */
export function formatDate(iso: string): string {
    return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function getPost(slug: string): Post | undefined {
    return posts.find((post) => post.slug === slug);
}

export function getRecentPosts(limit = 5): Post[] {
    return sortedPosts().slice(0, limit);
}

export function getCategoryName(slug: string): string {
    return categories.find((c) => c.slug === slug)?.name ?? slug;
}

/** Categories in declaration order, each with its (sorted) posts. */
export function getCategories(): { slug: string; name: string; posts: Post[] }[] {
    const sorted = sortedPosts();
    return categories.map((category) => ({
        ...category,
        posts: sorted.filter((post) => post.category === category.slug),
    }));
}

export function getPostsByCategory(slug: string): Post[] {
    return sortedPosts().filter((post) => post.category === slug);
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

export function totalBlogPages(): number {
    return Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
}

/**
 * Builds a page URL under a base path. Page 1 lives at the base itself, later
 * pages live under `/page/n/`, which is what the catch-all routes resolve.
 *
 *   pageHref("/blog", 1)        -> "/blog/"
 *   pageHref("/blog", 2)        -> "/blog/page/2/"
 *   pageHref("/category/games/") -> "/category/games/"
 */
export function pageHref(basePath: string, page: number): string {
    const base = basePath.endsWith("/") ? basePath : `${basePath}/`;
    return page <= 1 ? base : `${base}page/${page}/`;
}

/** Canonical URL for a post. */
export function postHref(slug: string): string {
    return `/blog/${slug}/`;
}

/** Canonical URL for a category listing. */
export function categoryHref(slug: string): string {
    return `/category/${slug}/`;
}
