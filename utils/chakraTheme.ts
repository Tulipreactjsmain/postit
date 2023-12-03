import { extendTheme, ThemeConfig } from '@chakra-ui/react';

interface CustomThemeFonts {
  heading: string;
  body: string;
}

interface CustomThemeConfig extends ThemeConfig {
  fonts?: CustomThemeFonts;
}

const theme: CustomThemeConfig = extendTheme({
  fonts: {
    heading: `'harmattan', sans-serif`,
    body: `'harmattan', sans-serif`,
  },
});

export default theme;
