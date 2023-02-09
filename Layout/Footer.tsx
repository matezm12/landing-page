import React from "react";
import {
  Box,
  Container,
  Grid,
  Input,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { EmailForm } from "../components/EmailForm";
import Logo from "../components/Logo";
import { footerLinks } from "../constants/footer";
import { colors, gradients, typography } from "../styles/theme";

const GradientDivider = () => (
  <Box
    component="div"
    sx={{ width: "100%", height: 2, background: gradients.Linear }}
  />
);

const Header = () => {
  return (
    <footer>
      <GradientDivider />
      <Box component="div" sx={{ py: 20 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={4}>
              <Stack spacing={4}>
                <Link href="/" aria-label="Logo Link">
                  <Logo />
                </Link>
                {/* <EmailForm /> */}
              </Stack>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={6}>
                {footerLinks.map((footerCategory, i) => {
                  return (
                    <Grid key={i} item xs={12} md={4}>
                      <Stack spacing={3}>
                        <Box component="div">
                          <Typography
                            component="h2"
                            fontWeight={800}
                            fontFamily={typography.fontFamilies.extended}
                            fontSize={typography.fontSizes[7]}
                            textTransform="uppercase"
                            sx={{ display: "inline-block", mb: 1 }}
                          >
                            {footerCategory.name}
                          </Typography>
                          <GradientDivider />
                        </Box>
                        <Stack spacing={2}>
                          {footerCategory.links.map((link, i) => (
                            <Link
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noredirect"
                              underline="none"
                              sx={{
                                width: "fit-content",
                                display: "inline",
                                "&:hover": {
                                  color: colors.white,
                                },
                              }}
                            >
                              <Typography sx={{ color: "inherit" }}>
                                {link.name}
                              </Typography>
                            </Link>
                          ))}
                        </Stack>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Header;
