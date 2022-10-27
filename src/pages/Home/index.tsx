import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MainHero } from '../../components/MainHero';
import { CoreBenefits } from '../../components/CoreBenefits';
import { FeaturedWrappersSection } from '../../components/WrappersHero';
//import { GetStartedHero } from '../../components/GetStartedHero';
// import { SecondHero } from '../../components/DemoSection';

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
      <MainHero />
      {/* <AppsHero/> */}
      <FeaturedWrappersSection />

      <CoreBenefits />
      {/* <GetStartedHero /> */}
      {/* <SecondHero /> */}

      <Testimonials />

    </Box>
  );
};
