//import '../styles/globals.css'
import React from 'react';
import Head from "next/head";
import PropTypes from 'prop-types';
import { makeStyles, useTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'mobx-react'
import { useStore } from '../store'
import 'fontsource-roboto';
import Context from '../store'
import { useFileUpload } from "use-file-upload";
import SwipeableViews from 'react-swipeable-views';
import { inject, observer } from 'mobx-react'
import CssBaseline from '@material-ui/core/CssBaseline';


const MyApp = (observer(({ Component, pageProps }) => {

  const store = useStore(pageProps.initialState)
  const [files, selectFiles] = useFileUpload()

  const theme = createMuiTheme({
    main: {
      palette: {
        main: {
          main: store.userData.isDarkMode ? '#3f50b5' : '#3f50b5',
          background: store.userData.isDarkMode ? '#121212' : '#fafafa',
        },
        header: {
          main: store.userData.isDarkMode ? '#373737' : '#3f50b5',
          secondary: store.userData.isDarkMode ? '#3f50b5' : '#3f50b5',
          text: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          icon: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          background: store.userData.isDarkMode ? '#373737' : '#3f50b5',
          border: store.userData.isDarkMode ? '#9e9e9e' : '#e0e0e0',
        },
        navbar: {
          main: store.userData.isDarkMode ? '#323232' : '#eeeeee',
          secondary: store.userData.isDarkMode ? '#3f50b5' : '#3f50b5',
          text: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          icon: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          iconMenu: store.userData.isDarkMode ? '#e0e0e0' : '#e0e0e0',
          background: store.userData.isDarkMode ? '#323232' : '#eeeeee',
          border: store.userData.isDarkMode ? '#9e9e9e' : '#e0e0e0',
        },
        content: {
          main: store.userData.isDarkMode ? '#2c2c2c' : '#f5f5f5',
          secondary: store.userData.isDarkMode ? '#3f50b5' : '#3f50b5',
          text: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          reverseText: store.userData.isDarkMode ? '#424242' : '#e0e0e0',
          icon: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          background: store.userData.isDarkMode ? '#2c2c2c' : '#eeeeee',
          border: store.userData.isDarkMode ? '#9e9e9e' : '#e0e0e0',
        },
        buttons: {
          main: store.userData.isDarkMode ? '#212121' : '#f5f5f5',
          secondary: store.userData.isDarkMode ? '#3f50b5' : '#3f50b5',
          text: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          icon: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          background: store.userData.isDarkMode ? '#212121' : '#9e9e9e',
        },
        textaria: {
          main: store.userData.isDarkMode ? '#212121' : '#f5f5f5',
          text: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          icon: store.userData.isDarkMode ? '#e0e0e0' : '#424242',
          secondary: store.userData.isDarkMode ? '#3f50b5' : '#3f50b5',
          background: store.userData.isDarkMode ? 'rgb(49,51,57)' : '##bdbdbd',
        },
        help :{
          red: store.userData.isDarkMode ? '#b71c1c' : '#e57373',
          redbackground:  store.userData.isDarkMode ? 'rgb(183, 28, 28, .2)' : 'rgb(229, 115, 115, .2)',
        }
      }
    }

  });


  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        {/* <title>
          Ξ Effect
        </title> */}
        <meta name="Keywords" content="Образованиие, Эффект, Кси Эффект, Xi Effect, Effect" />
        <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.2, minimum-scale=0.8" />
        <meta
          name="description"
          content="Всё, что нужно для вашего Образования."
        />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
      </Head>
      <Context.Provider value={{ files, selectFiles }}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {/* <MenuLayout> */}
              <CssBaseline />
              <Component {...pageProps} />
            {/* </MenuLayout> */}
          </ThemeProvider>
        </Provider>
      </Context.Provider>
    </>

  )
}))

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};