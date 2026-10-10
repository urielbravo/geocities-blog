import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import { categories } from "./data/blog.ts";

/**
 * Blog posts live as markdown in src/content/blog/. One file per post; the
 * filename is the URL slug (`meet-kito.md` -> /blog/meet-kito/).
 *
 * The category schema is built from the list in data/blog.ts so the two can't
 * drift apart — adding a category there immediately allows it in frontmatter.
 */
const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        /** ISO date in the frontmatter; YAML parses it into a Date. */
        date: z.coerce.date(),
        category: z.enum(
            categories.map((c) => c.slug) as [
                (typeof categories)[number]["slug"],
                ...(typeof categories)[number]["slug"][],
            ],
        ),
        /** Label rendered inside the image placeholder. */
        imageLabel: z.string(),
        /** Shown on listings, where the full body is not rendered. */
        excerpt: z.string(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
