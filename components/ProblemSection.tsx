import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { animations, colors } from "../styles/theme";

import Image from "next/image";
import PolywrapWrapper from "../public/images/polywrap-wrapper-1.png";
import React from "react";
import SectionTitle from "./SectionTitle";
import Waves from "../public/images/wave-lines-1.webp";

const ProblemSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "calc(var(--vh, 1vh) * 70)",
        width: "100%",
        mb: [16, 16, 0],
        position: "relative",
        zIndex: 1,
      }}
    >
      {!isMobile && (
        <Image
          src={Waves}
          alt=""
          style={{
            width: "100vw",
            height: "auto",
            position: "absolute",
            opacity: 0.3,
            top: "20%",
          }}
        />
      )}
      <Container>
        <Stack spacing={6} sx={{ alignItems: "center", position: "relative" }}>
          <Stack spacing={4} sx={{ alignItems: "center" }}>
            <SectionTitle
              top="Conventional"
              bottom="Donations"
              letterSpacing="tight"
              alignment="center"
            />
            <Typography
              variant="body1"
              sx={{
                color: alpha(colors.white, 0.8),
                fontSize: 18,
                maxWidth: 600,
                textAlign: "center",
              }}
            >
              Description of conventional donations and how to donate.

              Information about the Sky Over website and government donation page.
            </Typography>
          </Stack>
          <Box
            component="div"
            sx={{
              filter: "blur(150px)",
              opacity: 0.3,
              width: 400,
              position: "absolute",
              top: "-100%",
              left: "-6%",
              zIndex: -1,
              pointerEvents: "none",
              ...animations.float,
              animation: `float 12s 2s ease-in-out infinite`,
            }}
          >
            <svg
              width="957"
              height="1251"
              viewBox="0 0 957 1251"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M430.285 316.465C551.001 218.857 458.742 606.299 497.041 667.699C543.745 742.574 672.207 581.447 654.619 637.736C622.609 740.183 650.2 979.176 547.753 947.165C445.305 915.155 272.598 781.299 304.609 678.851C321.394 625.133 386.734 565.71 402.59 495.627C416.973 432.054 379.879 357.222 430.285 316.465Z"
                fill="#D362DF"
              />
            </svg>
          </Box>
          <Box
            component="div"
            sx={{
              filter: "blur(110px)",
              opacity: 0.5,
              width: 360,
              position: "absolute",
              top: "-50%",
              left: "39%",
              zIndex: -1,
              pointerEvents: "none",
              ...animations.float,
              animation: `float 8s 1s ease-in-out infinite`,
            }}
          >
            <svg
              width="616"
              height="796"
              viewBox="0 0 616 796"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M352.816 584.868C282.757 650.097 322.854 407.809 296.657 371.687C264.71 327.637 192.616 432.271 201.016 396.89C216.303 332.497 189.059 186.674 253.452 201.961C317.845 217.248 429.833 292.163 414.546 356.556C406.53 390.32 368.893 429.681 362.151 473.471C356.036 513.195 382.07 557.631 352.816 584.868Z"
                fill="#05D3FB"
              />
            </svg>
          </Box>
          <Box
            component="div"
            sx={{
              ...animations.float,
              animation: `float 6s ease-in-out infinite`,
            }}
          >
            <Image
              src={PolywrapWrapper}
              alt="polywrap wrapper illustration"
              style={{ width: 260, height: "auto" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProblemSection;
