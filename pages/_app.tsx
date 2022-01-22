import React, { useEffect, FC } from "react";
import "../style/index.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { AppContext, AppProps } from "next/app";
import { wrapper } from "~/lib/strore";
import * as gtag from "~/lib/logics/gtag";

type MyAppProps = AppProps & AppContext;

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=0, shrink-to-fit=no"
        />
        <meta name="description" content="Kazuya Hashimoto's portfolio site." />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
