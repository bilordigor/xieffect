import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router';
import { InputBase, Grid, TextField, InputLabel, InputAdornment, IconButton, FormControl, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button, Paper } from '@material-ui/core';
import { Link as LinkUI } from '@material-ui/core';
import React from 'react'
import Background from '../components/app/help/background/background'
import clsx from 'clsx'
import { inject, observer } from 'mobx-react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import { withStyles, makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
        //backgroundColor: '#2b2b2b',
        //position: 'absolute',
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
        //paddingTop: 150,
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
        fontSize: 16,
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
    OutlinedInput: {
        zIndex: 999,
        color: theme.main.palette.content.text,
    },
    textFieldTypography: {
        zIndex: 999,
        marginTop: -4,
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
    icons: {
        zIndex: 999,
        color: 'rgb(142,146,151)',
    },
    gridForgotPassword: {
        zIndex: 999,
        marginTop: 4,
        paddingLeft: 20,

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
        cursor: "pointer",
        fontSize: 16,
    },
    ErrorLabel: {
        zIndex: 999,
        fontSize: 16,
        color: theme.main.palette.help.red,
    },
    gridroot: {
        width: '100vw',
        minHeight: '100vh',
    },
}));

const Login = inject('store')(observer(({ store }) => {
    const classes = useStyles();
    const handleChange = (prop) => (event) => {
        store.setLoginValues(prop, event.target.value)
        //setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        store.setLoginValuesUI("showPassword", !store.loginValuesUI.showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const gotoRegistration = (event) => {
        event.preventDefault();
        const router = Router
        router.push('/registration')

    }

    const gotoForgotPassword = (event) => {
        event.preventDefault();
        const router = Router
        router.push('/registration')
    }

    React.useEffect(() => {

    }, [])

    const clickEnterButton = () => {
        //console.log("clicked")
        store.setLoginValuesFalse()
        if (store.loginValues.email.length > 0 && store.loginValues.password.length > 0) {

            store.goToHexLogin()
            store.postData(`${store.url}/auth/`, { "email": store.loginValues.email, "password": store.loginValues.passwordHash }) // postData /auth
                .then((data) => {
                    if (data != undefined) {
                        if (data.a == "Success") { //userId //"Success"
                            store.setLoginValuesFalse()
                            store.setLoginValuesUI("loginSuccess", true)
                            const router = Router
                            router.push('/app')
                        } else if (data.a == "User doesn't exist") { //"User doesn't exist"
                            store.setLoginValuesUI("errorEmail", true)
                        } else if (data.a == "Wrong password") { //
                            store.setLoginValuesUI("errorPassword", true)
                        }
                    } else {
                        store.setLoginValuesUI("errorServer", true)
                    }
                });
        }
        else {
            store.setLoginValuesUI("error", true)
        }
    }

    return (
        <>
            <Head>
                <title>Ξ Авторизация</title>
            </Head>
            <div className={classes.root}>
                <Background src="/wallpapers/hp4.jpg" />
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
                                    <Typography className={classes.typographyMain}> Добро пожаловать! </Typography>
                                    <Typography className={classes.typographyMainly}> Вас привела жажда знаний, не так ли? </Typography>
                                    {/* {isFirstVisit && <Typography variant='h5' className={classes.typographyMain}> Добро пожаловать! </Typography>}
                                {isFirstVisit && <Typography variant='h6' className={classes.typographyMainly}> Вас привела жажда знаний, не так ли? </Typography>}
                                {!isFirstVisit && <Typography variant='h5' className={classes.typographyMain}> С возвращением! </Typography>}
                                {!isFirstVisit && <Typography variant='h6' className={classes.typographyMainly}> Мы так рады видеть вас снова! </Typography>} */}
                                </Grid>
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                    <FormControl className={classes.textField} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Адрес Электронной почты </Typography></InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type='text'
                                            value={store.loginValues.email}
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
                                {store.loginValuesUI.errorEmail && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Пользователя с таким адресом почты не существует </Typography>
                                </Grid>}
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                    <FormControl className={classes.textField} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Пароль</Typography> </InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type={store.loginValuesUI.showPassword ? 'text' : 'password'}
                                            value={store.loginValues.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {store.loginValuesUI.showPassword ? <Visibility className={classes.icons} /> : <VisibilityOff className={classes.icons} />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            labelWidth={70}
                                        />
                                    </FormControl>
                                </Grid>
                                {store.loginValuesUI.errorPassword && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Неправильный пароль </Typography>
                                </Grid>}
                                {store.loginValuesUI.error && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Нужно ввести адрес почты и пароль! </Typography>
                                </Grid>}
                                {store.loginValuesUI.errorServer && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Ошибка сервера :( </Typography>
                                </Grid>}
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <LinkUI className={classes.forgotPassword} href="/resetpassword/email">
                                        Забыли пароль?
                                </LinkUI>
                                </Grid>
                                <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridEnterButtom}>
                                    <Button onClick={clickEnterButton} variant="contained" color="primary" className={classes.enterButtom}>
                                        Вход
                                </Button>
                                </Grid>
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotRegistration}>

                                    <LinkUI className={classes.forgotRegistration} onClick={gotoRegistration}>
                                        Нужна учётная запись? Зарегистрироваться!
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

export default Login