import React, { useEffect } from "react";
import Navigation from "./Navigation";
import { useRouter } from 'next/router'
import clsx from 'clsx';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { inject, observer } from 'mobx-react'
import { Scrollbars } from 'react-custom-scrollbars';
import Background from '../help/background/background'



const useStyles = makeStyles((theme) => ({
  dark: {
    // display: 'block',
    // position: 'fixed',
    // top: '0',
    // left: '0',
    // bottom: '0',
    // right: '0',
    // width: '100%',
    // zIndex: 1,
    // height: '100%',
    // background: theme.main.palette.main.background,
    // transition: '1s',
  },
  main: {
    // display: 'block',
    // position: 'relative',
    // top: '0',
    // left: '0',
    // bottom: '0',
    // right: '0',
    // width: '100%',
    // objectFit: 'cover',
    // zIndex: 1,
    // height: '100%',
    // backgroundAttachment: 'fixed', 
    //overflowY: 'scroll',
    transition: '1s',
    //background: theme.main.palette.main.background,
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(8),
    },
    [theme.breakpoints.only('xs')]: {
      paddingTop: theme.spacing(8),
    },
    //paddingBottom: "300px",
  },
  mainAuth: {
    margin: 0,
  },
  mainOpen: {
    transition: '1s',
    [theme.breakpoints.up('xs')]: {
      paddingLeft: theme.spacing(27),
    },
    [theme.breakpoints.only('xs')]: {
      paddingLeft: theme.spacing(2),
    },
  },
  mainClose: {
    transition: '1s',
    [theme.breakpoints.up('xs')]: {
      paddingLeft: theme.spacing(11),
    },
    [theme.breakpoints.only('xs')]: {
      paddingLeft: theme.spacing(2),
    },
  },
  trackVertical: {
    backgroundColor: theme.main.palette.main.main,
    width: '12px', //не работает
    borderRadius: '6px', //под вопросом
  }
}));

const MenuLayout = inject('store')(observer((props) => {

  const classes = useStyles();
  const theme = useTheme();

  //Меню
  const open = props.store.topLeftMenuButtom

  useEffect(() => {
    //const { pathname } = useRouter()
    // if (pathname == '/' && !props.store.userData.readyAuth) {
    //   Router.push('/auth')
    // }

  });
  const { pathname } = useRouter()
  const isAuth = () => {

    if (pathname.includes('/app')) return true
    else false
  }

  return (
    <>
    {/* <div className={classes.dark}> */}
      {isAuth() && <>
        <Navigation />
        <Scrollbars
          // renderTrackVertical={props => <div {...props} className={classes.trackVertical} />}
          universal
          autoHide
          renderThumbVertical={props => <div {...props} className={classes.trackVertical} />}
          style={{ backgorundColor: '#3f50b5', position: 'fixed', widht: '100%', height: '100vh' }}>
          <main className={clsx(classes.main, {
            [classes.mainOpen]: open,
            [classes.mainClose]: !open,
          })}>
            {props.children}
          </main>
        </Scrollbars>
      </>}
      {!isAuth() &&
        <>
          {/* <Scrollbars
          universal
          autoHide
          renderThumbVertical={props => <div {...props} className={classes.trackVertical} />}
          style={{ backgorundColor: '#3f50b5', position: 'fixed', widht: '100%', height: '100vh' }}> */}
          <main className={classes.mainAuth}>
            {props.children}
          </main>
          {/* </Scrollbars> */}
        </>
      }
    {/* </div> */}
    </>
  );
}));

export default MenuLayout;
