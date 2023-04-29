/** @type {import("tailwindcss").Config} */
module.exports = {
    mode: "jit",
    content: [
        // Flowbite dynamic classes
        "./node_modules/flowbite-react/**/*.js",

        // Project files
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                regular: ["Titillium Web", "sans-serif"],
                monospace: ["Jetbrains Mono", "Consolas", "monospace"],
            },
            colors: {
                transparent: "#00000000",
                light: {
                    "background-lighter": "#FFF",
                    "background-normal": "#F5F5F5",
                    "background-semi-dark": "#E9F0DE",
                    "background-darker": "#DCEBC7",
                    "accent-lighter": "#C3E199",
                    "accent-semi-light": "#DCEBC7",
                    "accent-normal": "#86C232",
                    "accent-darker": "#69962A",
                    "accent-darkest": "#4C6A22",
                    "text-lighter": "#343434",
                    "text-darker": "#2B2B2B",
                    "text-code": "#436CBE",
                    "error": "#D96C63",
                },
                dark: {
                    "background-lighter": "#212121",
                    "background-normal": "#181818",
                    "background-darker": "#121212",
                    "accent-lighter": "#C3E199",
                    "accent-normal": "#91CD3C",
                    "accent-darker": "#86C232",
                    "accent-darkest": "#005235",
                    "text-lighter": "#FFF",
                    "text-normal": "#F9F9F9",
                    "text-darker": "#C3E199",
                    "text-code": "#C3E199",
                    "gradient-start": "#1C2543",
                    "gradient-end": "#13273A",
                }
            },
            backgroundImage: {
                "blog-featured-image": "linear-gradient(130deg, rgba(84, 51, 255, 1) 0%, rgba(126, 255, 209, 1) 50%, rgba(0, 191, 255, 0.4) 100%)",
                "blog-overlay-gradient-light": "linear-gradient(90deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 55%)",
                "blog-overlay-gradient-dark": "linear-gradient(90deg, rgba(18, 18, 18, 0) 25%, rgba(18, 18, 18, 1) 55%)",
                "blog-overlay-gradient-light-small": "linear-gradient(180deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 1) 30%)",
                "blog-overlay-gradient-dark-small": "linear-gradient(180deg, rgba(18, 18, 18, 0) 20%, rgba(18, 18, 18, 1) 30%)",
            },
            boxShadow: {
                surround: "0 0 10px var(--tw-shadow)",
            },
            animation: {
                "float-up": "float-up 0.3s ease-out 1",
                "rotate-45": "rotate-45 0.5s ease-out 1",
                "bounce-up": "bounce-up 0.75s infinite",
                "wiggle-once": "wiggle 0.3s 1",
            },
            keyframes: {
                "float-up": {
                    "0%": {transform: "translateY(50%)"},
                    "100%": {transform: "none"},
                },
                "rotate-45": {
                    "0%": {transform: "rotate(0deg)"},
                    "100%": {transform: "rotate(45deg)"},
                },
                "bounce-up": {
                    "0%, 100%": {
                        transform: "translateY(-25%)",

                    },
                    "80%": {transform: "none"},
                },
                wiggle: {
                    '0%, 100%': {transform: "none"},
                    '25%': {transform: "rotate(3deg)"},
                    '75%': {transform: "rotate(-3deg)"},
                }
            },
            flex: {
                "full": "1 1 100%",
                "weight-1": "1",
                "weight-2": "2",
                "weight-3": "3",
            }
        },
    },
    plugins: [
        require("flowbite/plugin"),
    ],
}