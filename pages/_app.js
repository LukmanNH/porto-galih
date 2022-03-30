import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Galih Putra's Personal Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
