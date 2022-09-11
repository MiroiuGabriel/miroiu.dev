/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#121212',
				overlay: 'rgba(0,0,0,0.6)',
				ui: '#4c4c4c',
				'ui-dark': '#aaaaaa',
				contrast: '#ffffff14',
				'ui-dark-hover': '#606060',
				'ui-hover': '#181818',
			},
			transitionProperty: {
				background: 'background',
				margin: 'margin',
				outline: 'outline',
			},
		},
	},
	plugins: [],
};
