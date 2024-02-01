/** @type {import('tailwindcss').Config} */
export default {
	content: ["./app.jsx", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
			},
			colors: {
				main: "#005C00",
				second: "#BA0C0C",
				honeyWhite: "#ECFFEB",
			},
			fontFamily: {
				headerFont: ["Playfair Display", "serif"],
				mainFont: ["Nixie One", "system-ui"],
			},
		},
	},
	plugins: [],
}
