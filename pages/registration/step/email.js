import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import Page from 'react-page-loading'
import { Grid, TextField, InputLabel, InputAdornment, IconButton, FormControl, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button, Paper } from '@material-ui/core';
import { Link as LinkUI } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Background from '../../../components/app/help/background/background'
import clsx from 'clsx'
import { inject, observer } from 'mobx-react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        zIndex: '-1',
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    main: {
        zIndex: 999,
    },
    gridTittle: {
        paddingTop: 16,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 64,
        },
        [theme.breakpoints.only('lg')]: {
            paddingLeft: 32,
        },
        [theme.breakpoints.down('lg')]: {
            paddingLeft: 16,
        },
        zIndex: 999,
        marginRight: 'auto',
    },
    tittle: {
        fontSize: 32,
        color: theme.main.palette.header.text,
        cursor: 'pointer',
        zIndex: 999,
    },
    gridUnderPaper: {
        zIndex: 999,
    },
    Paper: {
        zIndex: 999,
        borderRadius: 4,
        width: 500,
        [theme.breakpoints.only('xs')]: {
            width: 400,
        },
        height: 'auto',
        backgroundColor: 'rgb(54,57,63)',
        transition: '1s',
        '&:hover': {
            // background: 'linear-gradient(-90deg, rgb(80,151,136, 0.5), rgb(4,40,75, 0.5))',
            backgroundColor: 'rgb(54,57,63, 0.85)',
        },

    },
    typographyMain: {
        cursor: "default",
        zIndex: 999,
        color: 'rgb(255,255,255)',
        fontWeight: 'bold',
    },
    typographyMainly: {
        cursor: "default",
        zIndex: 999,
        color: 'rgb(142,146,151)',
    },
    gridPaper: {
        margin: 8,
        marginTop: 24,
    },
    inputLabel: {
        color: 'rgb(142,146,151)',
    },
    gridTextField: {
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 32,
        width: '100%',
    },
    textField: {
        width: '100%',
        backgroundColor: 'rgb(49,51,57)',
    },
    textFieldTypography: {
        marginTop: -4,
        color: 'rgb(142,146,151)',
    },
    icons: {
        color: 'rgb(142,146,151)',
    },
    gridForgotPassword: {
        marginTop: 4,
        paddingLeft: 20,

    },
    gridError: {
        marginTop: 4,
        paddingLeft: 20,
    },
    forgotPassword: {
        color: 'rgb(142,146,151)',
    },
    gridEnterButtom: {
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 32,

        width: '100%',
    },
    enterButtom: {
        width: '100%',
    },
    gridForgotRegistration: {
        marginTop: 4,
        paddingLeft: 20,
        paddingBottom: 20,

    },
    forgotRegistration: {
        color: 'rgb(142,146,151)',
    },
    ErrorLabel: {
        fontSize: 16,
        color: theme.main.palette.help.red,
    },
    gridForgotPassword: {
        zIndex: 999,
        marginTop: 4,
        paddingLeft: 20,
        paddingRight: 20,

    },

    gridroot: {
        width: '100vw',
        minHeight: '100vh',
    },
}));



const EmailReg = inject('store')(observer(({ store }) => {
    const classes = useStyles();



    const gotoAuth = (event) => {
        const router = Router
        router.push('/auth')
        event.preventDefault();
    }

    const wallpapers = () => {
        let count = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1))) + Math.ceil(1)
        return "/wallpapers/hp" + count.toString() + ".jpg"
    }

    const clickedNext = () => {
        store.setRegistrationValuesFalse()
        store.getData(`${store.url}/reg/${store.registrationValues.emailHash}/`)
            .then((data) => {
                if (data != undefined) {
                    if (data.a === true) {
                        const router = Router
                        router.push('/registration/step/user')
                    } else if (data.a === false) {
                        store.setRegistrationValuesUI("isCheckedEmail", false)
                    }
                } else {
                    store.setRegistrationValuesUI("errorServerEmail", true)
                }
            });



    }

    return (
        <>
            <Head>
                <title>Ξ Регистрация</title>
            </Head>
            <div className={classes.root}>
                <Background src="/wallpapers/hp2.jpg" />
                <Grid
                    className={classes.gridroot}
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between">
                    <Grid className={classes.gridTittle} item container justifyContent="flex-start" direction="column" alignItems="flex-start">
                        <Link href="/">
                            <Typography className={classes.tittle}> Ξ Effect </Typography>
                        </Link>
                    </Grid>
                    <Grid className={classes.gridUnderPaper} item container direction="column" alignItems="center">
                        <Paper variant="outlined" className={classes.Paper}>
                            <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.gridPaper}>
                                <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridTypography}>
                                    <Typography variant='h5' className={classes.typographyMain}> Почта </Typography>
                                    <Typography variant='h7' className={classes.typographyMainly}> Мы отправили письмо вам на почту </Typography>
                                    <Typography variant='h7' className={classes.typographyMainly}> Откройте письмо </Typography>
                                    <Typography variant='h7' className={classes.typographyMainly}> Перейдите по ссылке, прикреплённой в письме </Typography>
                                    <Typography variant='h7' className={classes.typographyMainly}> Произойдёт автоматическая авторизация </Typography>
                                </Grid>
                                <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridEnterButtom}>
                                    {/* <Link href="/registration/step/user"> */}
                                    <Button onClick={clickedNext} variant="contained" color="primary" className={classes.enterButtom}>
                                        Далее
                                    </Button>
                                    {/* </Link > */}
                                </Grid>
                                {store.registrationValuesUI.isCheckedEmail && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridError}>
                                    <Typography className={classes.ErrorLabel}> Подтвердите вашу почту! Перейдите по ссылке в письме, которое мы отправили вам на почту.</Typography>
                                </Grid>}
                                {store.registrationValuesUI.errorServerEmail && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridError}>
                                    <Typography className={classes.ErrorLabel}> Ошибка сервера :( </Typography>
                                </Grid>}
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotRegistration}>
                                    <LinkUI className={classes.forgotRegistration} href="#" onClick={gotoAuth}>
                                        Уже есть учётная запись? Войти!
                                </LinkUI>
                                </Grid>
                            </Grid>

                        </Paper>
                    </Grid>
                    <Grid item container>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}))

export default EmailReg;