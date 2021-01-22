import React from 'react'
import Head from 'next/head'
import { Grid, Box, Hidden, Card, CardActionArea, CardMedia, CardContent, ClickAwayListener, AppBar, Toolbar, Typography, makeStyles, useTheme, Paper } from '@material-ui/core';
import cx from 'clsx';
// import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
// import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

import Page from 'react-page-loading'

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderRounded from '@material-ui/icons/FavoriteBorderRounded';
import Share from '@material-ui/icons/Share';
// import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
// import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
// import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
// import TextInfoContent from '@mui-treasury/components/content/textInfo';
import NavigationAll from '../../../components/app/Menu/NavigationAll';

const newsList = [
  { heading: '1' },
  { heading: '2' },
  { heading: '3' },
]


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: theme.main.palette.main.background,
    flexGrow: 1,
    //width: '100vh',
    // [theme.breakpoints.up('xs')]: {
    //   marginLeft: '90px',
    //   paddingTop: '60px',
    // },
    // [theme.breakpoints.only('xs')]: {
    //   marginLeft: '10px',
    //   marginTop: '10px',
    // },
  },
  content: {
    padding: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },

}));

const News = () => {

  const classes = useStyles();
  const theme = useTheme();
  // const mediaStyles = useSlopeCardMediaStyles();
  // const shadowStyles = useSoftRiseShadowStyles();
  // const textCardContentStyles = useN01TextInfoContentStyles();

  return (
    <>
      <Head>
        <title>Ξ Новости</title>
      </Head>
      <NavigationAll>
        <div className={classes.root}>
          {/* <Page loader={"bar"} color={"#4452b8"} size={16}> */}
          {/* <Box className={classes.root}> */}
          {/* {newsList.map((news) => (
              <Card className={cx(classes.root, shadowStyles.root)}>
                <CardMedia
                  classes={mediaStyles}
                  image={
                    'https://images.unsplash.com/photo-1517147177326-b37599372b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2229&q=80'
                  }
                />
                <Avatar className={classes.avatar} src={'https://i.pravatar.cc/300'} />
                <CardContent className={classes.content}>
                  <TextInfoContent
                    classes={textCardContentStyles}
                    heading={news.heading}
                    body={
                      'Snow storm coming in Sommaroy island, Arctic Norway. This is something that you definitely wanna see in your life.'
                    }
                  />
                </CardContent>
                <Box px={2} pb={2} mt={-1}>
                  <IconButton>
                    <Share />
                  </IconButton>
                  <IconButton>
                    <FavoriteBorderRounded />
                  </IconButton>
                </Box>
              </Card>
            ))} */}
          {/* </Box>
        </Page> */}
        </div>
      </NavigationAll>
    </>
  )
}

export default News;