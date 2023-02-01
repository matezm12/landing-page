import React from "react";
import { Box, Typography } from "@mui/material";
import { typography } from "../../styles/theme";

interface CodeLineProps {
  children: React.ReactNode;
  tabs?: number;
}

const CodeLine = ({ children, tabs }: CodeLineProps) => {
  const tabCount: number = tabs ? tabs : 0;
  return (
    <Box component="div" sx={{ ml: tabCount * 0.75 }}>
      <Typography
        sx={{
          fontFamily: typography.fontFamilies.monospace,
          color: "white",
          whiteSpace: "nowrap",
          lineHeight: 1.55,
          fontSize: 14,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default CodeLine;
