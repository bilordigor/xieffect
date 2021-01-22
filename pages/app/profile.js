import React from 'react'
import { Typography, Grid, useTheme, Divider, makeStyles, Paper } from '@material-ui/core'
import Head from 'next/head'
import Page from 'react-page-loading'
import MainSwipeBar from '../../components/app/ProfilePage/MainSwipeBar'
import NavigationAll from '../../components/app/Menu/NavigationAll'

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        minHeight: '100vh',
        overFlow: 'hidden'
    },
}));

export default function Communities() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Head>
                <title>Ξ Профиль</title>
            </Head>
            <NavigationAll>
                <Grid className={classes.main}>
                    {/* <Page loader={"bar"} color={"#4452b8"} size={16}> */}
                    <MainSwipeBar />
                    {/* </Page> */}
                </Grid>
            </NavigationAll>
        </>
    )
}