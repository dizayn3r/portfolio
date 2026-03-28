/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: {
                    bg:      "#0f0f17",
                    surface: "#13131f",
                    card:    "#1a1a2e",
                    border:  "rgba(255,255,255,0.08)",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};
