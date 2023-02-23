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
					300: '#EDECEE',
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
