import { Parallax } from "react-scroll-parallax";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { IDE } from "./IDE";
import KeyboardArrowRightOutlined from "@material-ui/icons/KeyboardArrowRightOutlined";
import { polywrapPalette } from "../theme";
import classnames from "classnames";

const wrappersData = [
  {
    wrapperName: "Defi wrapper",
    description:
      "Defiwrapper is a collection of various DeFi  wrappers like defi-sdk, coingecko, and more. With Defiwrapper, you can enable a wide range of  DeFi usecases for a suite of cross-chain and multi-platform innovations.",
    featuredWrapper: true,
    thirdParty: false,
    docsLink: "https://defiwrapper.com",
    svgLogo: {
      url: "https://images.ctfassets.net/tmv21jqhvpr2/5zBntU87kcj2CNDPwcdzrh/619f185b1072446973e095896c6068c1/wrapper-gnosis.png",
      alt: "defiwrapper",
    },
    queries: {
      queryName: "getTransactions",
      featuredQuery: true,
      source: "https://github.com/defiwrapper/documentation",
      snippets: [
        { filename: "getTransactions.js", language: "javascript", snippet: "" },
        {
          filename: "getTransactions.ts",
          language: "typescript",
          snippet:
            '// Get all transactions from account\n\nclient.invoke({\nººuri: "wrap://ens/defiwrapper.polywrap.eth",\nººmethod: "getTransactions",\nººargs: {\nººººaccountAddress,\nººººoptions,\nºººº...\nºº}\n});',
        },
        {
          filename: "getTransactions.py",
          language: "python",
          snippet:
            '# Get all transactions from account\n\nclient.invoke(\nººuri="wrap://ens/defiwrapper.polywrap.eth",\nººmethod="getTransactions",\nººargs={\nºººº"accountAddress": accountAddress,\nºººº"options": options,\nºººº...\nºº}\n);',
        },
        {
          filename: "getTransactions.rs",
          language: "rust",
          snippet:
            '// Get all transactions from account\n\nclient.invoke({\nººuri: "wrap://ens/defiwrapper.polywrap.eth",\nººmethod: "getTransactions",\nººargs: defiwrapper::method::accountAddress::Input {\nººººaccountAddress: accountAddress,\nººººoptions: options,\nºººº...\nºº}.to_json()\n});',
        },
      ],
    },
  },
  {
    wrapperName: "Uniswap V3",
    description:
      "The newest Uniswap wrapper is written in AssemblyScript, and like the official Uniswap V3 SDK, it has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The Uniswap wrapper business logic will be deployed on a decentralized endpoint, like IPFS.",
    featuredWrapper: true,
    thirdParty: false,
    docsLink: "https://docs.polywrap.io/demos/uniswapv3/intro",
    svgLogo: {
      url: "https://images.ctfassets.net/tmv21jqhvpr2/33NRStoHDXlGuShCUcMAGW/ec6d62b301179e73498b69acc11c7315/uniswap-uni-logo.svg",
      alt: "uniswap",
    },
    queries: {
      queryName: "executeSwap",
      featuredQuery: true,
      source:
        "https://github.com/polywrap/integrations/blob/2282781a2ba46ef99c41f093b9985487c8a1e98e/uniswapv3/wrapper/src/mutation/schema.graphql#L46-L61",
      snippets: [
        { filename: "executeSwap.js", language: "javascript", snippet: "" },
        {
          filename: "executeSwap.ts",
          language: "typescript",
          snippet:
            '// import envs and other configs for the client\nimport * into GetTransactions\n\n// Execute Token Swaps w/ Uniswap V3\nclient.invoke({\nººuri: "wrap://ens/v3.uniswap.polywrap.eth",\nººmethod: "swap",\nººargs: {\nººººinToken,\nººººoutToken,\nººººamount,\nºººº...\nºº}\n});',
        },
        {
          filename: "executeSwap.py",
          language: "python",
          snippet:
            '#Execute Token Swaps w/ Uniswap V3\n\nclient.invoke(\nººuri="wrap://ens/v3.uniswap.polywrap.eth",\nººmethod="swap",\nººargs={\nºººº"inToken": inToken,\nºººº"outToken": outToken,\nºººº"amount": amount,\nºººº...\nºº}\n);',
        },
        {
          filename: "executeSwap.rs",
          language: "rust",
          snippet:
            '// Execute Token Swaps with Uniswap V3\nclient.invoke({\nººuri: "wrap://ens/v3.uniswap.polywrap.eth",\nººmethod: "swap",\nººargs: uni::mutation::swap::Input {\nººººinToken: inToken,\nººººoutToken: outToken,\nººººamount: amount,\nºººº...\nºº}.to_json()\n});',
        },
      ],
    },
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    maxWidth: theme.breakpoints.values.lg,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 2,
    [theme.breakpoints.down("md")]: {
      marginTop: 150,
      minHeight: "60vh",
    },
    [theme.breakpoints.up("xs")]: {
      maxWidth: "90vw",
    },
  },
  grid: {
    justifyContent: "center",
    marginTop: theme.spacing(6),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      "& .MuiGrid-item": {
        padding: 20,
      },
    },
  },
  title: {
    fontWeight: 900,
    marginBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down("md")]: {
      fontSize: 48,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: 10,
      fontSize: 28,
    },
  },
  description: {
    marginTop: 20,
  },
  wrapperSelection: {
    backgroundColor: polywrapPalette.secondary[900],
    border: `1px solid ${polywrapPalette.secondary[800]}`,
    borderRadius: 16,
    cursor: "pointer",
    display: "flex",
    fontWeight: 700,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
    //paddingX: theme.spacing(2),
    padding: 10,
    textAlign: "center",
    transition: "all 0.25s ease-in-out",
    height: 120,
    width: 120,
    "&:hover": {
      opacity: 1,
      boxShadow: theme.shadows[16],
    },
    "&.is-active": {
      borderColor: polywrapPalette.secondary[300],
      boxShadow: theme.shadows[16],
      opacity: 1,
      ".wrapperIcon": {
        color: polywrapPalette.secondary[300],
      },
    },
  },
  wrapperSelectionIcon: {
    marginBottom: theme.spacing(1),
    height: theme.spacing(5),
    width: theme.spacing(5),
    filter: `invert(75%) sepia(67%) saturate(430%) hue-rotate(153deg) brightness(96%) contrast(94%)`,
    "& img": {
      filter: `saturate(0%) brightness(0%)`,
      objectFit: "contain",
      height: "100%",
      width: "100%",
    },
  },
  wrapperCTAButton: {
    marginTop: theme.spacing(2),
  },
  IDEWrapper: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(8),
    },
  },
  polywrapIllustration: {
    width: "100%",
    [theme.breakpoints.down("md")]: {
      maxHeight: "60vh",
    },
    [theme.breakpoints.down("xs")]: {
      maxHeight: "30vh",
    },
  },
  demoFunctionWrapper: {
    bottom: -theme.spacing(2),
    position: "absolute",
    right: -theme.spacing(2),
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      bottom: -theme.spacing(8),
    },
  },
}));

export const WrappersShowcase = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [activeWrapper, setActiveWrapper] = useState<number>(0);

  const handleWrapperSelection = (wrapper: number) => {
    setActiveWrapper(wrapper);
  };

  return (
    <Box position="relative" className={classes.root}>
      <Container maxWidth="md">
        {/* exciting title for the section */}
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          className={classes.title}
        >
          Blazing fast development
        </Typography>

        {/* description about the wrapper dev experience */}
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          className={classes.description}
        >
          Write queries in minutes rather than hours. Using the polywrap
          toolchain, you'll be able to hit any protocol endpoint from any device
          that can run a Polywrap client.
        </Typography>
      </Container>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={wrappersData?.length >= 5 ? "space-between" : "center"}
        mt={6}
      >
        {wrappersData?.map((wrapper: any, index: number) => {
          return (
            <Box
              key={index}
              ml={index !== 0 ? 2 : 0}
              mr={index !== wrappersData.length - 1 ? 2 : 0}
              onClick={() => handleWrapperSelection(index)}
            >
              <Box
                className={classnames(
                  classes.wrapperSelection,
                  activeWrapper === index && "is-active"
                )}
              >
                <Box className={classes.wrapperSelectionIcon}>
                  <img src={wrapper.svgLogo?.url} alt={wrapper.svgLogo?.alt} />
                </Box>
                {wrapper.wrapperName}
              </Box>
            </Box>
          );
        })}
      </Box>
      {/* The lines below are used to check
            1. that wrappersData exists
            2. maps all the data to render the component*/}
      {wrappersData?.map((wrapper: any, index: number) => (
        <Box
          key={index}
          mb={24}
          style={{
            display: activeWrapper === index ? "block" : "none",
          }}
        >
          <Grid
            container
            spacing={6}
            alignItems="flex-start"
            className={classes.grid}
          >
            {/* This section is used to display the name of the wrapper, a description of the wrapper,
                  additional copy to generate engagement, and a CTA button that takes users to docs of the
                  specified wrappert
              */}
            <Grid item xs={12} md={6}>
              {/* The name of the wrapper currently displayed */}
              <Typography
                variant="h4"
                color="textPrimary"
                className={classes.title}
              >
                {wrapper.wrapperName}
              </Typography>

              {/* Description of the wrapper being displayed */}
              <Typography
                variant="body1"
                color="textSecondary"
                className={classes.description}
              >
                {wrapper.description}
              </Typography>

              {/* CTA to get people to use the specific wrapper */}
              <Button
                // still dunno what to calll this
                className={classes.wrapperCTAButton}
                color="primary"
                href={wrapper.docsLink}
                target="_blank"
                rel="noredirect"
                endIcon={<KeyboardArrowRightOutlined />}
                type="submit"
                variant="contained"
              >
                wrap with it
              </Button>
            </Grid>

            {/* // this grid is used to showcase the IDE and the CMS card */}
            <Grid item xs={12} md={6}>
              <Box className={classes.IDEWrapper}>
                {/* Card section for listing names of new functions */}
                <Box className={classes.demoFunctionWrapper}>
                  <Parallax
                    y={[140, -13]}
                    disabled={window.innerWidth < theme.breakpoints.values.md}
                  >
                    {/* TODO: later down the road, use this section to map all the name
                          of the functions within the wrapper and display them on a card.
                          Also consider a way of setting the active function on "accent",
                          while the other ones not being displayed could look grey.

                      <DemoFunctions 
                        content={
                            featuredQueries
                          } 
                      />
                    */}
                  </Parallax>
                </Box>
                <IDE queriesData={wrapper.queries} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};