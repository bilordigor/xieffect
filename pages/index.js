import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import * as React from 'react';
import { Alert, Divider, Paper, Grid, AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container, Fab, Zoom, Button, Hidden } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { Link as LinkUI } from '@material-ui/core'
import UseAnimations from "react-useanimations"
import download from 'react-useanimations/lib/download'
import activity from 'react-useanimations/lib/activity'
import Navigation from '../components/main/Menu/Navigation';

import { inject, observer } from 'mobx-react'

import Background from '../components/app/help/background/background';
import { WallpaperSharp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: '#2b2b2b',
    //position: 'absolute',
    height: '100vh',
    width: '100vw',
    zIndex: '-1',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  main: {
    zIndex: 999,
    // height: '100vh',
    // width: '100vw',
    //overflowY: 'scroll',
    //overflowX: 'hidden',
  },
  labelMain: {
    cursor: 'default',
    color: theme.main.palette.header.text,
    [theme.breakpoints.up('md')]: {
      fontSize: 48,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    zIndex: 999,
  },
  labelSecondary: {
    cursor: 'default',
    [theme.breakpoints.up('md')]: {
      fontSize: 32,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    color: theme.main.palette.header.text,

    zIndex: 999,
  },
  gridroot: {
    width: '100vw',
    minHeight: '100vh',
  },
  gridLabelMain: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  gridAlert: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  }
}));


const Home = inject('store')(observer((props) => {
  const classes = useStyles();
  const theme = useTheme();

  const wallpapers = () => {
    // console.log(data)
    let count = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1))) + Math.ceil(1)
    return "/wallpapers/hp" + count.toString() + ".jpg"

  }

  const gotoAuth = (event) => {
    const router = Router
    router.push('/login')
    event.preventDefault();
  }

  const gotoDownload = (event) => {
    const router = Router
    router.push('/download')
    event.preventDefault();
  }

  React.useEffect(() => {
    // props.store.getData(`${props.store.url}/status`)
    //   .then((data) => {
    //     props.store.setAlertData(date.type, date.text)
    //   });
    // props.store.getData(`${props.store.url}/status`)
    //   .then((data) => {
    //     console.log(data)
    //     props.store.setAlertData(date.type, date.text)
    //   });
    // props.store.getData(`${props.store.url}/`)
    //   .then((data) => {
    //     console.log("1)")
    //     console.log(data)

    //   });
    // props.store.postData(`${props.store.url}/`)
    //   .then((data) => {
    //     console.log("2)")
    //     console.log(data)
    //   });
    // props.store.postData(`${props.store.url}/`, { "test": "smth" })
    //   .then((data) => {
    //     console.log("3)")
    //     console.log(data)
    //   });
    // props.store.getData(`${props.store.url}/test/abcd/`,)
    //   .then((data) => {
    //     console.log("4)")
    //     console.log(data.a);
    //     console.log(data)
    //   });
    // props.store.getData(`${props.store.url}/test/abcd/test/`,)
    //   .then((data) => {
    //     console.log("5)")
    //     console.log(data.a);
    //     console.log(data)
    //   });

    props.store.login("test@test.test", "12345")

  }, [])

  const clickedFB = () => {
    props.store.postData(`${props.store.url}/auth/`, {"email": "test@test.test", "password": "12345"})
       .then((data) => {
         console.log("6)")
         console.log(data.a);
         console.log(data)
         //props.store.setToken(data.access)

    });
  } 

  
  const clickedSB = () => {
    props.store.getDataScr(`${props.store.url}/test/`, ) //{"access_token": props.store.token.access_token}
       .then((data) => {
         console.log("7)")
         console.log(data.a);
         console.log(data)
    });
  } 


  const alertList = ['error', 'warning', 'info', 'success']

  return (
    <>
      <Head>
        <title>
          Ξ Effect
        </title>
      </Head>
      <div className={classes.root}>
        <Background src={wallpapers()} />
        <Grid
          className={classes.gridroot}
          container
          direction="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item container justifyContent="flex-start" direction="column" alignItems="center">
            <Navigation />
          </Grid>
          <Grid item container direction="column" alignItems="center" className={classes.gridLabelMain}>
            <Typography className={classes.labelMain}> Новое слово в образовании </Typography>
            <Typography className={classes.labelSecondary}> Ξ Effect - платформа, где можно делиться знаниями и получать их так, как вам будет удобнее.</Typography>
            <Button onClick={clickedFB} variant="contained" color="secondary">
              First
            </Button>
            <Button onClick={clickedSB} variant="contained" color="secondary">
              Secondary
            </Button>
          </Grid>
          <Grid item container direction="column" alignItems="center" className={classes.gridAlert}>
            <Alert severity={alertList[props.store.alertData.type]}>{props.store.alertData.text}</Alert>
          </Grid>
        </Grid>
      </div>

    </>
  );
}))

export default Home