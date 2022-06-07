import { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme, Button } from '@material-ui/core';
import { WebContent, fetchWrappers } from '../contentful';
import { DemoFunctions } from './DemoFunctions';
import { IDE } from './IDE';
import KeyboardArrowRightOutlined from '@material-ui/icons/KeyboardArrowRightOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      marginTop: 150,
      minHeight: '60vh',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
  },
  grid: {
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      '& .MuiGrid-item': {
        padding: 20,
      },
    },
  },
  title: {
    fontWeight: 900,
    marginBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 28,
    },
  },
  description: {
    marginTop: 20,
  },
  IDEWrapper: {
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(8),
    },
  },
  polywrapIllustration: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxHeight: '60vh',
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '30vh',
    },
  },
  demoFunctionWrapper: {
    bottom: -theme.spacing(2),
    position: "absolute",
    right: -theme.spacing(2),
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      bottom: -theme.spacing(8),
    },
  }
}));

export const FeaturedWrappersSection = () => {
  const theme = useTheme();
  const classes = useStyles();

  // set initial react states
  const [aboutThisSection, setAboutThisSection] = useState<WebContent> (
    {
      "title": "Blazing fast development",
      "subtitle": "",
      "description": " Write queries in minutes rather than hours.\n\nUsing the polywrap toolchain, you'll be able to hit any protocol endpoint from any device that can run a Polywrap client.",
      "callToAction": "Execute Query"
  });  
  const [wrappersData, setWrappersData] = useState<any>(null)
  const [featuredQueries, setFeaturedQueries] = useState<string[]>(['swapToken','functionNameB','funcNameC','...'])
  const [transitionID, setTransitionID] = useState<number>(0)

  useEffect(() => {
    fetchWrappers().then(
      (response) => {
        setWrappersData(response)
      }
    );
  }, []);

  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (transitionID === wrappersData.length - 1 ) {
        setTransitionID(0)
      }
      else {
        setTransitionID(transitionID => transitionID + 1)
      }
    }, 10000)
    return () => {
      clearInterval(rotationInterval);
    }
  }, [transitionID, wrappersData])

  return (
    <Box position='relative' className={classes.root}>
      <Parallax
        y={[20, -35]}
        disabled={window.innerWidth < theme.breakpoints.values.md}
      >
      {
        wrappersData && 
        wrappersData.map((wrapper: any, index: number) =>
          <Grid
            key={index}
            container
            spacing={10}
            alignItems='flex-start'
            className={classes.grid}
            style={{
              opacity: transitionID === index ? '100%': '0%',
              // visibility: transitionID === index ? 'initial': 'hidden',
              zIndex : transitionID === index ? 99: -1,
              transition: "all 1s ease-in",
              position: 'absolute'
            }}
          >
            <Grid item xs={12} md={6}>
              <Box className={classes.IDEWrapper}>
                <Box className={classes.demoFunctionWrapper}>
                  <Parallax
                    y={[140, -13]}
                    disabled={window.innerWidth < theme.breakpoints.values.md}
                  >
                    <DemoFunctions 
                      content={
                          featuredQueries
                        } 
                    />
                  </Parallax>
                </Box>
                <IDE queriesData={wrapper.queries} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant='h3'
                color='textPrimary'
                className={classes.title}
              >
                {aboutThisSection.title}
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
                className={classes.description}
              >
                {aboutThisSection.description  }
              </Typography>
              <Typography
                variant='h4'
                color='textPrimary'
                className={classes.title}
              >
                {wrapper.wrapperName}
              </Typography>
              <Button
                color='primary'
                href={wrapper.docsLink}
                target="_blank"
                rel="noredirect"
                endIcon={<KeyboardArrowRightOutlined />}
                type='submit'
                variant='contained'
              >
                wrap with it
              </Button>
              <Typography
                variant='body1'
                color='textSecondary'
                className={classes.description}
              >
                {wrapper.description } 
              </Typography>
            </Grid>
          </Grid>
        )
      }
      </Parallax>
    </Box>
  );
};
