import { Box } from "@mui/material";

const MetaverseBackground = () => {
  return (
    <Box
      sx={{
        inset: 0,
        position: "absolute",
        zIndex: -1,
        "& iframe": {
          border: "none",
          width: "100%",
          height: "100%",
          opacity: 0.3,
        },
      }}
    >
      <iframe src="https://polywrap-landscape.netlify.app/" />
    </Box>
  );
};

export default MetaverseBackground;
