import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";
import BenefitCard from "./BenefitCard";
import { benefits, BenefitCardProps } from "../constants/benefits";

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
          top="WRAPPERS ARE"
          bottom="WEB3-NATIVE SDKs"
          alignment="center"
          letterSpacing="tight"
          uppercase={false}
        />
        <Grid container spacing={[12, 10, 6]} mt={[0, 4, 8]}>
          {benefits.map((benefit: BenefitCardProps) => (
            <Grid key={benefit.slug} item xs={12} md={4}>
              <BenefitCard {...benefit} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
