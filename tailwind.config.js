/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                textSlide: {
                    '0%': {
                        transform: 'translateY(-100%)',
                        opacity: '0',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1',
                    },
                },
            },
            animation: {
                'text-slideIn-top-1': 'textSlide 1s forwards',
                'text-slideIn-top-2': 'textSlide 1s forwards 200ms',
                'text-slideIn-top-3': 'textSlide 1s forwards 400ms',
                'text-slideIn-top-4': 'textSlide 1s forwards 600ms',
                'text-slideIn-top-5': 'textSlide 1s forwards 800ms',
            },
        },
    },
    plugins: [],
};
