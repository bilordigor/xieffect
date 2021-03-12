import React from 'react';
import { CircularProgress, Divider, withStyles, Paper, Grid, FormControlLabel, makeStyles, useTheme, Menu, Hidden, IconButton, InputBase, Switch, Typography } from '@material-ui/core'
import Head from 'next/head'
// import DialogsList from '../../components/FriendsPage/DialogsList';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import Page from 'react-page-loading'
import NavigationAll from '../../../components/app/Menu/NavigationAll';
import SettingsUp from '../../../components/app/Menu/Dialog/SettingsUp';
import SettingsDown from '../../../components/app/Menu/Dialog/SettingsDown';
import { inject, observer } from 'mobx-react'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    //height: 'calc(100vh - 72px)',
    height: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: theme.main.palette.main.background,
  },
  gridLoadig: {
    width: '100%',
    //height: 'calc(100vh - 72px)',
    height: '100vh',
    margin: 0,
    padding: 0,
  }
}));

const Settings = inject('store')(observer(({ store }) => {
  const classes = useStyles();
  const theme = useTheme();

  React.useEffect(() => {
    
    //store.setIsFetchLoading("settings", false)
    store.getDataScr(`${store.url}/settings/`)
      .then((data) => {
        store.setIsFetchLoading("settings", true)
        //console.log(data)
        // if (data.message != undefined) {
        //   console.log(data.message)
        // }
        if (data != undefined) {
          console.log(data)
          // store.settings = data
          // store.settingsNew = data
          //store.SettingsNew.username = data.username
          //store.SettingsNew.email = data.email
          //store.setSettingsEmailValues()
          console.log(store.SettingsNew)
        } else {
          console.log("Проблемы с сервером")
        }
        
      });

  }, [])

  return (
    <>
      <Head>
        <title>Ξ Настройки</title>
      </Head>
      <NavigationAll>

        <div className={classes.root}>
          {!store.isFetchLoading.settings && <Grid
            className={classes.gridLoadig}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            
          >
            <CircularProgress />
          </Grid>}
          {store.isFetchLoading.settings && <Hidden mdUp>
            <SettingsDown />
          </Hidden>}
          {store.isFetchLoading.settings && <Hidden mdDown>
            <SettingsUp />
          </Hidden>}
        </div>
      </NavigationAll>

    </>
  )
}))

export default Settings