import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { filters } from '../theme';

// WIP: Try to modularize the CMS query
import {useState, useEffect} from 'react';
import { launchPartner, ContentfulFetcher, Testimonial } from './QueryModule';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    minHeight: '60vh',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 140,
    position: 'relative',
    padding: '0 20px',
    zIndex: 0,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
    },
  },
  title: {
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    }
  },
  testimonialText: {
    display: 'block',
    margin: 'auto',
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    }
  },
  testimonial: {
    padding: theme.spacing(8),
    paddingBottom: theme.spacing(0),
    position: 'relative',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '& h6': {
        fontSize: 20,
      },
    },
  },
  testimonialQuote: {
    color: theme.palette.text.secondary,
    fontSize: 80,
    opacity: 0.2,
    transform: 'translate(-16px, 12px)',
  },
  logo: {
    filter: filters.textSecondary,
    height: 50,
    minWidth: 120,
    objectFit: 'contain',
    '&:hover': {
      filter: filters.secondary,
    }
  },
}));


// CONTENTFUL CMS  INITIAL SET UP BELOW
// TO ADD A NEW TESTIMONIAL BLOCK YOU SHOULD 
// JUST REPLICATE THE QUERY AND ADD THE CORRECT ID
const cmsQuery = `query { 
  gelato: launchPartners(id:"4NuUSkl1u6JPVA7QNiM4iS") { 
   name 
   link
   testimonial
   blackPngLogo {
    url
  }
   persona
   futurePromise
 }, 
  gnosis:  launchPartners(id: "4wW7f4q1VU7Y0VoHIYKJDK") {
    name 
    link
    testimonial
    blackPngLogo {
      url
    }
    persona
    futurePromise
  }
}`;
// CONTENTFUL CMS INITIAL SET UP ABOVE


export const Testimonials = () => {
  const classes = useStyles();

  // CONTENTFUL CMS INTEGRATION BELOW

  const [gelatoContent, setGelatoContent] = useState<launchPartner> (
    {
      "name": "Gelato Network",
      "link": "https://gelato.network",
      "testimonial": "With the help of Polywrap, Gelato enables every developer to easily automate the execution of transactions on networks like Ethereum, giving them the ability to provide arbitrary instructions to a decentralized network of bots with a single wrapper call",
      "persona": "Hilmar X, Legendary Member",
      "futurePromise": "Gelato and other node networks will leverage Polywrap to have sdk’s that dynamically update upon governance decisions instead of needing to contact all the operators to restart their nodes and install the new package.",
      "blackPngLogo": {
        "url":"empty"
      }
    });
  const [gnosisContent, setGnosisContent] = useState<launchPartner> (
    {
      "name": "Gnosis",
      "link": "https://gnosis.io",
      "testimonial": "Polywrap will make it easy for everyone to build on top of Gnosis technologies and interact with our contracts and interfaces. This will help us achieve our vision of building open platforms and removing gatekeepers",
      "persona": "Team Gnosis",
      "futurePromise": "Gnosis is creating wrappers that will encapsulate their business logic in secure, language-agnostic modules that interact with many chains, storage networks, oracles, and services. This growing ecosystem of Gnosis apps will be auto-updated in a securely.",
      "blackPngLogo": {
        "url":"empty"
      }
    });
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    /////////// CMS content fetching: Callback version
    setIsLoading(true);

    
    ContentfulFetcher(cmsQuery).then(
      (response) => {
        //On success      
        const gelato: launchPartner = response.data.gelato;
        setGelatoContent(gelato);
        const gnosis: launchPartner = response.data.gnosis;
        setGnosisContent(gnosis)
      }, 
      (error) => {
        //On fail
        setHasFailed(true);
      }
    ).finally(() => {
      setIsLoading(false);
    });

  }, []);
  // CONTENTFUL CMS INTEGREATION ABOVE
  //         console.log(gelatoContent, gnosisContent)

  const newTestimonials: launchPartner[] = [gelatoContent, gnosisContent]
  
  var  TESTIMONIALS: Testimonial[] = []

  
  for (var partner in newTestimonials) {
    // console.log(newTestimonials[partner].testimonial);
    // console.log(newTestimonials[partner].persona);
    // console.log(newTestimonials[partner].link);

    TESTIMONIALS[partner] = 
    {
      "name": newTestimonials[partner].name,
      "testimonial": newTestimonials[partner].testimonial ,
      "persona":newTestimonials[partner].persona ,
      "link": newTestimonials[partner].link,
      // TODO: This is a hacky way of getting the link to the image, we should be able to fetch 
      // it all from the CMS, or have this structured in a a way that the .split(' ')[0] doesn't break
      "logo": newTestimonials[partner].blackPngLogo.url
    };

  };

  //console.log(TESTIMONIALS)
  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant='h3' align='center' color='textPrimary'>
        Protocols{` `}
        <span role="img" aria-label="yellow heart">💛</span>
        {` `}Polywrap
      </Typography>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          marginLeft={-8}
          marginRight={-8}
          position="relative"
          zIndex={2}
        >
          {TESTIMONIALS.map(
            (testimonial: Testimonial, index: number) =>
              <Box className={classes.testimonial} key={`testimonial-${index}`}>
                <Box>
                  <FormatQuoteIcon className={classes.testimonialQuote} />
                  <Typography variant='subtitle1' style={{ fontSize: 20 }} color='textSecondary'>
                    {testimonial.testimonial}
                  </Typography>
                  <Box marginTop={2}>
                    <Typography variant='body1' color='textSecondary'>
                      {testimonial.persona}
                    </Typography>
                  </Box>
                  <Box marginTop={2}>
                    {/* <Link href={testimonial.link} target='_blank'> */}
                      <img src={testimonial.logo} className={classes.logo} alt=""/>
                    {/* </Link> */}
                  </Box>
                </Box>
              </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};