import React from "react";
import { alpha, Box, Button, Container, Typography } from "@mui/material";
import { animations, colors, typography } from "../styles/theme";
import Blobs from "./Blobs";
import MetaverseBackground from "./MetaverseBackground";
import ReactGA from "react-ga";

const Hero = () => {
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
      <Blobs section="hero" />
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            ...animations.fadeUp,
            animation: `fadeUp 1s forwards`,
            opacity: 0,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          <Box
            component="span"
            sx={{
              color: alpha(colors.white, 0.7),
              display: "block",
              ...typography.display.h4,
              mb: 0.5,
            }}
          >
            Enter The
          </Box>
          <Box
            component="div"
            sx={{
              textShadow: `0 4px 64px rgba(255,255,255,0.3)`,
              display: "block",
              fontWeight: 800,
              ...typography.display.h1,
              lineHeight: 0.9,
            }}
          >
            Composable
            <br />
            Future
          </Box>
        </Typography>
        <Typography
          sx={{
            ...animations.fadeUp,
            animation: `fadeUp 1s 1s forwards`,
            opacity: 0,
            mt: 4,
            textAlign: "center",
          }}
        >
          Polywrap is a framework for building cross-platform web3 SDKs.
        </Typography>
        <Button
          color="primary"
          size="large"
          href="https://docs.polywrap.io/quick-start/integrate-wrappers/install-client"
          onClick={() => {
            ReactGA.event({
              category: "CTA",
              action: `goto quick start`,
              label: "Hero",
            });
          }}
          sx={{
            ...animations.fadeUp,
            animation: `fadeUp 1s 1.25s forwards`,
            opacity: 0,
            mt: 4,
          }}
        >
          Start Building
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
