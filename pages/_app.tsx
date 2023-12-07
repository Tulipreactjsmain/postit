import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "@fontsource/harmattan/400.css";
import "@fontsource/harmattan/700.css";
import theme from "@/utils/chakraTheme";
import { ChakraProvider } from "@chakra-ui/react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Navbar } from "@/components";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </>
  );
}
