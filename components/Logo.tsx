import { Box, Button, alpha } from "@mui/material";
import { colors, easings } from "../styles/theme";

import Image from 'next/image'
import logo from "../public/Logo.png"

interface LogoProps {
  height?: number;
  animateBorderWidth?: boolean;
  marginTop?: number;
}

const Logo = () => {
  return (
    <Box
      component="div"
      sx={{
        height: 50,
        position: "relative",
        ".logotype": {
          fill: alpha(colors.white, 0.8),
        },
        "&:hover": {
          ".logomark": {
            transform: `rotate(360deg)`,
          },
          ".logotype": {
            fill: colors.white,
          },
        },
      }}
    >
      <Button
        className="logomark"
        color="primary"
        aria-label="Logo Button"
        sx={{
          p: 0,
          minWidth: 50,
          position: "absolute",
          height: "100%",
          aspectRatio: "1/1",
          zIndex: 0,
          transition: easings.cubic,
          transitionProperty: "all",
          transitionDuration: "1s",
        }}
      />


    </Box >
  );
};

export default Logo;
