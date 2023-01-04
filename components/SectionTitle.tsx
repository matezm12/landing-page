import React from "react";
import { Box, Typography } from "@mui/material";
import { typography } from "../styles/theme";

interface SectionTitleProps {
  top: string;
  bottom: string;
  uppercase?: boolean;
  alignment?: "start" | "center";
  size?: "default" | "small";
  letterSpacing?: "default" | "tight";
}

const SectionTitle = ({
  top,
  bottom,
  uppercase = true,
  alignment = "start",
  size = "default",
  letterSpacing = "default",
}: SectionTitleProps) => {
  const sizes = {
    default: [typography.display.h5.fontSize, typography.display.h3.fontSize],
    small: [typography.fontSizes[5], typography.fontSizes[10]],
  };

  return (
    <Typography
      variant="h2"
      sx={{ alignItems: alignment, display: "flex", flexDirection: "column" }}
    >
      <Box
        component="div"
        {...typography.display.h5}
        fontSize={sizes[size][0]}
        letterSpacing={
          letterSpacing === "tight"
            ? typography.letterSpacing.PrimaryHeading
            : typography.letterSpacing.UppercaseDisplay
        }
        sx={{ textTransform: uppercase ? "uppercase" : null }}
      >
        {top}
      </Box>
      <Box
        component="div"
        {...typography.display.h2}
        fontWeight={800}
        fontSize={sizes[size][1]}
        letterSpacing={
          letterSpacing === "tight"
            ? typography.letterSpacing.PrimaryHeading
            : typography.letterSpacing.UppercaseDisplay
        }
        sx={{ textTransform: uppercase ? "uppercase" : null }}
      >
        {bottom}
      </Box>
    </Typography>
  );
};

export default SectionTitle;
