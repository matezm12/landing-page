import { Box, Button, Container, Typography, alpha } from "@mui/material";
import { animations, colors, typography } from "../styles/theme";

import Blobs from "./Blobs";
import MetaverseBackground from "./MetaverseBackground";
import React from "react";
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
      <MetaverseBackground fade="bottom" opacity={0.2} />
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
              color: alpha(colors.white, 1),
              display: "block",
              ...typography.display.h4,
              mb: 0.5,
            }}
          >
            Be Part of The
          </Box>
          <Box
            component="div"
            sx={{
              color: '#0067B9',
              textShadow: `2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
              1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff`,
              display: "block",
              fontWeight: 900,
              ...typography.display.h1,
              lineHeight: 0.9,
              padding: 0.5
            }}
          >
            Ukranian
          </Box>
          <Box
            component="div"
            sx={{
              color: '#FFDD00',
              textShadow: `0 4px 64px rgba(255,255,255,0.3)`,
              display: "block",
              fontWeight: 800,
              ...typography.display.h1,
              lineHeight: 0.9,
            }}
          >
            Heroes
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
          Theometrics Ukraine is a new way to be part of the frontline heroes.
        </Typography>
        <Button
          color="primary"
          size="large"
          href="https://closetheskyoverukraine.com"
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
          Start Contributing
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
