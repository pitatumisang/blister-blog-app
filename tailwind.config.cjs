module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Cabin', 'sans-serif'],
			heading: ['Roboto Condensed', 'sans-serif']
		},
		extend: {
			colors: {
				primaryColor: '#4A63E2',
				bgColor: '#f0f4f8',
				borderColor: '#BCCCDC'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
