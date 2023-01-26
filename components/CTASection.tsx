import React from "react";
import {
  alpha,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import SectionTitle from "./SectionTitle";
import { colors, gradientBorderStyles, theme } from "../styles/theme";
import Image from "next/image";
import { Blob } from "./Blobs";
import IDE from "../public/images/IDE.png";
import Blob1 from "../public/images/blobs/1.png";
import Blob2 from "../public/images/blobs/2.png";
import Blob3 from "../public/images/blobs/3.png";
import shadows from "@mui/material/styles/shadows";
import MetaverseBackground from "./MetaverseBackground";

const CTASection = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "calc(var(--vh, 1vh) * 100)",
        py: 20,
        pb: [44, 20],
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <MetaverseBackground fade="top" opacity={0.7} />
      <Container>
        <Box component="div" sx={{ position: "relative" }}>
          <Box
            component="div"
            sx={{
              backgroundColor: alpha(colors.black, 0.8),
              backdropFilter: "blur(8px)",
              border: `2px solid ${colors.iris[500]}`,
              borderRadius: 3,
              px: 7,
              mr: 4,
              py: 6,
            }}
          >
            <Stack spacing={4} sx={{ alignItems: "start", maxWidth: 420 }}>
              <SectionTitle
                top="Get started with"
                bottom="Polywrap"
                size="small"
                letterSpacing="tight"
              />
              <Typography sx={{ color: alpha(colors.white, 0.8) }}>
                Polywrap enables developers to create and publish wrappers to
                the decentralized web.
              </Typography>
              <Button href="/" color="primary">
                Get Wrapped
              </Button>
            </Stack>
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              borderRadius: 4,
              width: [`calc(100% - ${theme.spacing(4)})`, "50%", "40%", "50%"],
              right: 0,
              top: ["100%", null, "50%"],
              transform: [
                "translateY(-24px)",
                "translateY(-24px)",
                "translateY(-50%)",
              ],
              overflow: "hidden",
              ...gradientBorderStyles,
              borderWidth: 3,
              boxShadow: shadows[24],
            }}
          >
            {/* <IDE/> */}
            <Image
              src={IDE}
              alt="IDE"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </Box>
          <Blob src={Blob1} width="20%" left="-12%" top="65%" />
          <Blob src={Blob2} width="23%" left="87%" top="61%" />
          <Blob src={Blob3} width="9%" left="-3%" top="-15%" />
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
