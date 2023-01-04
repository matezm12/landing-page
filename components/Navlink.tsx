import { alpha, Link } from "@mui/material";
import { ReactNode } from "react";
import { colors, typography } from "../styles/theme";

interface NavlinkProps {
  href: string;
  children: ReactNode;
}

const Navlink = ({ href, children }: NavlinkProps) => {
  return (
    <Link
      href={href}
      sx={{
        color: alpha(colors.white, 0.8),
        fontFamily: typography.fontFamilies.extended,
        fontSize: typography.fontSizes[4],
        letterSpacing: typography.letterSpacing.PrimaryHeading,
        textDecoration: "none",
        "&:hover": {
          color: colors.white,
        },
      }}
    >
      {children}
    </Link>
  );
};

export default Navlink;
