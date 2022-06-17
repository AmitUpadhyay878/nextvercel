import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:image:width" key="og-image_width" content="1200" />
        <meta property="og:image:height" key="og-image_height" content="630" />

        <meta
          property="og:image"
          key="og-image"
          content="/BeatyAppSolutionInnerPage.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
