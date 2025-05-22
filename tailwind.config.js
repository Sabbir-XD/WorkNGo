import daisyui from "daisyui";
import light from "daisyui/src/colors/themes/[data-theme=light].js";
import dark from "daisyui/src/colors/themes/[data-theme=dark].js";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mylight: {
          ...light,
          primary: "#22c55e",
          "primary-content": "#ffffff",
        },
      },
      {
        mydark: {
          ...dark,
          primary: "#16a34a",
          "primary-content": "#ffffff",
          "base-100": "#000000",       // 🔥 background black
          "base-content": "#ffffff",   // 🔥 text white
        },
      },
      "light",
      "dark",
    ],
    darkTheme: "mydark",
  },
};
