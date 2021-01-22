import React from 'react'
import Head from 'next/head'
import { Divider, Paper, Grid, FormControlLabel, makeStyles, useTheme, Menu, Hidden, IconButton, InputBase, Switch, Typography } from '@material-ui/core'

import Page from 'react-page-loading'
import NavigationAll from '../../../components/app/Menu/NavigationAll'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: theme.main.palette.main.background,
  },
}));

export default function Apps() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>Ξ Приложения</title>
      </Head>
      <NavigationAll>
        <div className={classes.root}>
          {/* <Page loader="bar" color={"#4452b8"} size={16}> */}
          <Typography> Приложения </Typography>
          {/* </Page> */}
        </div>
      </NavigationAll>
    </>
  )
}