/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				slide: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' }, // mueve hacia la izquierda para que los logos parezcan deslizarse a la derecha
				},
			},
			animation: {
				slide: 'slide 20s linear infinite', // Puedes cambiar 30s por la velocidad que prefieras
			},
		},
	},
	plugins: [],
}

