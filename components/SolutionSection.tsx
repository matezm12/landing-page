import React from "react";
import { alpha, Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../styles/theme";
import SectionTitle from "./SectionTitle";
import PolywrapperGraphic from "../public/images/polywrap-wrapper-1.png";
import PolywrapBlack from "../public/images/polywrap-black.png";
import Image from "next/image";

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
      <Box
        component="div"
        sx={{
          position: "absolute",
          right: "-3%",
          bottom: 0,
          width: [200, 200, 300],
        }}
      >
        <Image
          src={PolywrapperGraphic}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Container>
        <Stack spacing={4}>
          <SectionTitle top="Polywrap" bottom="Solves This..." />
          <Typography
            variant="body1"
            sx={{
              color: alpha(colors.white, 0.8),
              maxWidth: 550,
              position: "relative",
            }}
          >
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: "50%",
                top: "calc(50% - 64px)",
                transform: "translate(-50%,-50%)",
                width: [650, 800],
                zIndex: -1,
              }}
            >
              <Image
                src={PolywrapBlack}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
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
