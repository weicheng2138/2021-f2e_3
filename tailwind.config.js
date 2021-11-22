const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				notoTC: ['"Noto Sans TC"'],
			},
			colors: {
				primary: "#F1A923",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};
