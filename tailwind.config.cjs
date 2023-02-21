/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				black: {
					900: '#121214',
					800: '#000000bf',
				},
				red: {
					500: '#E45858',
				},
				violet: {
					500: '#6246EA',
				},
			}
		},
	},
	plugins: [],
}
