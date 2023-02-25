import { BenefitCardProps, benefits } from "../constants/benefits";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import BenefitCard from "./BenefitCard";
import React from "react";
import SectionTitle from "./SectionTitle";

const BenefitsSection = () => {
  return (
    <Box
      component="section"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "calc(var(--vh, 1vh) * 100)",
        width: "100%",
        mt: [8, 8, 0],
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container>
        <SectionTitle
          top="LEVEL UP"
          bottom="INCREASE YOUR TIER"
          alignment="center"
          letterSpacing="tight"
          uppercase={false}
        />
        <Grid container spacing={[12, 10, 6]} mt={[0, 4, 8]}>
          {benefits.map((benefit: BenefitCardProps) => (
            <Grid key={benefit.slug} item xs={9} md={3}>
              <BenefitCard {...benefit} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
