import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MainHero } from '../../components/Hero';
import { DemoSection } from '../../components/DemoSection';
import { CoreBenefits } from '../../components/CoreBenefits';
import { Testimonials } from '../../components/Testimonials';
import ReactGA from 'react-ga';
import { FeaturedWrappersSection } from '../../components/Wrappers';
//import { WrapperSection } from '../../components/old_WrapperSection';
import { fetchWrappers, queryFeaturedWrappers } from '../../components/CMScontent';

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
      <MainHero />
      {/* <DemoSection /> */}
      <CoreBenefits />
      <Testimonials />

    </Box>
  );
};
