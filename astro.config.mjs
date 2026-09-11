// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeExquisitus from "starlight-theme-exquisitus";

export default defineConfig({
	site: "https://pratyay360.github.io",
	base: "/docs",
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

			head: [
				{
					tag: "meta",
					attrs: {
						name: "author",
						content: "PRATYAY MUSTAFI",
					},
				},
				{
					tag: "meta",
					attrs: {
						name: "google-site-verification",
						content: "Va5ujtlU8FJUGHM84xxJvdFwqT4ocbM-Wpjnl3vXsBw",
					},
				},
				{
					tag: "meta",
					attrs: {
						property: "og:type",
						content: "website",
					},
				},
			],

			plugins: [starlightThemeExquisitus()],

			pagefind: true,

			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},

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
						{
							autogenerate: {
								directory: "reference",
								collapsed: true,
							},
						},
					],
				},
			],
		}),
	],
});
