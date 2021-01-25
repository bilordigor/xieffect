import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import Page from 'react-page-loading'
import { Grid, TextField, InputLabel, InputAdornment, IconButton, FormControl, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button, Paper } from '@material-ui/core';
import { Link as LinkUI } from '@material-ui/core'

import MainSwipeBar from '../../components/app/ProfilePage/MainSwipeBar'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../../components/app/help/background/background'
import clsx from 'clsx'
import { inject, observer } from 'mobx-react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import EmailIcon from '@material-ui/icons/Email'



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'auto',
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
        zIndex: 999,
        color: 'rgb(255,255,255)',
        fontWeight: 'bold',
    },
    typographyMainly: {
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
}));



const Registration = inject('store')(observer((props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const gotoAuth = (event) => {
        const router = Router
        router.push('/login')
        event.preventDefault();
    }

    const wallpapers = () => {
        let count = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1))) + Math.ceil(1)
        return "/wallpapers/hp" + count.toString() + ".jpg"
    }

    return (
        <>
            <Head>
                <title>Ξ Регистрация</title>
            </Head>
            <Background src="/wallpapers/hp1.jpg" />
            <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.root}>
                <Grid className={classes.gridTittle}>
                    <Link href="/">
                        <Typography variant="h3" className={classes.tittle}> Ξ Effect </Typography>
                    </Link >
                </Grid>
                <Grid item>
                    <Paper variant="outlined" className={classes.Paper}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.gridPaper}>
                            <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridTypography}>
                                <Typography variant='h5' className={classes.typographyMain}> Регистрация </Typography>
                                <Typography variant='h7' className={classes.typographyMainly}> Начните свой путь в цифровом образовании! </Typography>
                            </Grid>
                            <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                <FormControl className={classes.textField} variant="outlined">
                                    <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Адрес Электронной почты</Typography></InputLabel>
                                    <OutlinedInput
                                        
                                        type='text'
                                        value={values.email}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    // onClick={handleClickShowPassword}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    <EmailIcon className={classes.icons} />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={210}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                <FormControl className={classes.textField} variant="outlined">
                                    <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Пароль</Typography> </InputLabel>
                                    <OutlinedInput
                                        
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility className={classes.icons} /> : <VisibilityOff className={classes.icons} />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>
                            </Grid>
                            {/* <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                <LinkUI className={classes.forgotPassword} href="#" onClick={preventDefault}>
                                    Забыли пароль?
                                </LinkUI>
                            </Grid> */}
                            <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridEnterButtom}>
                                <Link href="/registration/step/email">
                                    <Button onClick={props.store.setReadyAuth} variant="contained" color="primary" className={classes.enterButtom}>
                                        Регистрация
                                    </Button>
                                </Link >
                            </Grid>
                            <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotRegistration}>

                                <LinkUI className={classes.forgotRegistration} href="#" onClick={gotoAuth}>
                                    Уже есть учётная запись? Войти!
                                </LinkUI>

                            </Grid>






                        </Grid>

                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}))

export default Registration;