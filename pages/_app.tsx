import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { useEffect } from "react";
import Noise from "../components/Noise";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.body.style.setProperty("--vh", `${vh}px`);
    document.body.style.setProperty("--vw", `${vw}px`);
    document.body.style.setProperty("--vmin", `${Math.min(vw, vh)}px`);

    window.addEventListener("resize", () => {
      vh = window.innerHeight * 0.01;
      vw = window.innerWidth * 0.01;
      document.body.style.setProperty("--vh", `${vh}px`);
      document.body.style.setProperty("--vw", `${vw}px`);
      document.body.style.setProperty("--vmin", `${Math.min(vw, vh)}px`);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Polywrap - Enter the Composable Future</title>
      </Head>
      <CssBaseline />
      <Header />
      <Noise />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
