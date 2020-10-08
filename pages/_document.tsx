import React from "react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <style>
            {`
            #__next {
                height: 100%;
            }
            `}
          </style>
          <link
            href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Noto+Sans+JP:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
