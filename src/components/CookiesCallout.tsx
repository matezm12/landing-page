import { Box, Button, Container, Grid, Link, Typography, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { polywrapPalette } from '../theme';
import classnames from "classnames"

const useStyles = makeStyles((theme) => ({
  root: {
    animation: `$slideUp 0.5s 2s forwards`,
    backgroundColor: `${polywrapPalette.secondary[1000]}e0`,
    backdropFilter: "blur(4px)",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    zIndex: 9999,
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
  '@keyframes slideUp': {
    '0%': {
      transform: 'translateY(100%)',
    },
    '100%': {
      transform: 'translateY(0%)',
    },
  },
}));

export const CookiesCallout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });

  return (
    <Box className={classes.root}>
      <Container maxWidth="sm">
        <Grid container spacing={2} alignItems="center" justify="space-between">
          <Grid item xs={12} sm>
            <Typography variant={"body2"}>
              Accepting cookies improves your experience. All data collected is anonimized data.
              {` `}
              <Link underline="always" color="textPrimary" className={classes.link}>
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" justifyContent={isMobile ? "flex-start" : "flex-end"} alignItems="center" width="100%">
              <Button variant="outlined" color="primary" size="small">
                Accept
              </Button>
              <Link underline="always" className={classnames(classes.link, classes.linkDecline)}>
                Decline
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
