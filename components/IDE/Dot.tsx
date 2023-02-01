import React from "react";
import { Box, BoxProps } from "@mui/material";
import { colors } from "../../styles/theme";

interface DotProps extends BoxProps {
  active?: boolean;
  instance: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const Dot = ({ active, instance, setActive }: DotProps) => {
  return (
    <Box
      onClick={() => setActive(instance)}
      component="div"
      sx={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 20,
        height: 32,
        "&:hover .dot": {
          bgcolor: colors.iris[500],
        },
      }}
    >
      <Box
        className="dot"
        component="div"
        sx={{
          bgcolor: active ? colors.iris[500] : colors.iris[800],
          width: 12,
          height: 12,
          borderRadius: 999,
          transition: "background-color 0.25s ease-in-out",
        }}
      />
    </Box>
  );
};

export default Dot;
