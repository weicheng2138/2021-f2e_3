const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				notoTC: ["Noto Sans TC"],
				mPlus: ["'M PLUS Rounded 1c'"],
			},
			colors: {
				redDark: "#EA4362",
				redRegular: "#FA728B",
				redLight: "#FFF1F3",
				yellowDark: "#FEAA2B",
				yellowRegular: "#FFCE4B",
				yellowLight: "#FFFAED",
				greenDark: "#5A9E7C",
				greenRegular: "#83CC61",
				greenLight: "#F3FAEF",
				blueDark: "#006C9A",
				blueRegular: "#53CDE2",
				blueLight: "#EEFAFC",
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
