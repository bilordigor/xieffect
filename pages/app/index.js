import React from 'react'
import { Box, Typography, Grid, useTheme, Divider, makeStyles, Paper } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import Head from 'next/head'
import Page from 'react-page-loading'
import HelloTittle from '../../components/app/MainPage/HelloTittle'
import MainApp from '../../components/app/MainPage/MainApp'
import Background from '../../components/app/help/background/background'
import { inject, observer } from 'mobx-react'
import NavigationAll from '../../components/app/Menu/NavigationAll'
import MainLinks from '../../components/app/MainPage/MainLinks'
import LearningCenter from '../../components/app/MainPage/LearningCenter'


const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    minHeight: '100vh',
    zIndex: 1,
  },
  gridDividerUnderHelloTittle: {
    zIndex: 99,
    marginTop: '5px',
    marginBottom: '5px',
  },
  divider: {
    // [theme.breakpoints.only('xs')]: {
    //   marginTop: theme.spacing(7),
    // },
    // [theme.breakpoints.only('sm')]: {
    //   marginTop: theme.spacing(7),
    // },
    marginBottom: 8,
    marginTop: 4,
    height: '1px',
    width: 'auto',
    marginRight: 0,
    marginLeft: 0,
    zIndex: 999,
    backgroundColor: theme.main.palette.content.icon,
  },
  space: {
    [theme.breakpoints.up('xs')]: {
      height: 10
    },
    [theme.breakpoints.only('xs')]: {
      height: 100
    },
  },
  mainLinks: {
    [theme.breakpoints.up('xs')]: {
      marginTop: 2
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: 10
    },
  },
  learningCenter: {
    marginTop: 8,
    marginBottom: 8,
  },
  mainApp: {
    marginTop: 8,
    marginBottom: 8,
  }

}));


const Home = inject('store')(observer((props) => {
  const classes = useStyles();
  const theme = useTheme();

  React.useEffect(() => {
    props.store.setLoginValuesClear()
  }, [])

  return (
    <>
      <Head>
        <title>Ξ Effect</title>
      </Head>
      <NavigationAll>
        {/* <Page loader={"bar"} color={"#4452b8"} size={16}> */}
        {props.store.userData.isBackgroundImageInMain && <Background src="/wallpapers/hp4.jpg" />}
        <Grid container direction="column" className={classes.main}>
          <Grid item className={classes.helloTittle}>
            <HelloTittle />
          </Grid>
          <Divider className={classes.divider} />
          <Grid item className={classes.learningCenter}>
            <LearningCenter />
          </Grid>
          <Grid item className={classes.mainApp}>
            <MainApp />
          </Grid>
          {/* <Grid item className={classes.mainLinks}>
            <MainLinks/>
          </Grid> */}
          <Box className={classes.space}>

          </Box>
        </Grid>
        {/* <Typography> Главная </Typography> */}
        {/* </Page> */}
      </NavigationAll>
    </>
  )
}))

export default Home