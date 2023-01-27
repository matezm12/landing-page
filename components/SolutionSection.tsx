import React from "react";
import { alpha, Box, Container, Stack, Typography } from "@mui/material";
import { animations, colors } from "../styles/theme";
import SectionTitle from "./SectionTitle";
import PolywrapperGraphic from "../public/images/polywrap-wrapper-1.png";
import PolywrapBlack from "../public/images/polywrap-black.png";
import SolutionsBlobYellow1 from "../public/images/blobs/solutions-yellow.png";
import SolutionsBlobYellow2 from "../public/images/blobs/solutions-yellow-2.png";
import SolutionsBlobMagenta from "../public/images/blobs/solutions-magenta.png";
import SolutionsBlobGreen from "../public/images/blobs/solutions-green.png";
import SolutionsBlobCyan from "../public/images/blobs/solutions-cyan.webp";
import WaveLines from "../public/images/wave-lines-1.webp";
// import WaveLines2 from "../public/images/wave-lines-2.png";
import Image from "next/image";

const SolutionSection = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "calc(var(--vh, 1vh) * 100)",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* <Box
        component="div"
        sx={{
          position: "absolute",
          width: "100%",
          top: "20%",
          opacity: 0.5,
          zIndex: -1,
        }}
      >
        <Image
          src={WaveLines2}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </Box> */}
      <Box
        component="div"
        sx={{
          position: "absolute",
          width: "100vw",
          zIndex: -1,
        }}
      >
        <Image
          src={WaveLines}
          alt=""
          style={{ width: "100%", height: "auto" }}
          quality={5}
          placeholder="blur"
        />
      </Box>
      <Box
        component="div"
        sx={{
          position: "absolute",
          right: "-3%",
          bottom: 0,
          width: [200, 200, 300],
        }}
      >
        <Box
          component="div"
          sx={{
            ...animations.float,
            animation: `float 5s ease-in-out infinite`,
            animationDelay: "1500ms",
            position: "absolute",
            bottom: "53%",
            right: "35%",
            width: "86%",
            opacity: [0, 0, 1],
            zIndex: -1,
          }}
        >
          <Image
            src={SolutionsBlobMagenta}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Image
          src={PolywrapperGraphic}
          alt=""
          style={{ width: "100%", height: "auto", zIndex: 1 }}
        />
        <Box
          component="div"
          sx={{
            ...animations.float,
            animation: `float 8s ease-in-out infinite`,
            animationDelay: "500ms",
            position: "absolute",
            bottom: "-22%",
            right: "-3%",
            width: "52%",
          }}
        >
          <Image
            src={SolutionsBlobYellow2}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
      <Container sx={{ position: "relative" }}>
        <Stack spacing={4}>
          <SectionTitle top="Polywrap" bottom="Solves This..." />
          <Box
            component="div"
            sx={{
              color: alpha(colors.white, 0.8),
              fontSize: 18,
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
              <Box
                component="div"
                sx={{
                  position: "absolute",
                  top: "-3.2%",
                  right: "-22.2%",
                  width: "55%",
                  // aspectRatio: "1230/1202",
                  opacity: [0, 1],
                }}
              >
                <Image
                  src={SolutionsBlobCyan}
                  alt=""
                  sizes="max-width(1200px) 440px, max-width(768px) 380px"
                  quality={50}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Box
                component="div"
                sx={{
                  ...animations.float,
                  animation: `float 10s ease-in-out infinite`,
                  animationDelay: "750ms",
                  position: "absolute",
                  bottom: ["-10%", "-15%", "-12%", "-7%"],
                  right: ["56%", "47%", "35%", "-3%"],
                  width: ["35%", "35%", "45%"],
                }}
              >
                <Image
                  src={SolutionsBlobGreen}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Image
                src={PolywrapBlack}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </Box>
            Polywrap lets you compose software like never before. With Polywrap
            you can turn your project into a set of endlessly extensible
            software modules that run anywhere.
          </Box>
        </Stack>
        <Box
          component="div"
          sx={{
            ...animations.float,
            animation: `float 6s ease-in-out infinite`,
            position: "absolute",
            bottom: ["150%", "140%", "120%"],
            left: ["-20%", "-10%"],
            width: ["70%", "50%", "30%"],
          }}
        >
          <Image
            src={SolutionsBlobYellow1}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SolutionSection;
