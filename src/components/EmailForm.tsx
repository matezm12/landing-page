import { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { polywrapPalette } from '../theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroSignUpFlex: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  heroTextField: {
    borderRadius: '99px 16px 16px 99px',
    display: 'flex',
    flexGrow: 1,
    maxWidth: 400,
    '& .MuiInput-input': {
      height: 38,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heroButton: {
    borderRadius: '16px 99px 99px 16px',
    fontSize: 18,
    padding: '9px 28px',
    marginLeft: 20,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      borderRadius: 99,
      marginLeft: 0,
      marginTop: theme.spacing(2),
      width: '100%',
    },
  },
  heroSignupSuccess: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 8,
    boxShadow: `0 8px 16px ${polywrapPalette.secondary[900]}88`,
    fontWeight: 700,
    padding: 8,
    width: '100%',
  },
  backToPolywrap: {
    color: theme.palette.primary.main,
    display: 'block',
    fontSize: 24,
    fontWeight: 700,
    marginTop: theme.spacing(3),
  },
  errorText: {
    color: '#f44336',
  },
}));

export const EmailForm = () => {
  const classes = useStyles();

  useEffect(() => {
    const win = window as any;
    win.CustomSubstackWidget = {
      substackUrl: 'blog.polywrap.io',
      placeholder: 'example@gmail.com',
      buttonText: 'Subscribe',
      theme: 'green',
    };

    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      win.CustomSubstackWidget = undefined;
    };
  }, []);

  return (
    <Box className={classes.heroSignUpFlex} display="flex" alignItems="center">
      <div id="custom-substack-embed"></div>
    </Box>
  );
};
