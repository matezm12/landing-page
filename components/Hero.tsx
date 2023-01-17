import React from "react";
import { alpha, Box, Button, Container, Typography } from "@mui/material";
import { colors, typography } from "../styles/theme";
import Blobs from "./Blobs";
import MetaverseBackground from "./MetaverseBackground";

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
        <Button color="primary" size="large" sx={{ mt: 4 }}>
          Try It Out
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
