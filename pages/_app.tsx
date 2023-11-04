import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import db from '@/utils/connectDb'

export default function App({ Component, pageProps }: AppProps) {
  db.once('open', () => {
    console.log('MongoDB connection is ready.');
  });
  return <Component {...pageProps} />
}
