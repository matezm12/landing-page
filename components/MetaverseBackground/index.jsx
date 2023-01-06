import React from "react";
import { alpha, Box } from "@mui/material";
import { Canvas, extend } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import ParticleLandscape from "./ParticleLandscape";
import ParticleRising from "./ParticleRising";
import CameraRig from "./CameraRig";
import { UnrealBloomPass } from "three-stdlib";
import { useControls } from "leva";
import { colors } from "../../styles/theme";
extend({ UnrealBloomPass });

const fades = {
  bottom: `linear-gradient(to top, ${colors.black}, ${alpha(
    colors.black,
    0
  )} 15%)`,
  top: `linear-gradient(to bottom, ${colors.black}, ${alpha(
    colors.black,
    0
  )} 15%)`,
  both: `linear-gradient(to top, ${colors.black}, ${alpha(
    colors.black,
    0
  )} 15%, ${colors.black}, ${alpha(colors.black, 0)} 85%)`,
};

const MetaverseBackground = ({ fade, opacity }) => {
  const { intensity, radius } = useControls({
    intensity: { value: 2.4, min: 0, max: 4, step: 0.01 },
    radius: { value: 1.2, min: 0, max: 2, step: 0.01 },
  });

  return (
    <Box
      component="div"
      sx={{
        inset: 0,
        position: "absolute",
        opacity: opacity ? opacity : 0.4,
        zIndex: -1,
        "&:after": {
          position: "absolute",
          inset: 0,
          content: fade ? `""` : null,
          background: fade ? fades[fade] : null,
          pointerEvents: "none",
        },
      }}
    >
      <Canvas camera={{ fov: 50 }}>
        <ParticleLandscape />
        <ParticleRising />

        <CameraRig />

        <Effects disableGamma>
          <unrealBloomPass threshold={1} strength={intensity} radius={radius} />
        </Effects>
      </Canvas>
    </Box>
  );
};

export default MetaverseBackground;
