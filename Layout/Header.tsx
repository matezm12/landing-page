import React from "react";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Navlink from "../components/Navlink";
import Logo from "../components/Logo";
import Logomark from "../public/images/logomark.png";
import useIsDesktop from "../hooks/useIsDesktop";

const Header = () => {
  const isDesktop = useIsDesktop();
  return (
    <Box
      component="header"
      sx={{ mt: 6, position: "absolute", width: "100%", zIndex: 2 }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            {isDesktop ? (
              <Logo animateBorderWidth />
            ) : (
              <Image src={Logomark} alt="Polywrap Logo" width={40} />
            )}
          </Link>
          <Stack
            spacing={[3, 4, 5, 6]}
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Navlink href="/">docs</Navlink>
            <Navlink href="/">forum</Navlink>
            <Navlink href="/">blog</Navlink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
