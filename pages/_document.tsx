import * as React from "react";

import Document, { Head, Html, Main, NextScript } from "next/document";

import ReactGA from "react-ga";
import { ServerStyleSheets } from "@mui/styles";

ReactGA.initialize("UA-160302501-1");

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#5361F8"></meta>
          <meta
            name="description"
            content="Theometrics."
          />
          <meta
            property="og:description"
            content="Theometrics."
          />

          <link rel="manifest" href="/manifest.json" />
          <meta
            property="og:title"
            content="Theometrics Ukraine "
          />

          <meta property="og:image" content="/theoukr.png" />
          <meta property="og:image:width" content="2998" />
          <meta property="og:image:height" content="1570" />

          <link rel="canonical" href="/" />
          <meta property="og:url" content="/" />
          <meta property="og:type" content="website" />
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@polywrap_io" />
          <meta name="twitter:creator" content="@polywrap_io" />
          <meta name="twitter:image" content="/theoukr.png" />
          <meta name="twitter:image:width" content="2998" />
          <meta name="twitter:image:height" content="1570" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.

  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
