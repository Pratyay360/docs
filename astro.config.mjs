// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeExquisitus from "starlight-theme-exquisitus";

// GitHub Pages project site is https://pratyay360.github.io/docs/ -> needs base "/docs/"
// Surge is https://docs-pratyay.surge.sh -> needs base "/"
// Default to GitHub Pages; set SURGE=true to build for Surge
const isSurge = process.env.SURGE === "true";

export default defineConfig({
	site: isSurge
		? "https://docs-pratyay.surge.sh"
		: "https://pratyay360.github.io",
	base: isSurge ? "/" : "/docs/",
	integrations: [
		starlight({
			title: "Docs (managed with lightcms)",
			description: "Docs With astro starlight",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/Pratyay360/docs",
				},
				{
					icon: "rss",
					label: "Website",
					href: "https://pratyay.qzz.io",
				},
			],
			plugins: [starlightThemeExquisitus()],
			pagefind: true,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			pagination: true,
			sidebar: [
				{
					label: "Start Here",
					items: [
						{ label: "Introduction", slug: "index" },
						{ label: "Getting Started", slug: "getting-started" },
					],
				},
				{
					label: "Guides",
					collapsed: false,
					items: [{ autogenerate: { directory: "guides" } }],
				},
				{
					label: "Reference",
					collapsed: true,
					items: [
						{ autogenerate: { directory: "reference", collapsed: true } },
					],
				},
			],
		}),
	],
});
