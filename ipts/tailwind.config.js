/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./node_modules/capstone-ds-rn/dist/components/**/*.js'
	],
	colors: {},
	theme: {
		extend: {
			colors: {
				capstoneblue: {
					0: '#7ab2ff',
					50: '#73a9f5',
					100: '#6da1eb',
					150: '#6397e1',
					200: '#598ed7',
					300: '#4177c3',
					400: '#265faf',
					500: '#0c489c',
					600: '#003988',
					700: '#003074',
					800: '#002860',
					900: '#00204c',
					1000: '#001738'
				},
				capstoneteal: {
					0: '#bdfdff',
					50: '#8df1f5',
					100: '#61e5eb',
					150: '#39d9e0',
					200: '#15cdd6',
					300: '#00b8c2',
					400: '#00a4ad',
					500: '#009099',
					600: '#007c85',
					700: '#006970',
					800: '#00565c',
					900: '#004347',
					1000: '#003033'
				},
				capstonered: {
					0: '#ffb3c7',
					50: '#f38fa9',
					100: '#e76e8e',
					150: '#db5075',
					200: '#cf355e',
					300: '#b60b39',
					400: '#9e002a',
					500: '#860024',
					600: '#6e001d',
					700: '#550017',
					800: '#3d0010',
					900: '#25000a',
					1000: '#0d0003'
				},
				capstonegray: {
					100: '#eaeaec',
					200: '#d5d5d9',
					300: '#ababb3',
					400: '#82828d',
					500: '#585867',
					600: '#2e2e41',
					700: '#252534',
					800: '#1c1c27',
					900: '#12121a',
					1000: '#09090d'
				}
			}
		}
	},
	plugins: []
};
