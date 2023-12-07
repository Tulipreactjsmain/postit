import { Html } from "next/document";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

interface CustomThemeFonts {
  heading: string;
  body: string;
}

interface CustomThemeConfig extends ThemeConfig {
  fonts?: CustomThemeFonts;
}

const theme: CustomThemeConfig = extendTheme({
  styles: {
    global: {
      "Html, body": {
        fontSize: "16px",
        background: "#F1EFF0",
      },
    },
  },
  fonts: {
    heading: `'harmattan', sans-serif`,
    body: `'harmattan', sans-serif`,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "7xl": "6.875rem",
  },
  colors: {
    brand: {
      100: "#E57C42",
      900: "#1a202c",
    },
  },
});

export default theme;
