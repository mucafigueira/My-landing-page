/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "accent": "#22C55E",
                    "neutral": "#F8FAFC",
                    "base-100": "#FFFFFF",
                    "base-content": "#0F172A",
                },
            },
        ],
    },
};
