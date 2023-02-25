import { Box, Button, Container, Typography, alpha } from "@mui/material";
import { animations, colors, typography } from "../styles/theme";

import Head from "next/head";
import MetaverseBackground from "../components/MetaverseBackground";
import React from "react";
import SectionTitle from "../components/SectionTitle";

const Four0Four = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "calc(var(--vh, 1vh) * 100)",
        minHeight: "calc(var(--vh, 1vh) * 100)",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <MetaverseBackground fade="bottom" opacity={0.4} />
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <SectionTitle top="Sorry" bottom="Nothing Here" alignment="center" />
        <Button
          href="/"
          color="primary"
          size="large"
          sx={{
            ...animations.fadeUp,
            animation: `fadeUp 1s 2s forwards`,
            opacity: 0,
            mt: 4,
          }}
        >
          Take me Home
        </Button>
      </Container>
    </Box>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>404 | Theometrics</title>
      </Head>
      <main>
        <Four0Four />
      </main>
    </>
  );
}
