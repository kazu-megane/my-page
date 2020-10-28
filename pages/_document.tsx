import React from "react";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { GA_TRACKING_ID } from '~/lib/logics/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta name="og:type" property="og:type" content="website" />
          <meta
            name="og:site_name"
            property="og:site_name"
            content="KAZUYA HASHIMOTO"
          />
          <meta
            name="og:title"
            property="og:title"
            content="KAZUYA HASHIMOTO"
          />
          <meta
            name="og:description"
            property="og:description"
            content="Kazuya Hashimoto's portfolio site."
          />
          <meta name="og:image" property="og:image" content="/og-image.png" />
          <meta name="twitter:image" property="twitter:image" content="/og-image.png" />
          <meta name="twitter:card" property="twitter:card" content="/og-image.png" />
          <meta
            name="apple-mobile-web-app-title"
            content="KAZUYA HASHIMOTO"
          />
          <meta name="og:url" property="og:url" content="https://kazuyaframe.work/" />
          <style>
            {`
            #__next {
                height: 100%;
            }
            `}
          </style>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&family=Noto+Sans+JP:wght@400;700&display=swap"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
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
