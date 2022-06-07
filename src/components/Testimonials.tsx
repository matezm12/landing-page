import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { filters } from '../theme';
import {useState, useEffect} from 'react';
import { LaunchPartner, queries } from '../contentful';

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

export const Testimonials = () => {
  const classes = useStyles();

  const [gelatoContent, setGelatoContent] = useState<LaunchPartner> (
    {
      "name": "Gelato Network",
      "link": "https://gelato.network",
      "testimonial": "With the help of Polywrap, Gelato will enable every developer to easily automate the execution of transactions on networks like Ethereum, giving them the ability to provide arbitrary instructions to a decentralized network of bots with a single Wrapper call.",
      "persona": "Hilmar X, Legendary Member",
      "futurePromise": "Gelato and other node networks will leverage Polywrap to have sdk’s that dynamically update upon governance decisions instead of needing to contact all the operators to restart their nodes and install the new package.",
      "blackPngLogo": {
        "url":"https://polywrap.io/logos/gelato.png"
      }
    });
  const [gnosisContent, setGnosisContent] = useState<LaunchPartner> (
    {
      "name": "Gnosis",
      "link": "https://gnosis.io",
      "testimonial": "Polywrap will make it easy for everyone to build on top of Gnosis technologies and interact with our contracts and interfaces. This will help us achieve our vision of building open platforms and removing gatekeepers.",
      "persona": "Team Gnosis",
      "futurePromise": "Gnosis is creating wrappers that will encapsulate their business logic in secure, language-agnostic modules that interact with many chains, storage networks, oracles, and services. This growing ecosystem of Gnosis apps will be auto-updated in a securely.",
      "blackPngLogo": {
        "url":"https://polywrap.io/logos/gnosis.png"
      }
    });

  const [pocketContent, setPocketContent] = useState<LaunchPartner> (
      {
        "name": "Pocket Network",
        "link": "https://pokt.network/",
        "testimonial": "By creating one single standard for web3 developers, Polywrap massively improves the experience of interacting with different protocols.",
        "persona": "Michael O'Rourke, Founder",
        "futurePromise": "Pocket aims to provide a neutral networking stack for Polywrap users to connect to any protocol they want.",
        "blackPngLogo": {
          "url":"https://polywrap.io/logos/pocket.png"
        }
      });
  const [hasFailed, setHasFailed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    queries.launchPartners.send().then(
      (response) => {
        //On success      
        const gelato: LaunchPartner = response.data.gelato;
        setGelatoContent(gelato);
        const gnosis: LaunchPartner = response.data.gnosis;
        setGnosisContent(gnosis)
        const pocket: LaunchPartner = response.data.pocket;
        setPocketContent(pocket)
      }, 
      (error) => {
        setHasFailed(true);
      }
    ).finally(() => {
      setIsLoading(false);
    });
  }, []);

  const testimonials: LaunchPartner[] = [gnosisContent, pocketContent, gelatoContent]

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
          {testimonials.map(
            (testimonial: LaunchPartner, index: number) =>
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
                      <img src={testimonial.blackPngLogo.url} className={classes.logo} alt=""/>
                  </Box>
                </Box>
              </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};
