import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { builders, backers, protocols } from "../constants/community";
import DividerTitle from "./DividerTitle";
import CommunityLogo from "./CommunityLogo";
import WrapperGraphic from "./WrapperGraphic";
import SectionTitle from "./SectionTitle";
import LeadingTheChargeImage from "../public/images/leading_bg.png";
import Image from "next/image";

const CommunitySection = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Container sx={{ position: "relative" }}>
        <Box
          component="div"
          sx={{
            width: ["100%", "100%"],
            ml: ["0%", 0],
            position: "relative",
          }}
        >
          {[...Array(12)].map((unknownWrapper, i) => {
            unknownWrapper = {
              position: {
                r: `${Math.random() * 18 + 1}vmin`,
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
              },
            };
            return (
              <WrapperGraphic
                key={i}
                {...unknownWrapper}
                blur={Math.random() * 24 + 10}
                opacity={Math.random() * 0.4 + 0.3}
              />
            );
          })}
          <Box
            component="div"
            sx={{ aspectRatio: "1182/882", position: "relative", zIndex: 0 }}
          >
            <Image
              src={LeadingTheChargeImage}
              alt="Leading the charge background imagery"
              fill
            />
          </Box>
          {protocols.map((protocol, i) => {
            return <WrapperGraphic key={protocol.title} {...protocol} />;
          })}
        </Box>
        <Box
          component="div"
          sx={{ position: "relative", top: [-24, -48, -72, -96] }}
        >
          <SectionTitle top="Leading" bottom="The Charge" alignment="center" />
          <DividerTitle>Builders</DividerTitle>
          <Grid
            container
            columnSpacing={8}
            rowSpacing={6}
            sx={{ justifyContent: "center" }}
          >
            {builders.map((builder, i) => (
              <Grid key={i} item xs={12 / 5}>
                <CommunityLogo {...builder} />
              </Grid>
            ))}
          </Grid>
          <DividerTitle>Backers</DividerTitle>
          <Grid
            container
            columnSpacing={8}
            rowSpacing={6}
            sx={{ justifyContent: "center" }}
          >
            {backers.map((backer, i) => (
              <Grid key={i} item xs={12 / 5}>
                <CommunityLogo {...backer} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunitySection;
