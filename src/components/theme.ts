// src/theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// 1) Set up your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 2) Extend the Chakra theme
const customTheme = extendTheme({
  config,
  colors: {
    brand: {
      darkBrown: "#522a06",
      lightGreen: "#d7e5b4",
      golden: "#e5ab30",
      brightGreen: "#8bc42e",
    },
  },
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  // optional global style overrides
  styles: {
    global: {
      body: {
        bg: "brand.lightGreen",
      },
    },
  },
  // customize shadows, transitions, etc. if desired
  shadows: {
    outline: "0 0 0 3px rgba(139, 196, 46, 0.6)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 6px 12px rgba(0, 0, 0, 0.2)",
  },
});

export default customTheme;
