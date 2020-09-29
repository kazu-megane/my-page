import React from "react";
import Head from "next/head";
import App, { AppContext } from "next/app";
import { WrapperProps } from "next-redux-wrapper";
import { wrapper } from "~/lib/strore";

type MyAppProps = WrapperProps;

class MyApp extends App<MyAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>KAZUYA HASHIMOTO</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
