import Head from 'next/head'
import Link from 'next/link'
import * as React from 'react';
import { Divider, Paper, Grid, AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container, Fab, Zoom, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'

import { inject, observer } from 'mobx-react'
import Navigation from '../../components/main/Menu/Navigation';
import Background from '../../components/app/help/background/background';

const useStyles = makeStyles((theme) => ({
    root: {
        //boxSizing: 'border-box',
        // position: 'absolute',
        backgroundColor: theme.main.palette.content.background,
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        zIndex: 90,
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
    gridDivider: {
        marginTop: '80vh',
        //marginBottom: '100px',
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
}));


const Download = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    const wallpapers = () => {
        let count = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1))) + Math.ceil(1)
        return "/wallpapers/hp" + count.toString() + ".jpg"
    }

    return (
        <>
            <Head>
                <title>
                    Ξ Загрузка
                </title>
            </Head>
            <div className={classes.root}>
                <Background src={wallpapers()} />
                <Grid container direction="column" justifyContent="flex-start" alignItems="center" className={classes.root}>
                    <Navigation />
                    <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.gridLabelMain}>
                        <Typography className={classes.labelMain}> Загрузка </Typography>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.gridLabelSecondary}>
                        <Typography className={classes.labelSecondary}> Скоро Ξ Effect будет доступен на множестве платформ: Windows, MacOS, Linux, Android, IOS. А пока можно воспользоваться браузерной версией.</Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.gridDivider}>
                    <Divider className={classes.divider} />
                </Grid>
            </div>
        </>
    );
}))

export default Download