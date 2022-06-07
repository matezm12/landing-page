import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme, Button } from '@material-ui/core';
// WIP: Try to modularize the CMS query
import {useState, useEffect} from 'react';
import {  newListOfFeaturedQueries, webContent } from './ContentfulFetcher';
import { DemoFunctions } from './DemoFunctions';
import { IDE } from './IDE';
import { fetchWrappers }from './CMScontent';
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
  const [aboutThisSection, setAboutThisSection] = useState<webContent> (
    {
      "title": "Blazing fast development",
      "subtitle": "",
      "description": " Write queries in minutes rather than hours.\n\nUsing the polywrap toolchain, you'll be able to hit any protocol endpoint from any device that can run a Polywrap client.",
      "callToAction": "Execute Query"
  });  
  const [wrappersData, setWrappersData] = useState<any>(null)
  const [featuredQueries, setFeaturedQueries] = useState<string[]>(['swapToken','functionNameB','funcNameC','...'])
  const [transitionID, setTransitionID] = useState<number>(0)

  // TODO: try using this state to move the function names into the DataCard
  const [queriesData, setQueriesData] = useState<newListOfFeaturedQueries[] | null>(null)
  
  // TODO: Get the "aboutThisSection" content from the CMS
  // 26XK8ENo5y1MgwpY7CDRlb
  // https://app.contentful.com/spaces/tmv21jqhvpr2/entries/26XK8ENo5y1MgwpY7CDRlb

  // update wrapper data with CMS integration
  useEffect(() => {
    async function fetchWrapperData() {

      // query the CMS and store the wrappers in the react state
      setWrappersData(await fetchWrappers())
      
    }

    const getFunctions = (wrappersData:newListOfFeaturedQueries[]) => {
      console.log(wrappersData)
      //wrappersData.forEach(wrapper => console.log(wrapper))
      return []
    };
    fetchWrapperData() //=> {getFunctions(wrappersData)};

  }, []);

  
  // set UI transition effects for the component
  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (transitionID === wrappersData.length - 1 ) {
        setTransitionID(0)
      }
      else {
        setTransitionID(transitionID => transitionID + 1)
      }
    }, 10000) // Timer for switching between wrappers (10000 -> 10 seconds)
    
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

      {/* The lines below are used to check
            1. that wrappersData exists
            2. maps all the data to render the component*/}
      { wrappersData && 
        wrappersData.map((wrapper: any, index: number) =>
        

          // This grid is for the entire featured wrapper component
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
            {/* // this grid is used to showcase the IDE and the CMS card */}
            <Grid item xs={12} md={6}>
              <Box className={classes.IDEWrapper}>

                {/* Card section for listing names of new functions */}
                <Box className={classes.demoFunctionWrapper}>
                  <Parallax
                    y={[140, -13]}
                    disabled={window.innerWidth < theme.breakpoints.values.md}
                  >
                    {/* TODO: use this section to map all the name of the functions 
                        Also consider a way of setting the active function on "accent",
                        while the other ones not being displayed could look grey.
                     */}

                    <DemoFunctions 
                      content={
                          featuredQueries
                        } 
                    />

                  </Parallax>
                </Box>

                {/* This is the section that displays the entire IDE window.
                    it includes both the code snippet and the tabs on top of the window
                */}
                <IDE queriesData={wrapper.queries} />
              </Box>

            </Grid>

            {/* This section is used to display the name of the wrapper, a description of the wrapper,
                additional copy to generate engagement, and a CTA button that takes users to docs of the
                specified wrappert
            */}
            <Grid item xs={12} md={6}>

              {/* exciting title for the section */}
              <Typography
                variant='h3'
                color='textPrimary'
                className={classes.title}
              >
                {aboutThisSection.title}
              </Typography>

              {/* description about the wrapper dev experience */}
              <Typography
                variant='body1'
                color='textSecondary'
                className={classes.description}
              >
                {aboutThisSection.description  }
              </Typography>

              {/* The name of the wrapper currently displayed */}
              <Typography
                variant='h4'
                color='textPrimary'
                className={classes.title}
              >
                {wrapper.wrapperName}
              </Typography>

              {/* CTA to get people to use the specific wrapper */}
              <Button
              // still dunno what to calll this
              //className={classes.heroButton}
              color='primary'
              href={wrapper.docsLink}
              target="_blank"
              rel="noredirect"
              endIcon={<KeyboardArrowRightOutlined />}
              type='submit'
              variant='contained'
            >
              wrap with it
             {/* {someContent.callToAction} */}
            </Button>


              {/* Description of the wrapper being displayed */}
              <Typography
                variant='body1'
                color='textSecondary'
                className={classes.description}
              >
                {wrapper.description } 
              </Typography>


            </Grid>
          </Grid>
        )}

      </Parallax>
    </Box>
  );
};
