import React from 'react';
import { useEffect, useState } from "react";
import { Parallax } from 'react-scroll-parallax';
import { Box, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import parse from 'html-react-parser';
import { IDE } from './IDE';
// import {wrapperSectionData as data} from '../constants/wrapper-section'
import { fetchWrappers }from './CMScontent';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg,
    padding: '50px 20px 100px 20px',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      marginTop: 150,
      minHeight: '60vh',
    },
    [theme.breakpoints.up('xs')]: {
      maxWidth: '90vw',
    },
    minHeight: 650, // Edit this for Desktop & Mobile views when changing the section location or adding/changing content.
  },
  grid: {
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 40,
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
}));


export const WrapperSection = () => {
  const theme = useTheme();
  const classes = useStyles();

  // Get Wrappers Data
  const [wrappersData, setWrappersData] = useState<any>(null)
  const [transitionID, setTransitionID] = useState<number>(0)

  useEffect(() => {
    async function fetchData() {
      setWrappersData(await fetchWrappers())
    }
    fetchData()
  }, [])


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

      { wrappersData &&
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
                <IDE queriesData={wrapper.query} />
              </Grid>

              <Grid item xs={12} md={6} >
                <Typography
                  variant='h3'
                  color='textPrimary'
                  className={classes.title}
                >
                  { wrapper.wrapperName }
                </Typography>
                <Typography
                  variant='body1'
                  color='textSecondary'
                  className={classes.description}
                >
                  {/*{ parse(wrapper.description) } */}
                  { wrapper.description }
                </Typography>
              </Grid>
            </Grid>

        )}

      </Parallax>
    </Box>
  );
};
