import * as React from 'react';
import Head from 'next/head';
import '@/globals/styles.css';

export default function App({ Component, pageProps }: any) {
  return (
    <React.StrictMode>
      <Head>
        <title>Atelier® Testing</title>
        <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
