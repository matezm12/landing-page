import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Link, useMediaQuery, useTheme } from '@material-ui/core';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';
import { polywrapPalette } from '../theme';

const useStyles = makeStyles((theme) => ({
  navLink: {
    fontSize: 14,
    fontWeight: 700,
    marginRight: theme.spacing(6),
    transition: 'color 0.25s ease-in-out',
    '&:hover': {
      color: polywrapPalette.primary.start,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      marginRight: theme.spacing(2),
    },
  },
  navButton: {
    backgroundColor: polywrapPalette.primary.mid,
    borderRadius: 999,
    fontWeight: 700,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

interface NavLinkProps {
  type?: 'footer';
  scrollPosition: number;
}

export const NavLinks = (props: NavLinkProps) => {
  const theme = useTheme(),
    scrollPosition = props.scrollPosition,
    isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
      defaultMatches: true,
    }),
    showButton = !isMobile || scrollPosition > 150,
    classes = useStyles();

  return (
    <Box display='flex' alignItems='center' flexWrap='nowrap'>
      <Link
        className={classes.navLink}
        href='https://docs.polywrap.io/'
        target="_blank"
        rel="noredirect"
        color='textSecondary'
        variant='body1'
        style={{ display: `${!showButton || !isMobile ? 'block' : 'none'}` }}
      >
        Docs
      </Link>
      <Link
        className={classes.navLink}
        href='https://forum.polywrap.io/'
        target="_blank"
        rel="noredirect"
        color='textSecondary'
        variant='body1'
        style={{ display: `${!showButton || !isMobile ? 'block' : 'none'}` }}
      >
        Forum
      </Link>
      <Link
        className={classes.navLink}
        href='https://blog.polywrap.io/'
        target="_blank"
        rel="noredirect"
        color='textSecondary'
        variant='body1'
        style={{ display: `${!showButton || !isMobile ? 'block' : 'none'}` }}
      >
        Blog
      </Link>
      <Button
        href='https://jobs.ashbyhq.com/polywrap'
        target="_blank"
        rel="noredirect"
        variant='contained'
        endIcon={<KeyboardArrowRightOutlined />}
        className={classes.navButton}
        style={{ display: `${showButton ? 'flex' : 'none'}` }}
      >
        {!isMobile ? "Join and Contribute" : "Join Us"}
      </Button>
    </Box>
  );
};
