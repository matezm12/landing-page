import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero } from '../../components/Hero';
import { SecondHero } from '../../components/SecondHero';
import { CoreBenefits } from '../../components/CoreBenefits';
import { Testimonials } from '../../components/Testimonials';
import ReactGA from 'react-ga';
import { FeaturedWrappersSection } from '../../components/Wrappers';
//import { WrapperSection } from '../../components/old_WrapperSection';
import { fetchWrappers, queryFeaturedWrappers } from '../../components/CMScontent';
import { HubCallout } from '../../components/HubCallout';

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

      <HubCallout/>
      <FeaturedWrappersSection />
      {/* <SecondHero /> */}
      <CoreBenefits />
      <Testimonials />

    </Box>
  );
};
