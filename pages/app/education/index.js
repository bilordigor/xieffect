import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { CircularProgress, Divider, Paper, Grid, FormControlLabel, makeStyles, useTheme, Menu, Hidden, IconButton, InputBase, Switch, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CoursesList from '../../../components/app/EducationPage/CoursesList';
import Chipper from '../../../components/app/EducationPage/Chipper';

import AddCourse from '../../../components/app/EducationPage/AddCourse';
import Background from '../../../components/app/help/background/background';

import { inject, observer } from 'mobx-react'

import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import Page from 'react-page-loading'
import NavigationAll from '../../../components/app/Menu/NavigationAll';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    //backgroundColor: theme.main.palette.main.background,
  },
  main: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    //backgroundColor: theme.main.palette.main.background,
    // zIndex: 999,
    //paddingBottom: "100px",
  },
  gridCoursesList: {
    // [theme.breakpoints.up('md')]: {
    //   marginTop: 30,
    // },
    // [theme.breakpoints.only('md')]: {
    //   marginTop: 60,
    // },
    // [theme.breakpoints.down('md')]: {
    //   marginTop: 100,
    // },  
  },
  gridLoading: {
    marginTop: 8,
    marginBottom: 8,
    height: 96,
  }

}));

const Education = inject('store')(observer(({ store }) => {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  //console.log(data)

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChangeSwitch = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElHeader, setAnchorElHeader] = React.useState(null);
  const openHeader = Boolean(anchorElHeader);

  const handleClickHeader = (event) => {
    setAnchorElHeader(event.currentTarget);
  };

  const handleCloseHeader = () => {
    setAnchorElHeader(null);
  };

  useEffect(() => {
    store.getDataScr(`${store.url}/filters/`)
      .then((data) => {
        console.log(data)
        if (data != undefined) {
          store.setFilters(data)
          loadingMoreCourses()
        }
      });
  }, []);

  const bottomLoading = () => {
    store.coursesFilters.conuter++
    loadingMoreCourses()
  }

  useBottomScrollListener(bottomLoading);

  

  // function handleScroll() {
  //   console.log("innerHeight", window.innerHeight)
  //   console.log("document.documentElement.scrollTop", document.documentElement.scrollTop)
  //   console.log("document.documentElement.offsetHeight", document.documentElement.offsetHeight)
  //   if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  //   console.log('Fetch more list items!');
  // }

  const loadingMoreCourses = () => {
    console.log("loading new courses")
    store.setIsLoading(true)
    store.collectFilters()
    store.postDataScr(`${store.url}/courses/`, store.coursesFilters)
      .then((data) => {
        console.log(data)
        if (data != undefined) {
          store.setIsLoading(false)
          store.addItemsCoursesList(data)



        }
      });
  }

  return (
    <>
      <Head>
        <title>Ξ Образование</title>
      </Head>
      <NavigationAll>
        {/* <Page loader={"bar"} color={"#4452b8"} size={16}> */}
        <div className={classes.root}>
          {/* {props.store.userData.isBackgroundImageInEducation && <Background src="https://wallpapercave.com/wp/wp5440815.png" />} */}
          {/* <Background src="https://wallpapercave.com/wp/wp5440815.png" /> */}
          <Grid container direction="column" className={classes.main}>
            <Grid className={classes.gridChipper}>
              <Chipper />
            </Grid>
            <Grid className={classes.gridCoursesList}>
              <CoursesList />
            </Grid>
            <Grid
              className={classes.gridLoading}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {store.isLoading && <CircularProgress />}
            </Grid>
          </Grid>

        </div >
        {/* </Page> */}
      </NavigationAll>
    </>
  )
}))


export default Education