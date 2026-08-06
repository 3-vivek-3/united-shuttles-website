import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const removeTrailingSlash = (href) => {
	const url = new URL(href);
	url.pathname = url.pathname.replace(/\/+$/, "") || "/";
	return url.href;
};

// https://astro.build/config
export default defineConfig({
	// Update this with your production URL (can be overridden via ASTRO_SITE env var)
	site: process.env.ASTRO_SITE ?? "https://unitedshuttles.nl",

	// Set base path when deploying to a subdirectory (e.g. GitHub Pages project site)
	// Can be overridden via ASTRO_BASE env var.

	base: process.env.ASTRO_BASE ?? "/",

	integrations: [
		sitemap({
			serialize(item) {
				item.url = removeTrailingSlash(item.url);

				if (item.links) {
					item.links = item.links.map((link) => ({
						...link,
						url: removeTrailingSlash(link.url),
					}));
				}

				return item;
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},

	build: {
		assets: "assets",
	},

	markdown: {
		syntaxHighlight: "prism",
		shikiConfig: {
			theme: "github-dark",
		},
	},
});
