import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { MyContextProvider } from "@/utils/store";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <>
      <MyContextProvider {...pageProps}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MyContextProvider>
    </>
  );
}
