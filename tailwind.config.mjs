/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				heading: ['Cabinet Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
