import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

import AOS from 'aos'
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {

  React.useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true
    })

  })

  return (
    <div>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
