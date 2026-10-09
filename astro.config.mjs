// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
            // Astro/Vite inlines assets under 4kB into the HTML as base64 data
            // URIs. Nine of the marquee button sprites fall under that, and the
            // marquee renders two copies of each for a seamless loop, so the
            // inlining doubled ~33kB of base64 into a page that was otherwise
            // a few kB. Emitting them as real hashed files keeps the HTML small
            // and lets the browser cache them across pages.
            assetsInlineLimit: 0,
        },
    },
});