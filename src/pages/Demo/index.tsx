import {
  Grid,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DemoSection } from '../../components/DemoSection';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 'calc(100vh - 80px)',
    margin: 'auto',
    padding: '40px 64px 0',
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      minHeight: 'unset',
      padding: '0'
    }
  },
}))

export const Demo = () => {

  const theme = useTheme()
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <>
      <Grid className={classes.root} container justify='center' alignItems='center' direction={matches? 'row-reverse': 'row'}>
        <DemoSection />
      </Grid>
    </>
  );
};
