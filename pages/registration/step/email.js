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
        backgroundColor: '#2b2b2b',
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        zIndex: '-1',
    },
    main: {
        zIndex: 999,
    },
    gridTittle: {
        position: 'absolute',
        top: 16,
        [theme.breakpoints.up('lg')]: {
            left: 64,
        },
        [theme.breakpoints.only('lg')]: {
            left: 32,
        },
        [theme.breakpoints.down('lg')]: {
            left: 16,
        },
        zIndex: 999,
    },
    tittle: {
        cursor: 'pointer',
        fontSize: 32,
        zIndex: 999,
        color: 'white',
    },
    gridUnderPaper: {
        paddingTop: 150,
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
}));



const EmailReg = inject('store')(observer((props) => {
    const classes = useStyles();

    React.useEffect(() => {
        props.store.setRegistrationValuesClear()
    }, [])

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
        props.store.setRegistrationValuesFalse()
        props.store.getData(`${props.store.url}/reg/${props.store.registrationValues.emailHash}`)
            .then((data) => {
                if (data.a === true) {
                    const router = Router
                    router.push('/registration/step/user')
                } else if (data.a === false) {
                    props.store.setRegistrationValues("isCheckedEmail", false)
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
                <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.main}>
                    <Grid item className={classes.gridTittle}>
                        <Link href="/">
                            <Typography variant="h3" className={classes.tittle}> Ξ Effect </Typography>
                        </Link >
                    </Grid>
                    <Grid item className={classes.gridUnderPaper}>
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
                                {props.store.registrationValues.isCheckedEmail && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridError}>
                                    <Typography className={classes.ErrorLabel}> Подтвердите вашу почту! Перейдите по ссылке в письме, которое мы отправили вам на почту.</Typography>
                                </Grid>}
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotRegistration}>
                                    <LinkUI className={classes.forgotRegistration} href="#" onClick={gotoAuth}>
                                        Уже есть учётная запись? Войти!
                                </LinkUI>
                                </Grid>
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}))

export default EmailReg;