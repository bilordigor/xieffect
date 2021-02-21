import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import Page from 'react-page-loading'
import { Grid, TextField, InputLabel, InputAdornment, IconButton, FormControl, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button, Paper } from '@material-ui/core';
import { Link as LinkUI } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import Background from '../../components/app/help/background/background'
import clsx from 'clsx'
import { inject, observer } from 'mobx-react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import EmailIcon from '@material-ui/icons/Email'



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
        zIndex: 999,
        position: 'absolute',
        cursor: 'pointer',
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
    },
    tittle: {
        zIndex: 999,
        cursor: 'pointer',
        fontSize: 32,
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
        fontSize: 32,
    },
    typographyMainly: {
        cursor: "default",
        fontSize: 14,
        zIndex: 999,
        color: 'rgb(142,146,151)',
    },
    gridPaper: {
        zIndex: 999,
        margin: 8,
        marginTop: 24,
    },
    inputLabel: {
        zIndex: 999,
        color: 'rgb(142,146,151)',
    },
    gridTextField: {
        zIndex: 999,
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 32,
        width: '100%',
    },
    textField: {
        zIndex: 999,
        width: '100%',
        backgroundColor: 'rgb(49,51,57)',
    },
    textFieldTypography: {
        zIndex: 999,
        marginTop: -4,
        color: 'rgb(142,146,151)',
    },
    icons: {
        zIndex: 999,
        color: 'rgb(142,146,151)',
    },
    gridForgotPassword: {
        zIndex: 999,
        marginTop: 4,
        paddingLeft: 20,
        paddingRight: 20,

    },
    forgotPassword: {
        zIndex: 999,
        color: 'rgb(142,146,151)',
    },
    gridEnterButtom: {
        zIndex: 999,
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 32,

        width: '100%',
    },
    enterButtom: {
        zIndex: 999,
        width: '100%',
    },
    gridForgotRegistration: {
        zIndex: 999,
        marginTop: 4,
        paddingLeft: 20,
        paddingBottom: 20,

    },
    forgotRegistration: {
        zIndex: 999,
        color: 'rgb(142,146,151)',
    },
    OutlinedInput: {
        zIndex: 999,
        color: theme.main.palette.content.text,
    },
    ErrorLabel: {
        zIndex: 999,
        fontSize: 16,
        color: theme.main.palette.help.red,
    },
    AboutLabel: {
        zIndex: 999,
        fontSize: 12,
        color: theme.main.palette.content.border,
    }
}));



const Registration = inject('store')(observer((props) => {
    const classes = useStyles();
    const handleChange = (prop) => (event) => {
        props.store.setRegistrationValues(prop, event.target.value)
        //setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        props.store.setRegistrationValues("showPassword", !props.store.registrationValues.showPassword)
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

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }

    const onRegistrationButtonClick = () => {
        props.store.setRegistrationValuesFalse()
        //console.log(props.store.registrationValues)
        let sym = '1234567890qwertyuiopasdfghjklzxcvbnm_'
        //console.log(values.email.length < 5)
        if (!props.store.registrationValues.email.includes('@') || !props.store.registrationValues.email.includes('.') || props.store.registrationValues.email.length < 5) {
            props.store.setRegistrationValues("errorEmail", true)
            //console.log('email error')
        }
        //console.log(props.store.registrationValues.password.length)
        if (props.store.registrationValues.password.length < 6) {
            props.store.setRegistrationValues("errorPasswordLength", true)
            //console.log('length error')
        }
        for (let i = 0; i < props.store.registrationValues.password.length; i++) {
            if (sym.includes(props.store.registrationValues.password[i].toLowerCase())) continue
            else {
                props.store.setRegistrationValues("errorSymbols", true)
                //console.log('sym error')
                break
            }
        }
        if (!props.store.registrationValues.errorPasswordLength && !props.store.registrationValues.errorSymbols && !props.store.registrationValues.errorEmail) {

            props.store.goToHex()

            // postData('https://example.com/answer', { email: props.store.registrationValues.email, password:  })
            // .then((data) => {
            //     console.log(data); // JSON data parsed by `response.json()` call
            // });

            const router = Router
            router.push('/registration/step/email')
        }
        //console.log(props.store.registrationValues)
    }

    const clickRegistartionButton = () => {
        props.store.setRegistrationValuesFalse()
        //console.log(props.store.registrationValues)
        let sym = '1234567890qwertyuiopasdfghjklzxcvbnm_'
        //console.log(values.email.length < 5)
        if (!props.store.registrationValues.email.includes('@') || !props.store.registrationValues.email.includes('.') || props.store.registrationValues.email.length < 5) {
            props.store.setRegistrationValues("errorEmail", true)
            //console.log('email error')
        }
        //console.log(props.store.registrationValues.password.length)
        if (props.store.registrationValues.password.length < 6) {
            props.store.setRegistrationValues("errorPasswordLength", true)
            //console.log('length error')
        }
        for (let i = 0; i < props.store.registrationValues.password.length; i++) {
            if (sym.includes(props.store.registrationValues.password[i].toLowerCase())) continue
            else {
                props.store.setRegistrationValues("errorSymbols", true)
                //console.log('sym error')
                break
            }
        }
        if (!props.store.registrationValues.errorPasswordLength && !props.store.registrationValues.errorSymbols && !props.store.registrationValues.errorEmail) {

            props.store.goToHex()

            props.store.postData(`${props.store.url}/reg/${props.store.registrationValues.emailHash}`, {}) ///registration/newemail
                .then((data) => {
                    if (data.a === true) { //true
                        const router = Router
                        router.push('/registration/step/email')
                    } else if (data.a === false) { //false
                        props.store.setRegistrationValues("emailAlreadyUsed", true)
                    }
                });

        }
    }

    return (
        <>
            <Head>
                <title>Ξ Регистрация</title>
            </Head>
            <div className={classes.root}>
                <Background src="/wallpapers/hp1.jpg" />
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
                                    <Typography className={classes.typographyMain}> Регистрация </Typography>
                                    <Typography className={classes.typographyMainly}> Начните свой путь в цифровом образовании! </Typography>
                                </Grid>
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                    <FormControl className={classes.textField} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Адрес Электронной почты</Typography></InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type='text'
                                            value={props.store.registrationValues.email}
                                            onChange={handleChange('email')}
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
                                {props.store.registrationValues.errorEmail && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Некорректное имя почты </Typography>
                                </Grid>}
                                {props.store.registrationValues.emailAlreadyUsed && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Данный адрес электронной почты уже используется </Typography>
                                </Grid>}
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                    <FormControl className={classes.textField} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Пароль</Typography> </InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type={props.store.registrationValues.showPassword ? 'text' : 'password'}
                                            value={props.store.registrationValues.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {props.store.registrationValues.showPassword ? <Visibility className={classes.icons} /> : <VisibilityOff className={classes.icons} />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            labelWidth={70}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.AboutLabel}> Минимальная длина: 6 символов. Используйте латинские буквы, цифры и знак нижнего подчёркивания.</Typography>
                                </Grid>
                                {props.store.registrationValues.errorPasswordLength && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Недопустим пароль менее 6 символов </Typography>
                                </Grid>}
                                {props.store.registrationValues.errorSymbols && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Недопустимые символы в пароле </Typography>
                                </Grid>}
                                {/* { values.error && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                <Typography className={classes.ErrorLabel}> Неправильное имя пользователя или пароль </Typography>
                            </Grid>}  */}
                                {/* <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                <LinkUI className={classes.forgotPassword} href="#" onClick={preventDefault}>
                                    Забыли пароль?
                                </LinkUI>
                            </Grid> */}
                                <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridEnterButtom}>
                                    {/* <Link href="/registration/step/email"> */}
                                    <Button onClick={clickRegistartionButton} variant="contained" color="primary" className={classes.enterButtom}>
                                        Регистрация
                                    </Button>
                                    {/* </Link > */}
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
            </div>
        </>
    )
}))

export default Registration;