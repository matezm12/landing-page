import { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Link, Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { polywrapPalette } from '../theme';
import classnames from "classnames"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `${polywrapPalette.secondary[1000]}e0`,
    backdropFilter: "blur(4px)",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    zIndex: 9999,
    transition: "transform 0.25s ease-in-out",
    transform: "translateY(100%)",
  },
  link: {
    cursor: "pointer",
    whiteSpace: "nowrap",
    "&:hover": {
      opacity: 0.6,
    }
  },
  linkDecline: {
    marginLeft: theme.spacing(2),
  },
}));

export const CookiesCallout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });
  const [showCookies, setShowCookies] = useState<boolean>(true);
  const [triggerBannerFadeOut, setBannerFadeOut] = useState<boolean>(false);
  const [initialFadeIn, setInitialFadeIn] = useState<boolean>(false);
  const [cookiePreference, setCookiePreference] = useState<"accept" | "decline" | undefined>(undefined);

  const handleApproveClick = () => {
    setCookiePreference("accept");
    setBannerFadeOut(true);
  }

  const handleDeclineClick = () => {
    setCookiePreference("decline");
    setBannerFadeOut(true);
  }

  useEffect(() => {
    window.setTimeout(() => {
      triggerBannerFadeOut ? (
        setShowCookies(false)
      ) : (
        setInitialFadeIn(true)
      )
    }, 500)
  });

  return showCookies ? (
    <Box className={classes.root} style={{transform: !initialFadeIn || triggerBannerFadeOut ? "translateY(100%)" : "translateY(0%)"}}>
      <Container maxWidth="sm">
        <Grid container spacing={2} alignItems="center" justify="space-between">
          <Grid item xs={12} sm>
            <Typography variant={"body2"}>
              This site collects anonimized traffic metadata, by clicking accept you helps us build bettter open source tools 💚
              {` `}
              <Link underline="always" color="textPrimary" className={classes.link}>
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" justifyContent={isMobile ? "flex-start" : "flex-end"} alignItems="center" width="100%">
              <Button variant="outlined" color="primary" size="small" onClick={handleApproveClick}>
                Accept
              </Button>
              <Link underline="always" className={classnames(classes.link, classes.linkDecline)} onClick={handleDeclineClick}>
                Decline
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  ) : (
    <></>
  );
};
