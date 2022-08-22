import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';

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

const features = [
  {
    slug: 'multi_platform',
    title: 'Multi-Platform',
    description:
      'Write your SDK once, use it anywhere. Simply add the Polywrap Client to your user applications.',
  },
  {
    slug: 'user_friendly',
    title: 'User-Friendly',
    description:
      'Integrating complex protocols is finally as easy as interacting with modern APIs.',
  },
  {
    slug: 'secure',
    title: 'Secure',
    description:
      'Sandboxing keeps users safe by isolating wrappers from application memory.',
  },
  {
    slug: 'scalable',
    title: 'Scalable',
    description:
      'Keep apps lightweight and efficient. Only download what you need, when you need it.',
  },
  {
    slug: 'composable',
    title: 'Composable',
    description:
      'Endlessly compose and extend protocols with imports and standard interfaces.',
  },
  {
    slug: 'upgradable',
    title: 'Upgradable',
    description: 'Ditch the rebuilds with configurable run-time updates.',
  },
];

export const Features = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Box display='flex' alignItems='center' className={classes.root}>
      <Box className={classes.blurredPoly}>
        <Parallax
          y={[-90, 100]}
          disabled={window.innerWidth < theme.breakpoints.values.md}
        >
          <img
            width='100%'
            src={`${process.env.PUBLIC_URL}/imgs/polywrapper-hero-blurred.png`}
            alt='Polywrap'
          />
        </Parallax>
      </Box>
      <Parallax
        y={[-5, 5]}
        disabled={window.innerWidth < theme.breakpoints.values.md}
      >
        <Typography variant='h3' color='textPrimary' align='center'>
          Next-Gen SDKs
        </Typography>
        <Box className={classes.cell}>
          <Grid
            container
            spacing={6}
            alignItems='flex-start'
            className={classes.featureGrid}
          >
            {features.map((feature, index) => {
              return (
                <Grid
                  key={feature.slug}
                  xs={12}
                  sm={6}
                  md={4}
                  item
                  className={classes.featureItem}
                >
                  <Box position='relative'>
                    <Box
                      position='relative'
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      className={classes.featureIconContainer}
                    >
                      <img
                        className={classes.featureIconBg}
                        width='100%'
                        src={`${process.env.PUBLIC_URL}/imgs/assets/blob-1.png`}
                        alt=''
                      />
                      <img
                        className={classes.featureIcon}
                        width='100%'
                        src={`${process.env.PUBLIC_URL}/imgs/assets/features/${feature.slug}.png`}
                        alt=''
                      />
                    </Box>
                    <Typography
                      variant='subtitle1'
                      color='textPrimary'
                      align='center'
                      className={classes.featureTitle}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      color='textSecondary'
                      align='center'
                      className={classes.featureDescription}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Parallax>
    </Box>
  );
};
