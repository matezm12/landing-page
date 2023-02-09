import React from "react";
import { alpha, Box, Link } from "@mui/material";
import Image from "next/image";
import { colors, easings } from "../styles/theme";
import { CommunityProps } from "../constants/community";

interface WrapperGraphicProps extends CommunityProps {
  blur?: number;
  opacity?: number;
}

const WrapperGraphic = ({
  blur,
  opacity,
  link,
  color,
  title,
  icon,
  position,
}: WrapperGraphicProps) => {
  const bgPos = [100 - Number(position?.x), 100 - Number(position?.y)];
  const defaultWrapperColors = [
    {
      color: colors.magenta,
      stop: "25%",
    },
    {
      color: colors.iris[500],
    },
    {
      color: colors.iris[800],
      stop: "80%",
    },
  ];
  const clientWrapperColors = [
    {
      color: colors.white,
      stop: "5%",
    },
    {
      color: colors.cyan,
    },
    {
      color: alpha(colors.magenta, 0.3),
      stop: "80%",
    },
  ];
  const bgColors = color ? clientWrapperColors : defaultWrapperColors;
  const wrapperBackground = `radial-gradient(farthest-corner at ${bgPos[0]}px ${
    bgPos[1]
  }px, ${bgColors.map((c) => `${c.color}${c.stop ? ` ${c.stop}` : ""}`)})`;
  return (
    <Link
      href={link}
      target={link && "_blank"}
      rel={link && "noredirect"}
      component={!link ? "div" : "a"}
      sx={{
        position: "absolute",
        borderRadius: 999,
        width: position?.r,
        left: `${position?.x}%`,
        top: `${position?.y}%`,
        transform: `translate(-50%,-50%) scale(1)`,
        transition: `transform 0.25s ${easings.cubic}`,
        overflow: "hidden",
        opacity: opacity ? opacity : 1,
        height: position?.r,
        zIndex: 1,
        "&:hover": {
          transform: color ? `translate(-50%,-50%) scale(1.15)` : null,
        },
      }}
    >
      <Box
        component="div"
        sx={{
          background: color ? color : colors.iris[900],
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          transform: `rotate(${position?.rot}deg)`,
        }}
      >
        {icon && (
          <Box
            component="div"
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 999,
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={icon}
              alt={title}
              style={{
                objectFit: "contain",
                width: "70%",
                height: "auto",
              }}
            />
          </Box>
        )}
        <Box
          component="div"
          sx={{
            borderRadius: 999,
            background: wrapperBackground,
            mixBlendMode: color
              ? "color-burn"
              : Math.random() > 0.5
              ? "normal"
              : "overlay",
            opacity: color ? 0.3 : 1,
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      </Box>
    </Link>
  );
};

export default WrapperGraphic;
