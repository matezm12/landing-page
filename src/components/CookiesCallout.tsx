import { Box, Button, Container, Link, makeStyles } from '@material-ui/core';
import { polywrapPalette } from '../theme';

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
    marginLeft: theme.spacing(2),
    "&:hover": {
      opacity: 0.6,
    }
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

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex">
            We use cookies from google and X to collect anonimized data to improve your experience.
            <Link underline="always" color="textPrimary" className={classes.link}>
              View Cookie Policy
            </Link>
          </Box>
          <Box display="flex" alignItems="center">
            <Button variant="outlined" color="primary" size="small">
              Accept Cookies
            </Button>
            <Link underline="always" className={classes.link}>
              Decline Cookies
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
