/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				white: '#FFFFFF',
				gray: {
					900: '#121214',
					800: '#000000bf',
					400: '#EDECEE',
					300: '#F4F4FF',
					200: '#EAEAEA',
				},
				red: {
					500: '#E45858',
				},
				violet: {
					600: '#533CBE',
					500: '#6246EA',
				},
			},
			fontSize: {
				lg: 20,
				md: 16,
				sm: 14,
			},
			fontFamily: {
				sans: 'Roboto, sans-serif',
			},
		},
	},
	plugins: [],
}
