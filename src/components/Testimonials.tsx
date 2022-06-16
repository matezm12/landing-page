import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { filters } from '../theme';
import {useState, useEffect} from 'react';
import { launchPartner, ContentfulFetcher, Testimonial } from './ContentfulFetcher';

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
  gnosis: testimonials (id: "7G2LsOHb6OALHlhww2MTqt") {
    persona
    testimonialShortVersion
   	launchPartner {
      partnerName
      link
      categories
      blackPngLogo {
        url
      }
    }
  },
  gelato: testimonials (id: "5QZbh3QPNFEWgA25QsMNqg") {
    persona
    testimonialShortVersion
   	launchPartner {
      partnerName
      link
      categories
      blackPngLogo {
        url
      }
    }
  },
  pocket: testimonials (id: "FbElQFNHmc4dTzoPd8INQ") {
    persona
    testimonialShortVersion
   	launchPartner {
      partnerName
      link
      categories
      blackPngLogo {
        url
      }
    }
  }
}`;


export const Testimonials = () => {
  const classes = useStyles();

  const [gelatoTestimonial, setGelatoTestimonial] = useState<Testimonial> (
    {
      "persona": "Hilmar X, Legendary Member",
      "testimonialShortVersion": "With Polywrap, Gelato will enable every developer to easily automate the execution of transactions on networks like Ethereum, giving them the ability to provide arbitrary instructions to a decentralized network of bots with a single Wrapper call.",
      "launchPartner": {
        "partnerName": "Gelato",
        "link": "https://gelato.network",
        "categories": [
          "DeFi",
          "Automation",
          "Nodes"
        ],
        "blackPngLogo": {
          "url": "https://images.ctfassets.net/tmv21jqhvpr2/2h7XQpzYlvdPAxMu5qtRaK/eebd5d0932c8133a9b3ac8cfa1c4a663/gelato.png"
        }
      }
    });
  const [gnosisTestimonial, setGnosisTestimonial] = useState<Testimonial> (
    {
      "persona": "Team Gnosis",
      "testimonialShortVersion": "Polywrap will make it easy for everyone to build on top of Gnosis technologies and interact with our contracts and interfaces. This will help us achieve our vision of building open platforms and removing gatekeepers.",
      "launchPartner": {
        "partnerName": "Gnosis",
        "link": "https://gnosis.io/",
        "categories": [
          "DeFi",
          "Governance"
        ],
        "blackPngLogo": {
          "url": "https://images.ctfassets.net/tmv21jqhvpr2/ONnoPajg3HChr9L1dWdu0/039a0a562779536c49bf5b335fd774b1/gnosis.png"
        }
      }
    });

  const [pocketTestimonial, setPocketTestimonial] = useState<Testimonial> (
    {
      "persona": "Michael O'Rourke, Founder",
      "testimonialShortVersion": "By creating one single standard for web3 developers, Polywrap massively improves the experience of interacting with different protocols.",
      "launchPartner": {
        "partnerName": "Pocket Network",
        "link": "https://www.pokt.network/",
        "categories": [
          "Nodes"
        ],
        "blackPngLogo": {
          "url": "https://images.ctfassets.net/tmv21jqhvpr2/6gyGLKFgEaoaPH76IA2guJ/53796cd3a35f90995ef058aa134ea14c/pocket.png"
        }
      }
    });
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // CMS content fetching: Callback version
    setIsLoading(true);

    
    ContentfulFetcher(cmsQuery).then(
      (response) => {
        //On success      
        const gelato: Testimonial = response.data.gelato;
        setGelatoTestimonial(gelato);
        const gnosis: Testimonial  = response.data.gnosis;
        setGnosisTestimonial(gnosis)
        const pocket: Testimonial = response.data.pocket;
        setPocketTestimonial(pocket)
      }, 
      (error) => {
        //On fail
        setHasFailed(true);
        console.log(error)
        console.log(" ### CMS ERROR -> Contentful Query Failed.")

      }
    ).finally(() => {
      setIsLoading(false);
    });


  }, []);

  // Set an array with all the testimonials
  const featuredTestimonials: Testimonial[] = [gnosisTestimonial, pocketTestimonial, gelatoTestimonial]
  
  // empty array where we'll fill all testimonials
  var TESTIMONIALS: Testimonial[] = []
  
  for (var partner in featuredTestimonials) {

    TESTIMONIALS[partner] = 
    {
      "testimonialShortVersion": featuredTestimonials[partner].testimonialShortVersion,
      "persona":featuredTestimonials[partner].persona,
      "launchPartner": {
        "partnerName": featuredTestimonials[partner].launchPartner.partnerName,
        "link": featuredTestimonials[partner].launchPartner.link,
        "blackPngLogo": {
          "url": featuredTestimonials[partner].launchPartner.blackPngLogo.url
        } 
      }
    };
  };

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
                    {testimonial.testimonialShortVersion}
                  </Typography>
                  <Box marginTop={2}>
                    <Typography variant='body1' color='textSecondary'>
                      {testimonial.persona}
                    </Typography>
                  </Box>
                  <Box marginTop={2}>
                    {/* <Link href={testimonial.link} target='_blank'> */}
                      <img src={testimonial.launchPartner.blackPngLogo.url} className={classes.logo} alt=""/>
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