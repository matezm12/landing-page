import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero } from '../../components/Hero';
import { DemoSection } from '../../components/DemoSection';
import { Features } from '../../components/Features';
import { Partners } from '../../components/Partners';
import { HubCallout } from '../../components/HubCallout';
//import { WhatsPolywrap } from '../../components/WhatsPolywrap';
import { Testimonials } from '../../components/Testimonials';
import { WrapperSection } from '../../components/WrapperSection';
import ReactGA from 'react-ga';
import { WrappersSection } from '../../components/WrappersSection';

// CMS Data queried
import { queryFeaturedWrappers }from '../../components/CMScontent';
console.log("///// Data from the API")
console.log(queryFeaturedWrappers())

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
      {/* <WrapperDemos /> */}
      {/* <WhatsPolywrap /> */}
      {/* <HubCallout /> */}
      
      {/* <Partners /> */}
      <Testimonials />
      {/* <WrapperSection /> */}
    </Box>
  );
};
