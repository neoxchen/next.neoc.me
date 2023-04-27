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
                    "background-lighter": "#F8F6F2",
                    "background-normal": "#ECE4D5",
                    "background-semi-dark": "#E4D8C3",
                    "background-darker": "#DBCCB1",
                    "accent-lighter": "#ACBD89",
                    "accent-normal": "#7E9F3B",
                    "accent-darker": "#6A8632",
                    "text-lighter": "#343434",
                    "text-darker": "#2B2B2B",
                    "text-code": "#436CBE",
                    "error": "#D96C63",
                },
                dark: {
                    "background-lightest": "#1B325F",
                    "background-lighter": "#16284C",
                    "background-normal": "#101E38",
                    "background-darker": "#0D1930",
                    "accent-lighter": "#C2FFEA",
                    "accent-normal": "#7EFFD1",
                    "accent-darker": "#47FFBF",
                    "accent-darkest": "#005235",
                    "text-lighter": "#DEE5F3",
                    "text-normal": "#97ABD4",
                    "text-darker": "#7788AA",
                    "text-darkest": "#687BA1",
                    "text-code": "#436CBE",
                    "error": "#D96C63",
                    "gradient-start": "#1C2543",
                    "gradient-end": "#13273A",
                }
            },
            backgroundImage: {
                "blog-featured-image": "linear-gradient(130deg, rgba(84, 51, 255, 1) 0%, rgba(126, 255, 209, 1) 50%, rgba(0, 191, 255, 0.4) 100%)",
                "blog-overlay-gradient-light": "linear-gradient(90deg, rgba(240, 236, 229, 0) 40%, rgba(240, 236, 229, 1) 55%)",
                "blog-overlay-gradient-dark": "linear-gradient(90deg, rgba(22, 40, 76, 0) 25%, rgba(13, 25, 48, 1) 60%)",
                "blog-overlay-gradient-light-small": "linear-gradient(180deg, rgba(240, 236, 229, 0) 20%, rgba(240, 236, 229, 1) 30%)",
                "blog-overlay-gradient-dark-small": "linear-gradient(180deg, rgba(22, 40, 76, 0) 20%, rgba(13, 25, 48, 1) 30%)",
                "home-skill-overlay-gradient": "linear-gradient(180deg, rgba(22, 40, 76, 0) 20%, rgba(22, 40, 76, 1) 30%)",
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