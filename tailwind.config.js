/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {

        extend: {
            fontFamily: {
                "manrope": ['Manrope', "sans-serif"],
                "poppins": ['Poppins', "sans-serif"],

            },
            container: {
                center: true,
                padding: "0.4rem"
            },
            boxShadow: {

                "b": "0 0.2px 0px rgba(255,255,255,0.2)",
                "d": "0 0.2px 0px rgba(0,0,0,0.6)",
            },
            backgroundColor: {

                "telegram-light": "#6cc1e3"
            }
        },
    },
    darkMode: 'class',
    plugins: [],
}