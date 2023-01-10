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
        minHeight: "100vh",
        width: "100%",
        mt: [8, 8, 0],
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container>
        <SectionTitle
          top="WRAPPERS ARE"
          bottom="NEXT-GEN SDKs"
          alignment="center"
          uppercase={false}
        />
        <Grid container spacing={6} mt={8}>
          {benefits.map((benefit: BenefitCardProps) => (
            <Grid key={benefit.slug} item xs={12} sm={4}>
              <BenefitCard {...benefit} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
