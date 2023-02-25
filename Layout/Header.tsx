import { Box, Container, Stack } from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import Login from "../components/Login";
import Logo from "../components/Logo";
import Logomark from "../public/images/Logomark.png";
import Navlink from "../components/Navlink";
import React from "react";
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
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ height: 40 }}>
            {isDesktop ? (
              <Logo />
            ) : (
              <Logo />
            )}
          </Link>
          <Stack
            spacing={[1.5, 3, 5, 6]}
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Navlink
              target="_blank"
              rel="noredirect"
              href="/SignUp"
            >
              Sign Up
            </Navlink>
            <Navlink
              target="_blank"
              rel="noredirect"
              href="../pages/"
            >
              Login
            </Navlink>
            <Navlink
              target="_blank"
              rel="noredirect , noreferrer"
              href="https://closetheskyoverukraine.com/latest-news/donate-for-drones"
            >
              Donate
            </Navlink>
            <Navlink
              target="_blank"
              rel="noredirect"
              href="/"
            >
              Shop
            </Navlink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
