module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        brightness: {
            35: '.35',
            175: '1.75',
        },
        colors: {
            'primary-orange': '#FF7A00',
        },
        fontFamily: {
            orbitron: ['Inter', 'sans-serif'],
            athiti: ['Inter', 'sans-serif'],
            poppins: ['Inter', 'sans-serif'],
        },
    },
    plugins: [],
}
