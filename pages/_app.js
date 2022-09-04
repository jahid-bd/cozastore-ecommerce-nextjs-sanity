import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";
import Layout from "../components/layout";
import { StateContext } from "../context/StateContext";
import "../styles/global.css";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {" "}
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    </StateContext>
  );
}

export default MyApp;
