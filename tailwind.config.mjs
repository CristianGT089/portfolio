/** @type {import('tailwindcss').Config} */
// Paleta tomada de estilo-cristian.sty (identidad de las propuestas): rojo carmesí + gris carbón.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
	content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
	theme: {
		extend: {
			colors: {
				paper: token('paper'), // fondo de página
				surface: token('surface'), // tarjetas
				soft: token('soft'), // grisfondo: cajas neutras
				ink: token('ink'), // carbón: texto principal
				muted: token('muted'), // gris: texto secundario
				line: token('line'), // grislinea: reglas y bordes
				accent: token('accent'), // rojo: títulos, acentos
				brand: token('brand'), // rojo de superficies llenas (botones, disco)
				'brand-deep': token('brand-deep'), // rojooscuro
				'accent-soft': token('accent-soft'), // rojosuave: cajas destacadas
			},
			fontFamily: {
				sans: ['"Source Sans 3 Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			maxWidth: {
				page: '74rem',
			},
		},
	},
	plugins: [],
};
