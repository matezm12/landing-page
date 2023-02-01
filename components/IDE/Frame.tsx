import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { colors, typography } from "../../styles/theme";
import CodeLine from "./CodeLine";
import { FrameProps } from "../../constants/IDE";

interface IDEFrameProps extends FrameProps {
  active: boolean;
  timerRunning: boolean;
}

const Frame = ({
  title,
  query,
  result,
  active,
  timerRunning,
}: IDEFrameProps) => {
  const theme = useTheme();
  const queryLines = query.split("\n").filter((line) => line.length >= 1);
  const resultLines = result.split("\n").filter((line) => line.length >= 1);

  return (
    <Box component="div" sx={{ display: active ? "block" : "none" }}>
      <Stack
        spacing={2}
        sx={{
          "@keyframes fadeIn": {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          "@keyframes fadeOut": {
            "0%": { opacity: 1 },
            "100%": { opacity: 0 },
          },
          animation: active
            ? "fadeIn 0.5s 0.02s forwards ease-in"
            : "fadeOut 0.5s forwards ease-in",
          opacity: 0,
          p: 3,
        }}
      >
        <Typography>{title}</Typography>
        <Stack direction={["column", "row"]} sx={{ alignItems: "stretch" }}>
          {["query", "result"].map((type) => {
            const codeLines = type === "query" ? queryLines : resultLines;
            return (
              <Box
                key={type}
                component="div"
                sx={{
                  position: "relative",
                  bgcolor: colors.iris[900],
                  p: 1,
                  borderRadius: 1,
                  ml: [0, type === "result" ? 1 : 0],
                  mt: [type === "result" ? 1 : 0, 0],
                  width: ["100%", `calc(50% - ${theme.spacing(1 / 2)})`],
                }}
              >
                <Stack
                  sx={{
                    overflow: "scroll",
                    height: "100%",
                    maxHeight: 500,
                    width: "100%",
                  }}
                >
                  {codeLines.map((codeline, i) => {
                    const tabCount = codeline.split(" ").length - 1;
                    return (
                      <CodeLine key={i} tabs={tabCount}>
                        {codeline}
                      </CodeLine>
                    );
                  })}
                </Stack>
                <Box
                  component="div"
                  sx={{
                    px: 1,
                    py: 0.5,
                    bgcolor: colors.iris[600],
                    borderRadius: 1,
                    color: "white",
                    fontFamily: typography.fontFamilies.extended,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    lineHeight: 1,
                    letterSpacing: 1,
                    display: "inline",
                    position: "absolute",
                    top: theme.spacing(1),
                    right: theme.spacing(1),
                    fontSize: 10,
                  }}
                >
                  {type}
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Frame;
