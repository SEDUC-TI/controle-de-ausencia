/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				blue: '#005da8', // Primary
				hoverblue: '#3b9def', // Hover for primary, but also used in some highlights
				orange: '#ff9842', // Secondary and warning color
				border: '#ced4da', // All borders should be this color, following PrimeReact
				midnight: '#2c3e50', // The new black. Used for anything that should be black.
				concrete: '#95a5a6', // Gray in this palette. Used for labels and info.
				silver: '#bdc3c7', // In need for darker borders, use this color
				red: '#f63b42', // Used for errors and critical warnings.
				green: '#14ae5c', // Used for success messages.
			},
			gridTemplateColumns: {
				// Simple 16 column grid
				'24': 'repeat(24, minmax(0, 1fr))',
			},
			gridColumnStart: {
				'13': '13',
				'14': '14',
				'15': '15',
				'16': '16',
				'17': '17',
				'18': '18',
			},
			width: {
				'15/32': '46.88%',
				
				'16/32': '50%',
				'30/32': `${Math.floor((30/32)*100)}%`,
			}
		},
	},
	plugins: [],
};

