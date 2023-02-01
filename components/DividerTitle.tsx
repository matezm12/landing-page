import React, { ReactNode } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { colors, typography } from "../styles/theme";

interface DividerTitleProps {
  children: ReactNode;
}

const dividerStyles = {
  bgcolor: colors.iris[500],
  height: "1px",
  width: "100%",
  display: ["none", "block"],
};

const DividerTitle = ({ children }: DividerTitleProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="div"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        mt: 8,
        mb: 6,
        width: "100%",
      }}
    >
      <Box component="div" sx={{ ...dividerStyles }} />
      <Typography
        variant="h3"
        sx={{
          px: isMobile ? 0 : 4,
          textTransform: "uppercase",
          textAlign: "center",
          whiteSpace: isMobile ? "unset" : "noWrap",
          ...typography.display.h6,
          lineHeight: isMobile ? 1.5 : 1,
          fontSize: isMobile
            ? typography.fontSizes[4]
            : typography.fontSizes[6],
        }}
      >
        {children}
      </Typography>
      <Box component="div" sx={{ ...dividerStyles }} />
    </Box>
  );
};

export default DividerTitle;
