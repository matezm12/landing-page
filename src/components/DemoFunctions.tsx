import { Box, makeStyles } from '@material-ui/core';
import { polywrapPalette } from "../theme"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 24,
    boxShadow: `0 16px 40px rgba(0,0,0,0.3)`,
    color: polywrapPalette.terciary[400],
    fontFamily: `'Space Mono', 'PT Mono', mono`,
    fontWeight: 700,
    minWidth: 240,
    padding: theme.spacing(4),
  },
}));

interface DemoFunctionProps {
  content: string[];
}

export const DemoFunctions = ({content}: DemoFunctionProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {content.map((result) => {
          return (
            <Box>{result}</Box>
          )
        }
      )}
    </Box>
  )
}