import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { colors, typography } from "../styles/theme";

interface DividerTitleProps {
  children: ReactNode;
}

const dividerStyles = {
  bgcolor: colors.iris[500],
  height: "1px",
  width: "100%",
};

const DividerTitle = ({ children }: DividerTitleProps) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        mt: 8,
        mb: 6,
        width: "100%",
      }}
    >
      <Box sx={{ ...dividerStyles }} />
      <Typography
        variant="h6"
        sx={{
          px: 4,
          textTransform: "uppercase",
          ...typography.display.h6,
          fontSize: typography.fontSizes[6],
        }}
      >
        {children}
      </Typography>
      <Box sx={{ ...dividerStyles }} />
    </Box>
  );
};

export default DividerTitle;
