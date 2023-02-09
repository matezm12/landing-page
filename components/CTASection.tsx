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
import ReactGA from "react-ga";

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
              justifyContent: "center",
              display: "flex",
              px: 7,
              py: 6,
            }}
          >
            <Stack spacing={[4, 8]} sx={{ alignItems: "center" }}>
              <SectionTitle
                top="Join the"
                bottom="Composable Future"
                alignment="center"
                // size="small"
                letterSpacing="tight"
              />
              <Stack
                direction={["column", "row"]}
                // spacing={[undefined, 6]}
                sx={{ alignItems: "center" }}
              >
                <Button
                  color="primary"
                  href="https://docs.polywrap.io/quick-start/integrate-wrappers/install-client"
                  onClick={() => {
                    ReactGA.event({
                      category: "CTA",
                      action: `goto quick start`,
                      label: "CTA Section",
                    });
                  }}
                >
                  Start Building
                </Button>
                <Box
                  component="div"
                  sx={{
                    display: ["none", "block"],
                    width: 64,
                    height: 2,
                    ml: 6,
                    bgcolor: colors.iris[600],
                  }}
                />
                <Button
                  color="primary"
                  href="https://discord.com/invite/Z5m88a5qWu"
                  sx={{ ml: [0, 6], mt: [2, 0] }}
                  onClick={() => {
                    ReactGA.event({
                      category: "CTA",
                      action: `discord signup`,
                      label: "CTA Section",
                    });
                  }}
                >
                  Join Discord
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Blob
            src={Blob1}
            width={["40%", "20%"]}
            left="-12%"
            top={["79%", "65%"]}
          />
          <Blob
            src={Blob2}
            width={["35%", "23%"]}
            left={["78%", "87%"]}
            top={["73%", "61%"]}
          />
          <Blob src={Blob3} width={["25%", "9%"]} left="-3%" top="-15%" />
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
