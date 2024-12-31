/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class', // Activar el modo oscuro basado en una clase
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Colores personalizados para el modo claro
				firstRed: '#bd0d22',
				secondRed: '#e35760',
				firstLightGray: '#6f849c',
				secondLightGray: '#435571',
				firstDarkGray: '#252c35',
				secondDarkGray: '#1c1d1c'
			},
			backgroundImage: {
				'accent-gradient': 'radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))',


				'accent-dark-gradient': 'linear-gradient(0deg, #252c35 40%, #1c1d1c 60%)'
			},
		},
	},
	plugins: [],
}
