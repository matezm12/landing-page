import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Navlink from "../components/Navlink";
import Logo from "../components/Logo";
import Logomark from "../public/images/Logomark.png";
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
              <Logo animateBorderWidth />
            ) : (
              <Logo animateBorderWidth height={20} marginTop={12} />
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
              href="https://docs.polywrap.io/"
            >
              docs
            </Navlink>
            <Navlink
              target="_blank"
              rel="noredirect"
              href="https://github.com/polywrap/"
            >
              github
            </Navlink>
            <Navlink
              target="_blank"
              rel="noredirect"
              href="https://discord.com/invite/Z5m88a5qWu"
            >
              discord
            </Navlink>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
