import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero } from '../../components/Hero';
import { DemoSection } from '../../components/DemoSection';
import { Features } from '../../components/Features';
import { Testimonials } from '../../components/Testimonials';
import ReactGA from 'react-ga';
import { FeaturedWrappersSection } from '../../components/Wrappers';
import { WrapperSection } from '../../components/old_WrapperSection';
import { fetchWrappers, queryFeaturedWrappers } from '../../components/CMScontent';

console.log("///// Wrapper's Data from the API")
console.log(queryFeaturedWrappers())
console.log("///// wrapper data after mapping with fetchWrappers()")
console.log(fetchWrappers())
//console.log("///// wrapper data after mapping with queryFeaturedQueries()")
//console.log(queryFeaturedQueries())


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
    
      {/*<FeaturedWrappersSection /> */}
      <Features />
      <Testimonials />

    </Box>
  );
};
