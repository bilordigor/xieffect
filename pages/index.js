import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import * as React from 'react';
import { Divider, Paper, Grid, AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container, Fab, Zoom, Button, Hidden } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { Link as LinkUI } from '@material-ui/core'
import UseAnimations from "react-useanimations"
import download from 'react-useanimations/lib/download'
import activity from 'react-useanimations/lib/activity'
import Navigation from '../components/main/Menu/Navigation';

import Background from '../components/app/help/background/background';
import { WallpaperSharp } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#2b2b2b',
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: '-1',
  },
  main: {
    zIndex: 999,
  },
  gridTypographyMain: {
    paddingRight: 96,
    zIndex: 999,
  },
  typographyMain: {
    fontSize: 32,
    color: theme.main.palette.header.text,
    cursor: 'default',
    zIndex: 999,
  },
  gridMenuLink: {
    paddingLeft: 32,
    fontSize: 16,
    fontFamily: 'Roboto',
    zIndex: 999,
  },
  menuLink: {
    color: theme.main.palette.header.text,
    cursor: 'pointer',
    zIndex: 999,
  },
  gridMenu: {
    paddingTop: 16,
    zIndex: 999,
  },
  gridLabelMain: {
    paddingLeft: 16,
    cursor: 'default',
    paddingTop: 160,
    zIndex: 999,
  },
  gridLabelSecondary: {
    paddingLeft: 16,
    paddingRight: 16,
    cursor: 'default',
    paddingTop: 16,
    zIndex: 999,
  },
  gridLabelSecondarytwo: {
    paddingLeft: 16,
    paddingRight: 16,
    cursor: 'default',
    paddingTop: 2,
  },
  labelSecondarytwo: {
    zIndex: 999,
    fontSize: 20,
    color: theme.main.palette.header.text,
  },
  labelMain: {
    fontWeight: 'bold',
    color: theme.main.palette.header.text,
    fontSize: 48,
    zIndex: 999,
  },
  labelSecondary: {
    color: theme.main.palette.header.text,
    fontSize: 20,
    zIndex: 999,
  },
  dowloadButtom: {
    color: theme.main.palette.header.text,
    zIndex: 999,
    paddingLeft: 4,
    borderRadius: 24,
  },
  enterButton: {
    borderRadius: 12,
    zIndex: 999,
    marginLeft: 48,
    color: theme.main.palette.header.text,
    //cursor: 'pointer',
  },
  openInBroweser: {
    marginLeft: 32,
    color: theme.main.palette.header.text,
    zIndex: 999,
    paddingLeft: 4,
    borderRadius: 24,
  },
  gridButtons: {
    marginTop: 64,
    //paddingBottom: '185px',
  },
  paperMenu: {
    backgroundColor: '#424242',
    //marginTop: '600px',
    height: '1000px',
    width: '100%',
  },
  img: {
    // zIndex: 0,
    // display: 'block',
    // position: 'absolute',
    // top: '0',
    // left: '0',
    // bottom: '0',
    // right: '0',
    // width: '100%',
    // height: '100%',
    // [theme.breakpoints.up('md')]: {
    //   height: '660px'
    // },
    // [theme.breakpoints.down('md')]: {
    //   height: '900px'
    // },
    // objectFit: 'cover',
    // zIndex: 1,
    // overflow: 'hidden',
    // backgroundAttachment: 'fixed',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'top',
    // filter: 'grayscale(10%) opacity(30%)',
    // mixBlendMode: 'multiply',
  },
  gridDivider: {
    marginTop: '333px',
    marginBottom: '100px',
    marginLeft: '10px',
    marginRight: '10px',
    width: 'auto',
  },
  divider: {
    zIndex: 999,
    height: 2,
    // width: 'auto',
    // marginLeft: '10px',
    // marginRight: '10px',
    backgroundColor: theme.main.palette.content.text,
  },
  paperMenu: {
    // // position: 'fixed',
    // height: '100px',
    // width: '100%',
    // // [theme.breakpoints.up('md')]: {
    // //   marginTop: '0px'
    // // },
    // // [theme.breakpoints.only('md')]: {
    // //   marginTop: '200px'
    // // },
    // // [theme.breakpoints.down('md')]: {
    // //   marginTop: '400px'
    // // },
    // backgroundColor: theme.main.palette.content.background,
  },
  gridButtonsSmall: {
    marginTop: 64,
    //paddingBottom: '185px',
  },
  dowloadButtomSmall: {
    color: theme.main.palette.header.text,
    zIndex: 999,
    paddingLeft: 4,
    borderRadius: 24,
  },
  openInBroweserSmall: {
    color: theme.main.palette.header.text,
    zIndex: 999,
    paddingLeft: 4,
    borderRadius: 24,
    marginTop: 8,
    marginLeft: 0,
  },
}));


const Home = ({ data }) => {
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

  // React.useEffect(() => {
  //   setTimeout(setIsLoading(false), 20000);
  // }, [])

  return (
    <>
      <Head>
        <title>
          Ξ Effect
        </title>
      </Head>
      <div className={classes.root}>
        <Background src={wallpapers()} />
        <Grid container direction="column" justifyContent="flex-start" alignItems="center" className={classes.main}>
          <Navigation />
          <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.gridLabelMain}>
            <Typography className={classes.labelMain}> Новое слово в образовании </Typography>
          </Grid>
          <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.gridLabelSecondary}>
            <Typography className={classes.labelSecondary}> Ξ Effect - платформа, где можно делиться знаниями и получать их так, как вам будет удобнее.</Typography>
          </Grid>
          <Hidden mdDown>
            <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.gridButtons}>
              <Button variant="contained" className={classes.dowloadButtom}>
                <UseAnimations onClick={gotoDownload} strokeColor={theme.main.palette.header.text} animation={download} size={56} style={{}} />
              Загрузить
              </Button>
              <Button onClick={gotoAuth} variant="contained" className={classes.openInBroweser}>
                <UseAnimations strokeColor={theme.main.palette.header.text} animation={activity} size={56} style={{}} speed={0.5} />
              Открыть в Браузере
              </Button>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.gridButtonsSmall}>
              <Button onClick={gotoDownload} variant="contained" className={classes.dowloadButtomSmall}>
                <UseAnimations strokeColor={theme.main.palette.header.text} animation={download} size={32} style={{}} />
              Загрузить
              </Button>
              <Button onClick={gotoAuth} variant="contained" className={classes.openInBroweserSmall}>
                <UseAnimations strokeColor={theme.main.palette.header.text} animation={activity} size={32} style={{}} speed={0.5} />
              Открыть в Браузере
              </Button>
            </Grid>
          </Hidden>
        </Grid>
      </div>

    </>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch(`http://localhost:4200/courses`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { data, }, // will be passed to the page component as props
//   }
// }

export default Home