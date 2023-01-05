import React from "react";
import { alpha, Box, Button, Container, Typography } from "@mui/material";
import { colors, typography } from "../styles/theme";
import Blobs from "./Blobs";

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Blobs />
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
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