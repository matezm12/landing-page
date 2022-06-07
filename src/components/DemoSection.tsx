import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
// WIP: modularize the CMS query
import {useState, useEffect} from 'react';
import {  webContent, ContentfulFetcher } from './ContentfulFetcher';

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
  polywrapIllustration: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxHeight: '60vh',
    },
    [theme.breakpoints.down('xs')]: {
      maxHeight: '30vh',
    },
  },
}));


const cmsQuery = `query { 
  webContent(id:"4vlgBuWUl1gJGQPeYogzI4") { 
   title 
   subtitle
   description
   callToAction
 } 
}`;


export const DemoSection = () => {
  const theme = useTheme();
  const classes = useStyles();


  // CONTENTFUL CMS INTEGRATION BELOW
  const [someContent, setSomeContent] = useState<webContent> (
    {
      "title": "Solving the Web3 Integration Problem",
      "subtitle": ".",
      "description": "Web3 relies on SDKs to integrate virtually every type of protocol: DeFi, NFTs, DAOs, P2P Networks\n\nDue to traditional SDKs’ short-comings, Web3’s technical debt is growing day by day.\n\nTraditional SDKs are:\nInsecure, Bloated, Incompatible, and Language-Specific",
      "callToAction": "Read the Docs"
  });
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // CMS content fetching: Callback version
    setIsLoading(true);

    ContentfulFetcher(cmsQuery).then(
      (response) => {
        //On success        
        const content: webContent = response.data.webContent;

        setSomeContent(content);
      }, 
      (error) => {
        //On fail
        setHasFailed(true);
      }
    ).finally(() => {
      setIsLoading(false);
    });

  }, []);


  return (
    <Box position='relative' className={classes.root}>
      <Parallax
        y={[20, -35]}
        disabled={window.innerWidth < theme.breakpoints.values.md}
      >
        <Grid
          container
          spacing={10}
          alignItems='flex-start'
          className={classes.grid}
        >
          <Grid item xs={12} md={6}>
            <img
              className={classes.polywrapIllustration}
              src={process.env.PUBLIC_URL + '/imgs/wrappers-white-wave.svg'}
              alt='Polywrap - wrapper white wave'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h3'
              color='textPrimary'
              className={classes.title}
            >
              {someContent.title}
            </Typography>
            <Typography
              variant='body1'
              color='textSecondary'
              className={classes.description}
              // TODO: Fix the formatting of description below, this section should allow us somehow to show line
              // breaks and bold sections for example, but it's not working right now. All text is output as a continuous string
            >
              {someContent.description}
            </Typography>
          </Grid>
        </Grid>
      </Parallax>
    </Box>
  );
};
