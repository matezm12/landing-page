import React from "react";
import { alpha, Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../styles/theme";
import SectionTitle from "./SectionTitle";

const SolutionSection = () => {
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
      <Container>
        <Stack spacing={4}>
          <SectionTitle top="Polywrap" bottom="Solves This..." />
          <Typography
            variant="body1"
            sx={{ color: alpha(colors.white, 0.8), maxWidth: 550 }}
          >
            Polywrap lets you compose software like never before. With Polywrap
            you can turn your project into a set of endlessly extensible
            software modules that run anywhere.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default SolutionSection;
