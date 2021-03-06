import * as React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { CircularProgress, FormControl, InputLabel, IconButton, InputAdornment, Tooltip, Divider, OutlinedInput, Paper, Grid, AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Box, Container, Fab, Zoom, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import HelpIcon from '@material-ui/icons/Help';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { inject, observer } from 'mobx-react'
import Navigation from '../../components/main/Menu/Navigation';
import Background from '../../components/app/help/background/background';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        zIndex: '-1',
        overflowY: 'auto',
        overflowX: 'hidden',
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
        textAlign: 'center',
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
    popper: {
        zIndex: 1100,
    },
    paper: {
        zIndex: 1100,
    },
    gridCheckbox: {
        marginTop: 4,
        paddingLeft: 16,
        paddingRight: 32,
        width: '100%',
    },
    checkboxTypography: {
        paddingTop: 2,
        color: 'rgb(142,146,151)',
    },
    tooltip: {

    },
    tooltipTypography: {
        paddingTop: 2,
        fontSize: 16,
    },
    iconHelp: {
        marginTop: 8,
        marginLeft: -10,
        color: 'rgb(142,146,151)',
    },
    Checkbox: {
        color: theme.main.palette.content.border,
    },
    OutlinedInput: {
        color: theme.main.palette.content.text,
    },
    ErrorLabel: {
        zIndex: 999,
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
    gridTypography: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    typographyMainlySuccess: {
        textAlign: 'center',
        cursor: "default",
        zIndex: 999,
        fontSize: 18,
        color: 'rgb(142,146,151)',
    }
}));


const PasswordReset = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();
    const router = useRouter()
    const { id } = router.query

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

    // const clickRegistartionButton = () => {
    //     props.store.setRegistrationValuesFalse()
    //     //console.log(props.store.registrationValues)
    //     let sym = '1234567890qwertyuiopasdfghjklzxcvbnm_'
    //     //console.log(values.email.length < 5)
    //     if (!props.store.registrationValues.email.includes('@') || !props.store.registrationValues.email.includes('.') || props.store.registrationValues.email.length < 5) {
    //         props.store.setRegistrationValues("errorEmail", true)
    //         //console.log('email error')
    //     }
    //     //console.log(props.store.registrationValues.password.length)
    //     if (props.store.registrationValues.password.length < 6) {
    //         props.store.setRegistrationValues("errorPasswordLength", true)
    //         //console.log('length error')
    //     }
    //     for (let i = 0; i < props.store.registrationValues.password.length; i++) {
    //         if (sym.includes(props.store.registrationValues.password[i].toLowerCase())) continue
    //         else {
    //             props.store.setRegistrationValues("errorSymbols", true)
    //             //console.log('sym error')
    //             break
    //         }
    //     }
    //     if (!props.store.registrationValues.errorPasswordLength && !props.store.registrationValues.errorSymbols && !props.store.registrationValues.errorEmail) {

    //         props.store.goToHex()

    //         props.store.postData(`${props.store.url}/reg/${props.store.registrationValues.emailHash}/`, { "email": 1 }) ///registration/newemail
    //             .then((data) => {
    //                 if (data.a === true) { //true
    //                     const router = Router
    //                     router.push('/registration/step/email')
    //                     setTimeout( () => props.store.setRegistrationValuesClear(), 1000)
    //                 } else if (data.a === false) { //false
    //                     props.store.setRegistrationValues("emailAlreadyUsed", true)
    //                 }
    //             });

    //     }
    // }

    const acceptButtonClicked = () => {
        props.store.setRegistrationValuesFalse()
        //console.log(props.store.registrationValues)
        let sym = '1234567890qwertyuiopasdfghjklzxcvbnm_'
        if (props.store.registrationValues.passwordReset.length < 6) {
            props.store.setRegistrationValues("errorPasswordLengthReset", true)
            //console.log('length error')
        }
        for (let i = 0; i < props.store.registrationValues.passwordReset.length; i++) {
            if (sym.includes(props.store.registrationValues.passwordReset[i].toLowerCase())) continue
            else {
                props.store.setRegistrationValues("errorSymbolsReset", true)
                //console.log('sym error')
                break
            }
        }
        if (!props.store.registrationValues.errorSymbolsReset && !props.store.registrationValues.errorPasswordLengthReset) {
            props.store.postData(`${props.store.url}/password-reset/confirm/`, { "code": id, "password": props.store.registrationValues.passwordReset, })
                .then((data) => {
                    //console.log(data)
                    if (data != undefined) {
                        if (data.a === true) { //"Success"
                            props.store.setRegistrationValues("emailResetOkay", true)
                        }
                    }
                })
        }
    }

    return (
        <>
            <Head>
                <title>Ξ Регистрация</title>
            </Head>
            <div className={classes.root}>
                <Background src="/wallpapers/hp3.jpg" />
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
                                    <Typography variant='h5' className={classes.typographyMain}> Восстановление пароля </Typography>
                                    <Typography variant='h7' className={classes.typographyMainly}> Придумайте новый пароль</Typography>
                                    {/* <Typography variant='h7' className={classes.typographyMainly}> Мы отправим вам письмо со ссылкой на страницу создания нового пароля. </Typography> */}

                                </Grid>
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                    <FormControl className={classes.textField} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Новый пароль</Typography> </InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type={props.store.registrationValues.showPassword ? 'text' : 'password'}
                                            value={props.store.registrationValues.passwordReset}
                                            onChange={handleChange('passwordReset')}
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
                                            labelWidth={210}

                                        />
                                    </FormControl>
                                </Grid>
                                {/* {props.store.registrationValues.isNickName && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridError}>
                                    <Typography className={classes.errorSymNickName}> Недопустимые символы! </Typography>
                                </Grid>} */}
                                {props.store.registrationValues.errorSymbolsReset && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Недопустимые символы!</Typography>
                                </Grid>}
                                {props.store.registrationValues.errorPasswordLengthReset && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Минимальная длинна пароля - 6 символов!</Typography>
                                </Grid>}
                                {!props.store.registrationValues.emailResetOkay && <>
                                    <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridEnterButtom}>
                                        <Button onClick={acceptButtonClicked} variant="contained" color="primary" className={classes.enterButtom}>
                                            Сохранить новый пароль
                                    </Button>
                                    </Grid>
                                </>}
                                {props.store.registrationValues.emailResetOkay && <>
                                    <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridTypography}>
                                        <Typography className={classes.typographyMainlySuccess}> Пароль успешно сохранён. С этой страницы можно безопасно уходить  </Typography>
                                    </Grid>
                                </>}
                            </Grid>

                        </Paper>
                    </Grid>
                    <Grid item container>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}))

export default PasswordReset