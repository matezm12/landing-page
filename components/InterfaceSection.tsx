import React, { ReactElement, useState } from "react";
import {
  alpha,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import { colors, gradientBorderStyles, typography } from "../styles/theme";
import SectionTitle from "./SectionTitle";
import IDE from "./IDE";
import PolywrapperGraphic from "../public/images/polywrap-wrapper-1.png";
import PolywrapBlack from "../public/images/polywrap-black.png";
import InterfaceBlobYellow1 from "../public/images/blobs/solutions-yellow.png";
import InterfaceBlobYellow2 from "../public/images/blobs/solutions-yellow-2.png";
import InterfaceBlobMagenta from "../public/images/blobs/solutions-magenta.png";
import InterfaceBlobGreen from "../public/images/blobs/solutions-green.png";
import InterfaceBlobCyan from "../public/images/blobs/solutions-cyan.webp";
import WaveLines from "../public/images/wave-lines-1.webp";

import Image from "next/image";
import { BoxProps, TypographyProps } from "@mui/system";

interface DotProps {
  active?: boolean;
  instance: string;
}

const Dot = ({ active, instance }: DotProps) => {
  const handleDotClick = () => {};

  return (
    <Box
      id={instance}
      onClick={handleDotClick}
      component="div"
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 32,
        "&:hover .dot": {
          bgcolor: colors.iris[500],
        },
      }}
    >
      <Box
        className="dot"
        component="div"
        sx={{
          bgcolor: active ? colors.iris[500] : colors.iris[800],
          width: 12,
          height: 12,
          borderRadius: 999,
          transition: "background-color 0.25s ease-in-out",
        }}
      />
    </Box>
  );
};

const InterfaceSection = () => {
  const [activeFrame, setActive] = useState<number>(0);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "calc(var(--vh, 1vh) * 80)",
        width: "100%",
        position: "relative",
        pb: "calc(var(--vh, 1vh) * 20)",
        pt: "calc(var(--vh, 1vh) * 24)",
        zIndex: 1,
      }}
    >
      <Container sx={{ position: "relative" }}>
        <Grid
          container
          spacing={[4, 4, 4, 12]}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid
            item
            xs={12}
            md={8}
            lg={4}
            sx={{ justifyContent: isDesktop ? "start" : "center" }}
          >
            <Stack
              spacing={4}
              sx={{ alignItems: isDesktop ? "start" : "center" }}
            >
              <SectionTitle
                top="A Universal"
                bottom="Interface"
                // size="small"
                letterSpacing="tight"
                alignment={isDesktop ? "start" : "center"}
              />
              <Typography
                variant="body1"
                sx={{
                  color: alpha(colors.white, 0.8),
                  fontSize: 18,
                  maxWidth: 550,
                  textAlign: isDesktop ? "left" : "center",
                }}
              >
                Wrappers let you compose web3 like never before. Simply
                include the Polywrap client in your app to seamlessly read and
                write to a variety of protocols from a secure WebAssembly VM.
              </Typography>
              <Typography
                sx={{
                  color: alpha(colors.white, 0.5),
                  fontSize: 12,
                  lineHeight: 1,
                }}
              >
                {"Examples are for illustrative purposes only."}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={10} lg={8}>
            <IDE />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InterfaceSection;
