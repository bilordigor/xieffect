import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router';
import { InputBase, Grid, TextField, InputLabel, InputAdornment, IconButton, FormControl, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button, Paper } from '@material-ui/core';
import { Link as LinkUI } from '@material-ui/core';
import React from 'react'
import Background from './background'
import clsx from 'clsx'
import { inject, observer } from 'mobx-react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import { withStyles, makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        //position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'auto',
        backgroundColor: '#2c2c2c',
        zIndex: 90,

    },
    r: {
        zIndex: 9999,
    }
}));

const LoadingPage = inject('store')(observer((props) => {
    const classes = useStyles();
    React.useEffect(() => {

    }, [])


    return (
        <>
            <Head>
                <title>Ξ Effect</title>
            </Head>
            <div className={classes.r}>
                <Background src="/wallpapers/hp4.jpg" />
                <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.root}>
                    aodhbf
            </Grid>
            </div>

        </>
    )
}))

export default LoadingPage