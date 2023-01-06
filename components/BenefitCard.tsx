import { Box, Stack, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import Image, { StaticImageData } from "next/image";
import MagentaBlob from "../public/images/blobs/multi.png";
import CyanBlob from "../public/images/blobs/user-friendly.png";
import GreenBlob from "../public/images/blobs/secure.png";
import { colors, easings } from "../styles/theme";
import { BenefitCardProps } from "../constants/benefits";

interface BlobProps {
  magenta: StaticImageData;
  cyan: StaticImageData;
  green: StaticImageData;
}

const blobs: BlobProps = {
  magenta: MagentaBlob,
  cyan: CyanBlob,
  green: GreenBlob,
};

const BenefitCard = ({ slug, color, title, description }: BenefitCardProps) => {
  return (
    <Box component="div" sx={{ position: "relative" }}>
      <Box
        component="div"
        sx={{
          position: "absolute",
          left: "50%",
          top: -72,
          transform: "translateX(-50%)",
          width: "50%",
          zIndex: 1,
        }}
      >
        <Box
          component="div"
          sx={{
            "@keyframes shadow": {
              "0%, 100%": {
                transform: "scaleX(1) scaleY(0.2) translateY(180%)",
                opacity: 0.6,
              },
              "50%": {
                transform: "scaleX(0.7) scaleY(0.2) translateY(180%)",
                opacity: 1,
              },
            },
            animation: `shadow 5s ease-in-out infinite`,
            animationDelay:
              color === "cyan" ? `700ms` : color === "green" ? `1400ms` : 0,
            position: "absolute",
            width: "110%",
            top: "-5%",
            left: "-5%",
            aspectRatio: "1/1",
            background: `radial-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0) 75%)`,
            transform: "scaleY(0.2) translateY(180%)",
            zIndex: -1,
          }}
        />
        <Box
          component="div"
          sx={{
            "@keyframes float": {
              "0%, 100%": {
                transform: "translateY(-3%)",
              },
              "50%": {
                transform: "translateY(0%)",
              },
            },
            animation: `float 5s ease-in-out infinite`,
            animationDelay:
              color === "cyan" ? `700ms` : color === "green" ? `1400ms` : 0,
          }}
        >
          <Image
            src={blobs[color]}
            alt={title}
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          position: "absolute",
          background: colors[color],
          boxShadow: shadows[24],
          borderRadius: 4,
          inset: 6,
          zIndex: 0,
        }}
      />
      <Box
        component="div"
        sx={{
          background: `linear-gradient(180deg, ${colors.iris[800]} 0%, #0F1031 97.92%)`,
          px: 4,
          pt: 16,
          pb: 8,
          minHeight: 320,
          borderRadius: 6,
          clipPath: `polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 56px, calc(100% - 48px) 0)`,
          boxShadow: shadows[24],
        }}
      >
        <Stack spacing={3}>
          <Typography component="h3" variant="h5" color={colors[color]}>
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default BenefitCard;
