import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero } from '../../components/Hero';
import { DemoSection } from '../../components/DemoSection';
import { Features } from '../../components/Features';
import { Testimonials } from '../../components/Testimonials';
import ReactGA from 'react-ga';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1400px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
    },
  },
}));

export const Home = () => {
  ReactGA.pageview('home');

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Hero />
      <DemoSection />
      <Features />
      <Testimonials />
    </Box>
  );
};
