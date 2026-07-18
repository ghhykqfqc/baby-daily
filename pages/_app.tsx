import type { AppProps } from 'next/app';
import Head from 'next/head';
import App from '../App';
import '../App.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>BabyLog AI</title>
        <meta name="description" content="智能宝宝日常记录应用" />
      </Head>
      <App {...pageProps} />
    </>
  );
}
