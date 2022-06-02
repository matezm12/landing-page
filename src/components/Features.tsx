import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import {useState, useEffect} from 'react';
import { polywrapFeature, ContentfulFetcher } from './QueryModule';

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
  featureGrid: {
    justifyContent: 'center',
  },
  featureItem: {
    position: 'relative',
  },
  featureIconContainer: {
    height: 96,
    margin: 'auto',
    width: 96,
  },
  featureIconBg: {
    height: '140%',
    left: '-20%',
    opacity: 0,
    position: 'absolute',
    top: '0%',
    width: '140%',
    zIndex: -1,
  },
  featureIcon: {
    width: '100%',
  },
  featureTitle: {
    margin: '20px auto',
    lineHeight: 1,
    whiteSpace: 'nowrap',
  },
  featureDescription: {
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

// CONTENTFUL CMS  INITIAL SET UP BELOW       // v FEATURES v

// TODO : Iterate through myFeatures, and perform all the queries respectively
// make sure to store the values on a new variable.
// Consider turning the myFeatures list into a dict                  

// CONTENTFUL CMS INITIAL SET UP ABOVE


export const Features = () => {
  const theme = useTheme();
  const classes = useStyles();


  //var counter: number = 0;
  
  // TODO : Hooks ?
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [someContent, setSomeContent] = useState<polywrapFeature[]> (
    [{
    "title": "Fake Content.",
    "subtitle": "PRE-ALPHA",
    "description": "Polywrap is a development platform that enables easy integration of Web3 protocols into any application. It makes it possible for software on any device, written in any language, to read and write data to Web3 protocols",
    "callToAction": "ERROR Happened",
    "slug":"fake"
    }]);

    useEffect(() => {
      (async () => {
        var newFeatures: polywrapFeature[] = [];

        /////////// CMS content fetching: Callback version
        setIsLoading(true);
        const myFeatures = [
          ["7LYHglxrDEqHwa23xPbrEo", "Multiplatform"],
          ["7g5q14hzPYzLhwos7IVik1", "UserFriendly"],
          ["5NjaWIMhQlair2k0dVDsXC", "Composable"],
          ["3aV4XbTikwD2bIdKAsmShv", "Scalable"],
          ["1i96gjazTJVQVxMdbDbfNm", "Upgradable"],
          ["d4he1KTXgSQLg6BuaY6MA", "Secure"]
        ]

        // var currentFetch: Promise<any> | polywrapFeature = {
        //   "title": "Welcome to the Polywrap Hub",
        //   "subtitle": "Our flagship dApp",
        //   "description": "A developer-centric platform where you can discover, deploy, and interact with any Polywrapper in the ecosystem. We are paving the road, expecting endless collaboration and curation possibilities. Test and Integrate web3 protocols quickly on the browser with our GraphQL Playground, and publish your packages to decentralised hosting. Soon you'll be able to explore an endless ocean of wrappers, by querying tags like `multisig`, `defi`, or `vesting`. A more semantic web3 that's easy to compose together!",
        //   "callToAction": "Start Coding",
        //   "slug": "hub"
        // };

        var currentFetch: {
          data: {
            webContent: polywrapFeature
          }
        };

        for(const element of myFeatures) {
          //console.log(element[0])
          //console.log(element[1])
          var cmsQuery = `query { 
            webContent(id:"${element[0]}") { 
              title
              subtitle
              supportImage {
                title
                description
                contentType
                fileName
                size
                url
                width
                height
              }
              description
          }
          }`;
          
          currentFetch = await ContentfulFetcher(cmsQuery);
          newFeatures.push(currentFetch.data.webContent);
          setSomeContent((oldFeatures) => [...oldFeatures, currentFetch.data.webContent]);
          setIsLoading(false);
        }
      })();
    }, []);
    // CONTENTFUL CMS INTEGREATION ABOVE


  return (
    <Box display='flex' alignItems='center' className={classes.root}>
      <Box className={classes.blurredPoly}>
        <Parallax y={[-90,100]} disabled={window.innerWidth < theme.breakpoints.values.md}>
          <img width="100%" src={`${process.env.PUBLIC_URL}/imgs/polywrapper-hero-blurred.png`} alt='Polywrap' />
        </Parallax>
      </Box>
      <Parallax y={[-5,5]} disabled={window.innerWidth < theme.breakpoints.values.md}>
        <Typography variant='h3' color='textPrimary' align='center'>
          Next-Gen SDKs for Web3
        </Typography>
        <Box className={classes.cell}>
          <Grid container spacing={6} alignItems='flex-start' className={classes.featureGrid}>
            {
              
              someContent.map((feature, index) => {
                if (feature.slug !== 'fake') {
                  
                  return (
                    <Grid key={feature.title} xs={12} sm={6} md={4} item className={classes.featureItem}>
                      <Box position='relative'>
                        <Box position='relative' display='flex' alignItems='center' justifyContent='center' className={classes.featureIconContainer}>
                          <img className={classes.featureIconBg} width="100%" src={`${process.env.PUBLIC_URL}/imgs/assets/blob-1.png`} alt='' />
                          <img className={classes.featureIcon} width="100%" src={`${feature.supportImage.url}`} alt='' />
                        </Box>
                        <Typography variant='subtitle1' color='textPrimary' align='center' className={classes.featureTitle}>
                          {feature.title}
                        </Typography>
                        <Typography variant='body1' color='textSecondary' align='center' className={classes.featureDescription}>
                          {feature.subtitle}
                        </Typography>
                      </Box>
                    </Grid>
                // <Grid key={feature.title} xs={12} sm={6} md={4} item className={classes.featureItem}>
                //     <Box position='relative' display='flex' alignItems='center' justifyContent='center' className={classes.featureIconContainer}>
                //       <Typography variant='subtitle1' color='textPrimary' align='center' className={classes.featureTitle}>
                //         <div>
                //           <div>{feature.title}</div>
                //           <div>{feature.description}</div>
                //           <div>{feature.supportImage}</div>
                //           <img className={classes.featureIcon} width="100%" src={`${process.env.PUBLIC_URL}/imgs/assets/features/${feature['title']}.png`} alt='' />
                //         </div>
                //     </Typography>
                //   </Box>
                // </Grid>
              )}})
            }
          </Grid>
        </Box>
      </Parallax>
    </Box>
  );
};
