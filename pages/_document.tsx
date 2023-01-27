import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Polywrap is a WebAssembly standard for building endlessly extensible software that runs anywhere."
          />
          <meta
            property="og:description"
            content="Polywrap is a WebAssembly standard for building endlessly extensible software that runs anywhere."
          />

          <link rel="manifest" href="/manifest.json" />
          <title>Polywrap - Enter the Composable Future</title>
          <meta
            property="og:title"
            content="Polywrap - Enter the Composable Future"
          />

          <meta property="og:image" content="/polywrap-og.jpg" />
          <meta property="og:image:width" content="2998" />
          <meta property="og:image:height" content="1570" />

          <link rel="canonical" href="https://www.polywrap.io/" />
          <meta property="og:url" content="https://polywrap.io/" />
          <meta property="og:type" content="website" />
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@polywrap_io" />
          <meta name="twitter:creator" content="@polywrap_io" />
          <meta name="twitter:image" content="/polywrap-og.jpg" />
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
