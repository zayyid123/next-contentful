/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        desktop: {'max': '1440px'},
        tablet: {'max': '768px'},
        mobile: {'max': '375px'},
      },
      colors: {
        cinchy: {
          primary: {
            green: {
              950: "#00332c",
            },
            red: {
              500: "#fa5246",
            },
            yellow: {
              400: "#faae2b",
            },
            neutral: {
              100: "#F9F9F9",
              600: "#A8A8A8",
              800: "#737373",
              900: "#2E2C30",
            },
          },
          secondary: {
            green: {
              500: "#08c197",
            },
            yellow: {
              50: "#FFF9EB",
            },
          },
          background: {
            teal: {
              50: "#f2f7f5",
            },
            brown: {
              100: "#F2EFDE",
            },
          },
          base: {
            white: "#fff",
          },
          sunsetOrange: {
            50: "#fff2f1",
            100: "#ffe2e0",
            200: "#ffcbc7",
            300: "#ffa6a0",
            400: "#ff7369",
            500: "#fa5246",
            600: "#e7291b",
            700: "#c31e12",
            800: "#a11c13",
            900: "#851e17",
            950: "#490a06",
          },
          deepTeal: {
            50: "#ebfef7",
            100: "#cffcea",
            200: "#a3f7d8",
            300: "#68edc5",
            400: "#2cdbad",
            500: "#08c197",
            600: "#009d7c",
            700: "#007e66",
            800: "#026352",
            900: "#035145",
            950: "#00332c",
          },
          yellow: {
            50: "#fff9eb",
            100: "#feeec7",
            200: "#fcdc8b",
            300: "#fbc44e",
            400: "#faae2b",
            500: "#f48a0c",
            600: "#d86507",
            700: "#b3440a",
            800: "#91350f",
            900: "#772c10",
            950: "#451403",
          },
          snowDrift: {
            50: "#f2f7f5",
            100: "#dcebe5",
            200: "#b9d6cb",
            300: "#8ebaac",
            400: "#679a8b",
            500: "#4c8071",
            600: "#3b665b",
            700: "#32534a",
            800: "#2c433e",
            900: "#273a35",
            950: "#13201e",
          },
          pampas: {
            50: "#f8f7f4",
            100: "#f2f0eb",
            200: "#ddd8cb",
            300: "#c7bdaa",
            400: "#b09f87",
            500: "#a08a6f",
            600: "#937b63",
            700: "#7a6454",
            800: "#645348",
            900: "#52443c",
            950: "#2b231f",
          },
          alabaster: {
            50: "#f9f9f9",
            100: "#efefef",
            200: "#dcdcdc",
            300: "#bdbdbd",
            400: "#989898",
            500: "#7c7c7c",
            600: "#656565",
            700: "#525252",
            800: "#464646",
            900: "#3d3d3d",
            950: "#292929",
          },
        },
      },
      fontSize: {
        display: [
          "4.5rem",
          {
            fontWeight: "600",
            lineHeight: 1,
          },
        ],
        "h1-desktop": [
          "3rem",
          {
            fontWeight: "600",
            lineHeight: 1,
          },
        ],
        "h2-desktop": [
          "2.25rem",
          {
            fontWeight: "600",
            lineHeight: "2.5rem",
          },
        ],
        "h3-desktop": [
          "1.875rem",
          {
            fontWeight: "600",
            lineHeight: "2.25rem",
          },
        ],
        "h4-desktop": [
          "1.5rem",
          {
            fontWeight: "600",
            lineHeight: "2rem",
          },
        ],
        "h1-mobile": [
          "2.25rem",
          {
            fontWeight: "600",
            lineHeight: "2.5rem",
          },
        ],
        "h2-mobile": [
          "1.875rem",
          {
            fontWeight: "600",
            lineHeight: "2.25rem",
          },
        ],
        "h3-mobile": [
          "1.5rem",
          {
            fontWeight: "600",
            lineHeight: "2rem",
          },
        ],
        "h4-mobile": [
          "1.25rem",
          {
            fontWeight: "600",
            lineHeight: "1.75rem",
          },
        ],
        h5: [
          "1.125rem",
          {
            fontWeight: "600",
            lineHeight: "1.75rem",
          },
        ],
        h6: [
          "1rem",
          {
            fontWeight: "600",
            lineHeight: "1.5rem",
          },
        ],
        "p-lg": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        p: [
          "1rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        "label-lg": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        label: [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        "label-bold-lg": [
          "0.875rem",
          {
            fontWeight: "700",
            lineHeight: "1.25rem",
          },
        ],
        "label-bold": [
          "0.75rem",
          {
            fontWeight: "700",
            lineHeight: "1rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
