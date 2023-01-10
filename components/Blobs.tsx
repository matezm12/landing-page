import React from "react";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Blob1 from "../public/images/hero/blobs/1.webp";
import Blob2 from "../public/images/hero/blobs/2.webp";
import Blob3 from "../public/images/hero/blobs/3.webp";
import Blob4 from "../public/images/hero/blobs/4.webp";
import Blob5 from "../public/images/hero/blobs/5.webp";
import Blob6 from "../public/images/hero/blobs/6.webp";
import Blob7 from "../public/images/hero/blobs/7.webp";
import Blob8 from "../public/images/hero/blobs/8.webp";
import Blob9 from "../public/images/hero/blobs/9.webp";
import Blob10 from "../public/images/hero/blobs/10.webp";
import Blob11 from "../public/images/hero/blobs/11.webp";
import Blob12 from "../public/images/hero/blobs/12.webp";
import { animations } from "../styles/theme";

export interface BlobProps {
  src: StaticImageData;
  width: string | string[];
  left: string | string[];
  top: string | string[];
  animationDelay?: number;
  blur?: string | string[];
}

export const Blob = ({
  src,
  width,
  left,
  top,
  blur,
  animationDelay,
}: BlobProps) => {
  return (
    <Box
      component="div"
      sx={{
        ...animations.float,
        animation: `float 8s infinite ease-in-out`,
        animationDelay: animationDelay ? `${animationDelay * 500}ms` : null,
        width: width,
        left: left,
        top: top,
        position: "absolute",
        filter: `blur(${blur})`,
      }}
    >
      <Image src={src} alt="" style={{ width: "100%", height: "auto" }} />
    </Box>
  );
};

const blobs = [
  {
    src: Blob1, // green
    width: ["33vmin", "20vmin"],
    left: ["-10%", "-7%", "-6%", "-5%"],
    top: ["15%", "12%"],
  },
  {
    src: Blob5, // yellow
    width: "21vmin",
    left: ["25%", "15%"],
    top: ["89%", "72%"],
    blur: "2px",
  },
  {
    src: Blob2, // cyan
    width: "50vmin",
    left: "-12%",
    top: ["79%", "55%"],
  },
  {
    src: Blob3, // magenta
    width: "8vmin",
    left: ["8%", "16%"],
    top: ["65%", "45%"],
    blur: "3px",
  },
  {
    src: Blob4, // magenta
    width: "10vmin",
    left: ["13%", "18%"],
    top: ["68%", "50%"],
    blur: "2px",
  },
  {
    src: Blob6, // green
    width: ["18vmin", "15vmin"],
    left: ["36%", "27%"],
    top: ["76%", "62%"],
  },
  {
    src: Blob7, // yellow
    width: ["29vmin", "18vmin"],
    left: ["66%", "68%"],
    top: ["66%", "70%"],
  },
  {
    src: Blob8, // cyan
    width: ["11vmin", "6vmin"],
    left: ["87%", "74%"],
    top: ["67%", "64%"],
    blur: "4px",
  },
  {
    src: Blob9, // green
    width: ["9vmin", "7vmin"],
    left: ["93%", "74%"],
    top: ["53%", "25%"],
    blur: "3px",
  },
  {
    src: Blob11, // yellow
    width: "7vmin",
    left: "90%",
    top: ["94%", "73%"],
    blur: "2px",
  },
  {
    src: Blob10, // magenta
    width: ["35vmin", "27vmin"],
    left: ["64%", "79%"],
    top: ["83%", "50%"],
  },
  {
    src: Blob12, // cyan
    width: ["31vmin", "25vmin"],
    left: ["76%", "90%"],
    top: ["16%", "20%"],
  },
];

const Blobs = () => {
  return (
    <Box
      component="div"
      sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {blobs.map((blob, i) => (
        <Blob key={i} animationDelay={i} {...blob} />
      ))}
    </Box>
  );
};

export default Blobs;
