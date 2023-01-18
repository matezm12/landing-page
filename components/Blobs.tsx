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

interface BlobsProps {
  section?: string;
}

export interface BlobProps {
  src: StaticImageData;
  aspect?: string;
  render?: number[];
  width: string | string[];
  left: string | string[];
  top: string | string[];
  animationDelay?: number;
  blur?: string | string[];
  priority?: boolean;
}

export const Blob = ({
  src,
  aspect,
  render,
  width,
  left,
  top,
  blur,
  animationDelay,
  priority,
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
        aspectRatio: aspect,
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes={
          render
            ? `max-width(1200px) ${render[0]}px, max-width(768px) ${render[1]}px`
            : null
        }
        // sizes={`max-width(1200px) 464px, max-width(768px) 380px`}
      />
    </Box>
  );
};

const blobs = [
  {
    src: Blob1, // green
    aspect: "711/720",
    render: [181, 152],
    width: ["calc(var(--vmin, 1vmin) * 33)", "calc(var(--vmin, 1vmin) * 20)"],
    left: ["-10%", "-7%", "-6%", "-5%"],
    top: ["15%", "12%"],
  },
  {
    src: Blob5, // yellow
    aspect: "618/616",
    render: [190, 160],
    width: "calc(var(--vmin, 1vmin) * 21)",
    left: ["25%", "15%"],
    top: ["89%", "72%"],
    blur: "2px",
  },
  {
    src: Blob2, // cyan
    aspect: "1305/1598",
    render: [453, 381],
    width: "calc(var(--vmin, 1vmin) * 50)",
    left: "-12%",
    top: ["79%", "55%"],
  },
  {
    src: Blob3, // magenta
    aspect: "236/236",
    render: [73, 61],
    width: "calc(var(--vmin, 1vmin) * 8)",
    left: ["8%", "16%"],
    top: ["65%", "45%"],
    blur: "3px",
  },
  {
    src: Blob4, // magenta
    aspect: "347/349",
    render: [91, 77],
    width: "calc(var(--vmin, 1vmin) * 10)",
    left: ["13%", "18%"],
    top: ["68%", "50%"],
    blur: "2px",
  },
  {
    src: Blob6, // green
    aspect: "461/447",
    render: [136, 114],
    width: ["calc(var(--vmin, 1vmin) * 18)", "calc(var(--vmin, 1vmin) * 15)"],
    left: ["36%", "27%"],
    top: ["76%", "62%"],
  },
  {
    src: Blob7, // yellow
    aspect: "502/430",
    render: [163, 137],
    width: ["calc(var(--vmin, 1vmin) * 29)", "calc(var(--vmin, 1vmin) * 18)"],
    left: ["66%", "68%"],
    top: ["66%", "70%"],
  },
  {
    src: Blob8, // cyan
    aspect: "236/242",
    render: [55, 53],
    width: ["calc(var(--vmin, 1vmin) * 11)", "calc(var(--vmin, 1vmin) * 6)"],
    left: ["87%", "74%"],
    top: ["67%", "64%"],
    blur: "4px",
  },
  {
    src: Blob9, // green
    aspect: "301/334",
    render: [64, 54],
    width: ["calc(var(--vmin, 1vmin) * 9)", "calc(var(--vmin, 1vmin) * 7)"],
    left: ["93%", "74%"],
    top: ["53%", "25%"],
    blur: "3px",
  },
  {
    src: Blob11, // yellow
    aspect: "222/230",
    render: [63, 54],
    width: "calc(var(--vmin, 1vmin) * 7)",
    left: "90%",
    top: ["94%", "73%"],
    blur: "2px",
  },
  {
    src: Blob10, // magenta
    aspect: "720/776",
    render: [245, 205],
    width: ["calc(var(--vmin, 1vmin) * 35)", "calc(var(--vmin, 1vmin) * 27)"],
    left: ["64%", "79%"],
    top: ["83%", "50%"],
  },
  {
    src: Blob12, // cyan
    aspect: "520/608",
    render: [227, 190],
    width: ["calc(var(--vmin, 1vmin) * 31)", "calc(var(--vmin, 1vmin) * 25)"],
    left: ["76%", "90%"],
    top: ["16%", "20%"],
  },
];

const Blobs = ({ section }: BlobsProps) => {
  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        pointerEvents: "none",
      }}
    >
      {blobs.map((blob, i) => (
        <Blob
          key={i}
          animationDelay={i}
          {...blob}
          priority={section === "hero"}
        />
      ))}
    </Box>
  );
};

export default Blobs;
