import React from "react";
import { alpha, Box, Container, Stack, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { colors } from "../styles/theme";

const ProblemSection = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "60vh",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
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
