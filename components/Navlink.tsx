import { Link, LinkProps, alpha } from "@mui/material";
import { colors, typography } from "../styles/theme";

import { ReactNode } from "react";

interface NavlinkProps extends LinkProps {
  href: string;
  children: ReactNode;
}

const Navlink = ({ children, ...props }: NavlinkProps) => {
  return (
    <Link
      sx={{
        color: alpha(colors.white, 1),

        fontFamily: typography.fontFamilies.extended,
        fontSize: [typography.fontSizes[3], typography.fontSizes[4]],
        letterSpacing: typography.letterSpacing.PrimaryHeading,
        textDecoration: "none",
        "&:visited": {
          color: alpha(colors.white, 0.8),
        },
        "&:hover": {
          fontSize: 20,
        },
      }}
      {...props}
    >
      {children}
    </Link >
  );
};

export default Navlink;
