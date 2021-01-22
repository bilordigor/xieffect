import React from 'react'
import { Typography, Grid, useTheme, Divider, makeStyles, Paper } from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import Head from 'next/head'
import Page from 'react-page-loading'
import HelloTittle from '../../components/app/MainPage/HelloTittle'
import TodoList from '../../components/app/MainPage/TodoList'
import Background from '../../components/app/help/background/background'
import { inject, observer } from 'mobx-react'
import NavigationAll from '../../components/app/Menu/NavigationAll'


const useStyles = makeStyles((theme) => ({
  main: {
    width: '100%',
    minHeight: '100vh',
  },
  gridDividerUnderHelloTittle: {
    zIndex: 99,
    marginTop: '5px',
    marginBottom: '5px',
  },
  divider: {
    [theme.breakpoints.only('xs')]: {
      marginTop: theme.spacing(9),
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: theme.spacing(9),
    },
    marginTop: '-50px',
    height: '2px',
    width: 'auto',
    marginRight: 0,
    marginLeft: 0,
    zIndex: 999,
    backgroundColor: theme.main.palette.content.secondary,
  },
  zIndex: {
    zIndex: 999,
  }

}));


const Home = inject('store')(observer((props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Ξ Effect</title>
      </Head>
      <NavigationAll>
        {/* <Page loader={"bar"} color={"#4452b8"} size={16}> */}
          {props.store.userData.isBackgroundImageInMain && <Background src="/wallpapers/hp4.jpg" />}
          <Grid container direction="column" className={classes.main}>
            <Grid item>
              <HelloTittle />
            </Grid>
            <Grid item className={classes.zIndex}>
              <Divider className={classes.divider} />
              {/* <Paper elevation={3} className={classes.divider}>lorem 100</Paper> */}
            </Grid>
            <Grid item>
              <TodoList />
            </Grid>
          </Grid>
          {/* <Typography> Главная </Typography> */}
        {/* </Page> */}
      </NavigationAll>
    </>
  )
}))

export default Home