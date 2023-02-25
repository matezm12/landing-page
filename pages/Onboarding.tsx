import Head from "next/head";
import Login from "../components/Login"
import React from "react";
import ReactGA from "react-ga";
import SignUp from "../components/SignUp"

export default function Home() {
  ReactGA.pageview("home");

  return (
    <>
      <Head>
        <title>Login / Theometrics Ukraine</title>
      </Head>
      <main>
        <Login />
      </main>
    </>
  );
}
