import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#146C43",
          "green-dark": "#0D4A2E",
          gold: "#E8A93A",
          "gold-dark": "#C9871E",
          red: "#C1272D",
          "red-dark": "#8F1B20",
          brown: "#4A2E1F",
          "brown-dark": "#2B1B12",
          cream: "#F7F1E3",
          "cream-dark": "#EDE2C7",
        },
      },
      fontFamily: {
        // Bahnschrift ships with Windows 10/11 and renders its Bold weight
        // for headings automatically via font-weight; it is not bundled
        // here (proprietary Microsoft font) so non-Windows visitors fall
        // back to the Google-hosted Poppins/Inter pair below.
        display: ["Bahnschrift", "var(--font-display)", "system-ui", "sans-serif"],
        body: ["Bahnschrift", "var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% 20%, rgba(232,169,58,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(20,108,67,0.35), transparent 45%), linear-gradient(160deg, #2B1B12 0%, #1B2E1F 60%, #17251B 100%)",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(43, 27, 18, 0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
