import { Divider, withStyles, Paper, Grid, FormControlLabel, makeStyles, useTheme, Menu, Hidden, IconButton, InputBase, Switch, Typography } from '@material-ui/core'
import Head from 'next/head'
// import DialogsList from '../../components/FriendsPage/DialogsList';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import Page from 'react-page-loading'
import NavigationAll from '../../../components/app/Menu/NavigationAll';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: theme.main.palette.main.background,
  },
}));

export default function Friends() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Ξ Друзья</title>
      </Head>
      <NavigationAll>
        <div className={classes.root}>
          {/* <Page loader={"bar"} color={"#4452b8"} size={16}> */}
          <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.root}>
            {/* <DialogsList /> */}
          </Grid>
          {/* </Page> */}
        </div>
      </NavigationAll>

    </>
  )
}