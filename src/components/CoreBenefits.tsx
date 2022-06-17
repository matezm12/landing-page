import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { coreBenefit, ContentfulFetcher } from './ContentfulFetcher';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    marginBottom: 100,
    position: 'relative',
    padding: '0 20px',
    zIndex: 0,
    marginTop: 140,
    [theme.breakpoints.down('sm')]: {
      marginTop: 200,
      minHeight: 'unset',
    },
  },
  blurredPoly: {
    right: '-10%',
    opacity: '0.2',
    position: 'absolute',
    top: '-30%',
    width: '40vw',
    zIndex: 0,
  },
  cell: {
    margin: '64px auto 0',
    maxWidth: theme.breakpoints.values.md,
    position: 'relative',
  },
  benefitGrid: {
    justifyContent: 'center',
  },
  benefitItem: {
    position: 'relative',
  },
  benefitIconContainer: {
    height: 96,
    margin: 'auto',
    width: 96,
  },
  benefitIconBg: {
    height: '140%',
    left: '-20%',
    opacity: 0,
    position: 'absolute',
    top: '0%',
    width: '140%',
    zIndex: -1,
  },
  benefitIcon: {
    width: '100%',
  },
  benefitTitle: {
    margin: '20px auto',
    lineHeight: 1,
    whiteSpace: 'nowrap',
  },
  benefitDescription: {
    marginTop: 20,
  },
  animatedBlob: {
    fill: theme.palette.secondary.dark,
    left: '5%',
    opacity: '0.5',
    mixBlendMode: 'multiply',
    position: 'absolute',
    top: '5%',
    width: '90%',
  },
  description: {
    marginTop: 20,
  },
}));



export const CoreBenefits = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [coreBenefits, setCoreBenefits] = useState<coreBenefit[]> (
    [{
    "title": "Interoperability.",
    "subtitle": "Your app, everywhere",
    "description": "Polywrap is a development platform that enables easy integration of Web3 protocols into any application. It makes it possible for software on any device, written in any language, to read and write data to Web3 protocols",
    "supportImage": {
      "url": "Whoops, an error occurred"
    }
    }]);

    useEffect(() => {
      (async () => {
        var listOfCoreBenefits: coreBenefit[] = [];

        // CMS content fetching: Callback version
        setIsLoading(true);
        const coreBenefitsIds = [
          ["2rq0jIAj9hvVXVtqPDAHrO"], // "Multiplatform" 
          ["4W8dI7XSnRgPt2ya1y14Kf"], // "UserFriendly" 
          ["48pwTCnNtLzuA3W9qQYKDf"], // "Composable" 
          ["1G5VpsglgPhjHjBD286sGd"], // "Scalable" 
          ["5cl8qkg6qFN2iransZ9Ihy"], // "Upgradable" 
          ["3VuSiA0nx6KEmJVsOucVqa"]  // "Secure" 
        ]

        var currentFetch: {
          data: {
            coreBenefits: coreBenefit
          }
        };

        for(const Id of coreBenefitsIds) {

          var cmsQuery = `query { 
            coreBenefits(id:"${Id[0]}") { 
              title
              subtitle
              description
              supportImage {
                url
              }

          }
          }`;
          
          currentFetch = await ContentfulFetcher(cmsQuery);
          listOfCoreBenefits.push(currentFetch.data.coreBenefits);
          setCoreBenefits((oldCoreBenefits) => [...oldCoreBenefits, currentFetch.data.coreBenefits]);
          setIsLoading(false);
        }
      })();
    }, []);


  return (
    <Box display='flex' alignItems='center' className={classes.root}>
      <Box className={classes.blurredPoly}>
        <Parallax y={[-90,100]} disabled={window.innerWidth < theme.breakpoints.values.md}>
          <img width="100%" src={`${process.env.PUBLIC_URL}/imgs/polywrapper-hero-blurred.png`} alt='Polywrap' />
        </Parallax>
      </Box>
      <Parallax y={[-5,5]} disabled={window.innerWidth < theme.breakpoints.values.md}>
        <Typography variant='h3' color='textPrimary' align='center'>
          Why should you use Polywrap?
        </Typography>
        <Box className={classes.cell}>
          <Grid container spacing={6} alignItems='flex-start' className={classes.benefitGrid}>
            {
              
              coreBenefits.map((benefit, index) => {
                if (benefit.supportImage.url !== 'Whoops, an error occurred') {
                  
                  return (
                    <Grid key={benefit.title} xs={12} sm={6} md={4} item className={classes.benefitItem}>
                      <Box position='relative'>
                        <Box position='relative' display='flex' alignItems='center' justifyContent='center' className={classes.benefitIconContainer}>
                          <img className={classes.benefitIconBg} width="100%" src={`${process.env.PUBLIC_URL}/imgs/assets/blob-1.png`} alt='' />
                          <img className={classes.benefitIcon} width="100%" src={`${benefit.supportImage.url}`} alt='' />
                        </Box>
                        <Typography variant='subtitle1' color='textPrimary' align='center' className={classes.benefitTitle}>
                          {benefit.title}
                        </Typography>
                        <Typography variant='body1' color='textSecondary' align='center' className={classes.benefitDescription}>
                          {benefit.subtitle}
                        </Typography>
                      </Box>
                    </Grid>
              )}})
            }
          </Grid>
        </Box>
      </Parallax>
    </Box>
  );
};
