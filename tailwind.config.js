module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      // => @media (min-width: 480px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(290px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
};
