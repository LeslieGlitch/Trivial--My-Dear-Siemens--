module.exports = {
  // ...

  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(58, 24, 47)",
          100: "rgb(69, 26, 55)",
          200: "rgb(80, 27, 63)",
          300: "rgb(96, 29, 72)",
          400: "rgb(122, 29, 90)",
          500: "rgb(167, 24, 115)",
          600: "rgb(214, 64, 159)",
          700: "rgb(227, 75, 169)",
          800: "rgb(246, 92, 182)",
          900: "rgb(254, 235, 247)",
        },
        neutral: {
          0: "rgb(3, 7, 18)",
          50: "rgb(17, 24, 39)",
          100: "rgb(31, 41, 55)",
          200: "rgb(55, 65, 81)",
          300: "rgb(75, 85, 99)",
          400: "rgb(107, 114, 128)",
          500: "rgb(156, 163, 175)",
          600: "rgb(209, 213, 219)",
          700: "rgb(229, 231, 235)",
          800: "rgb(243, 244, 246)",
          900: "rgb(249, 250, 251)",
          950: "rgb(255, 255, 255)",
        },
        error: {
          50: "rgb(60, 24, 39)",
          100: "rgb(72, 26, 45)",
          200: "rgb(84, 27, 51)",
          300: "rgb(100, 29, 59)",
          400: "rgb(128, 29, 69)",
          500: "rgb(174, 25, 85)",
          600: "rgb(233, 61, 130)",
          700: "rgb(240, 79, 136)",
          800: "rgb(247, 97, 144)",
          900: "rgb(254, 236, 244)",
        },
        warning: {
          50: "rgb(52, 28, 0)",
          100: "rgb(63, 34, 0)",
          200: "rgb(74, 41, 0)",
          300: "rgb(87, 51, 0)",
          400: "rgb(105, 63, 5)",
          500: "rgb(130, 78, 0)",
          600: "rgb(255, 178, 36)",
          700: "rgb(255, 203, 71)",
          800: "rgb(241, 161, 13)",
          900: "rgb(254, 243, 221)",
        },
        success: {
          50: "rgb(30, 38, 13)",
          100: "rgb(37, 46, 15)",
          200: "rgb(43, 55, 17)",
          300: "rgb(52, 66, 19)",
          400: "rgb(65, 82, 21)",
          500: "rgb(83, 103, 22)",
          600: "rgb(153, 213, 42)",
          700: "rgb(196, 240, 66)",
          800: "rgb(135, 190, 34)",
          900: "rgb(239, 251, 221)",
        },
        "brand-primary": "rgb(214, 64, 159)",
        "default-font": "rgb(249, 250, 251)",
        "subtext-color": "rgb(156, 163, 175)",
        "neutral-border": "rgb(55, 65, 81)",
        black: "rgb(3, 7, 18)",
        "default-background": "rgb(3, 7, 18)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "heading-3": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "heading-2": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "700",
            letterSpacing: "0em",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
      },
      fontFamily: {
        caption: "Nunito",
        "caption-bold": "Nunito",
        body: "Nunito",
        "body-bold": "Nunito",
        "heading-3": "Nunito",
        "heading-2": "Nunito",
        "heading-1": "Nunito",
        "monospace-body": "monospace",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)",
        lg: "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
        overlay:
          "0px 12px 32px -4px rgba(0, 0, 0, 0.08), 0px 4px 8px -2px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        DEFAULT: "8px",
        lg: "12px",
        full: "9999px",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};
