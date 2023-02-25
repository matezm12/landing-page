import { Box, Link } from "@mui/material";

import { CommunityProps } from "../constants/community";
import Image from "next/image";
import React from "react";
import { easings } from "../styles/theme";

const CommunityLogo = ({ link, icon, title, width }: CommunityProps) => {
  return (
    <Link href={link ? link : "#"} target="_blank" rel="noredirect">
      <Box
        component="div"
        sx={{
          height: 40,
          width: width ? `${width}%` : "80%",
          ml: width ? `${(100 - width) / 2}%` : "10%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.8,
          position: "relative",
          transform: "scale(1)",
          transition: `opacity 0.5s ${easings.cubic}, transform 0.5s ${easings.cubic}`,
          "&:hover": {
            opacity: 1,
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={icon}
          alt={title}
          fill
          sizes="max-width(1268px) 180px, max-width(550px) 150px"
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Link>
  );
};

export default CommunityLogo;
