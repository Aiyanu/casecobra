import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        flashing: {
          "0%,100%": { opacity: "0.2" },
          "20%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s linear forwards",
        marquee: "marquee var(--marquee-duration) linear infinite",
        flashing: "flashing 1.4s infinite linear",
      },
      backgroundImage: {
        "grainy-light":
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDUgNzkuMTY0NTkwLCAyMDIwLzEyLzA5LTExOjU3OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA0LTIxVDE1OjU4OjUxKzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA0LTIxVDE1OjU4OjUxKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNC0yMVQxNTo1ODo1MSswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDA0ZTNlNi1jMDMxLTljNGYtOTg1NC00ZTUyOTg2ZWMwNzIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2ZDlmM2FiMS03YzVhLTQxNDUtYjljYy1l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')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
