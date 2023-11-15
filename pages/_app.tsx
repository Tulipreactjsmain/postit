import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MyContextProvider } from "@/utils/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyContextProvider {...pageProps}>
        <Component {...pageProps} />
      </MyContextProvider>
    </>
  );
}
