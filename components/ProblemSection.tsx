import React from "react";
import { alpha, Box, Container, Grid, Stack, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { colors } from "../styles/theme";
import ProblemVisual from "../public/images/problem-visual.png";
import Image from "next/image";

const ProblemSection = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        width: "100%",
        mb: [16, 16, 0],
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        component="div"
        sx={{
          width: ["90vw", "70vw", "50vw"],
          right: 0,
          bottom: [0, "-10%", 0],
          position: "absolute",
        }}
      >
        <Image
          src={ProblemVisual}
          alt="Siloed Software illustration"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Container>
        <Stack spacing={4}>
          <SectionTitle top="Siloed Software" bottom="Is No Fun" />
          <Typography
            variant="body1"
            sx={{ color: alpha(colors.white, 0.8), maxWidth: 550 }}
          >
            It’s hard to use, impossible to compose, and these problems are
            getting worse each and every day.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProblemSection;
