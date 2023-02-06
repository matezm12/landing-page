import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { colors, typography } from "../../styles/theme";

interface CodeLineProps {
  children: any;
  index: number;
  tabs?: number;
}

const CodeLine = ({ children, index, tabs }: CodeLineProps) => {
  const tabCount: number = tabs ? tabs : 0;
  return (
    <Stack direction="row" sx={{ alignItems: "center" }} spacing={4}>
      <Typography sx={{ color: colors.iris[600], width: 4 }}>
        {index}
      </Typography>
      <Box component="div" sx={{ pl: tabCount * 1.5 }}>
        <Typography
          sx={{
            fontFamily: typography.fontFamilies.monospace,
            color: "white",
            whiteSpace: "nowrap",
            lineHeight: 1.55,
            fontSize: [12, 14],
          }}
        >
          {children}
        </Typography>
      </Box>
    </Stack>
  );
};

export default CodeLine;
