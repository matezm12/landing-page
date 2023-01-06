import React from "react";
import { Box } from "@mui/material";
import NoiseImg from "../public/images/noise_texture.webp";

interface NoiseProps {
  opacity?: number;
}

const Noise = ({ opacity }: NoiseProps) => {
  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${NoiseImg.src})`,
        backgroundSize: 600,
        mixBlendMode: "overlay",
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: opacity ? opacity : 1,
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};

export default Noise;
