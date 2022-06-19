import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { polywrapPalette } from '../theme';
import {useState, useEffect} from 'react';
import {  ContentfulFetcher, writtenContent, polywrapApplication } from './ContentfulFetcher';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60vh',
    position: 'relative',
    zIndex: 2,
    marginTop: 140,
    [theme.breakpoints.down('md')]: {
      marginTop: 80,
      marginBottom: 80,
    },
  },
  cell: {
    margin: 'auto',
    maxWidth: '90vw'
  },
  blurredGraphicContainer: {
    position: 'absolute',
    bottom: '-30%',
    left: '-7%',
    opacity: 0.6,
    width: '50vw',
    zIndex: 0,
  },
  container: {
    backgroundColor: polywrapPalette.secondary[1000],
    borderRadius: 8,
    boxShadow: `0 64px 96px -24px rgba(0,0,0,0.5)`,
    padding: 72,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      padding: 32,
    },
  },
  hubWireframeImg: {
    boxShadow: `0 4px 64px ${polywrapPalette.primary.mid}85`,
    borderRadius: 4,
    transformOrigin: 'top left',
    transform: `translateY(-8px)`,
    maxHeight: '400px',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      boxShadow: `0 4px 32px ${polywrapPalette.primary.mid}85`,
      width: '100%',
      transform: 'none',
    },
  },
}));

const cmsQuery = `query {
  writtenCopy(id:"4pto10YnpvRkuIEQDkIBnG") { 
    title
    subtitle
    description
  }
}
`

const applicationsQuery = `query {
	applications (id:"4YQIn61S9M8LWaDdtmaZjM") {
  	writtenCopy {
  	  title
  	  subtitle
  	  description
  	}
    callToAction {
      cta
      url
    }
    uiScreenshot {
      url
    }
  }
}`;

export const HubCallout = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });

  const [thirdHeroContent, setThirdHeroContent] = useState<writtenContent> (
    {
      "title": "Extend the functionality of you applications",
      "subtitle": "a more composable web3",
      "description": "Polywrap allows more application functionality with a lower development overhead, fewer requirements for protocol-specific knowledge, and a long list of perks that come along with WebAssembly. "
  });

// TODO set this hook witht he correct data type
  const [polywrapApplicationsList, setPolywrapApplicationsList] = useState<polywrapApplication> (
    {
        "writtenContent": {
          "title": "Uniswap v2 Demo",
          "subtitle": "Decentralised AMM",
          "description": "The Leading Ethereum-based DeFi exchange enables low slippage token trades through automated market makers and liquidity pools. The Uni V2 wrapper was developed to cover all existing functionality of the official Javascript SDK, and should be compatible to all uniswap forks also with a few tweaks. This project was co-sponsored by the Uniswap Grants DAO and the Polywrap DAO in 2021."
        },
        "callToAction": {
          "cta": "Try the Uniswap V2 Demo",
          "url": "https://demo.uniswapv2.polywrap.io/#/swap"
        },
        "uiScreenshot": {
          "url": "https://images.ctfassets.net/tmv21jqhvpr2/5Cx8SWJjdGUNTakXt0hOZa/01434e806285f03eb60077ea4c7d1c89/Screenshot_2022-06-19_at_16.31.12.png"
        }
    }
  )
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // CMS content fetching: Callback version
    setIsLoading(true);

    ContentfulFetcher(cmsQuery).then(
      (response) => {
        //On success        
        const content: writtenContent = response.data.writtenCopy;
        setThirdHeroContent(content);
      }, 
      (error) => {
        //On fail
        setHasFailed(true);
      }
    ).finally(() => {
      setIsLoading(false);
    });

    ContentfulFetcher(applicationsQuery).then(
      (response) => {
        //On success        
        const appDetails: polywrapApplication = response.data.applications;
        console.log(appDetails)
        setPolywrapApplicationsList(appDetails);
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
      <Box className={classes.cell}>
        <Box className={classes.blurredGraphicContainer}>
          <Parallax y={[-15, 10]} disabled={isMobile}>
            <img src={process.env.PUBLIC_URL + '/imgs/polywrapper-callout-spot.png'} alt='polywrap blurred'/>
          </Parallax>
        </Box>
        <Box className={classes.container}>
          <Grid container spacing={isMobile ? 6 : 10} alignItems='stretch' >
            <Grid item xs={12} sm={6}>
              <Typography variant="h3">
                {thirdHeroContent.title}
              </Typography>
              <Box marginTop={2}>
                <Typography variant="body1">
                  {thirdHeroContent.description}
                </Typography>
              </Box>
              {/* <Box marginTop={2}>
                <Button
                  component="button"
                  color='primary'
                  href='https://discord.gg/bGsqQrNhqd'
                  endIcon={<KeyboardArrowRightOutlined />}
                  type='submit'
                  variant='contained'
                >
                  {CTA}
                </Button>
              </Box> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Parallax y={[24, -24]} disabled={isMobile}>
                <Box>
                  <img className={classes.hubWireframeImg} src={process.env.PUBLIC_URL + '/imgs/assets/polywrap-hub-wireframe.png'} alt='Polywrap Hub'/>
                </Box>
              </Parallax>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
