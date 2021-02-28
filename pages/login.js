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

const Login = inject('store')(observer((props) => {
    const classes = useStyles();
    const handleChange = (prop) => (event) => {
        props.store.setLoginValues(prop, event.target.value)
        //setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        props.store.setLoginValues("showPassword", !props.store.loginValues.showPassword)
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

    // React.useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data => console.log(data))

    //     fetch('https://jsonplaceholder.typicode.com/users', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             username: 'Elon Mask',
    //             email: 'elonmusk@yandex.ru',
    //             userId: 1
    //         }),
    //         headers: { "Content-Type": "application/json; charset=utf-8" }
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }, [])

    const clickEnterButton = () => {
        if (props.store.loginValues.email.length > 0 && props.store.loginValues.password.length > 0) {
            props.store.setLoginValuesFalse()
            props.store.goToHexLogin()
            props.store.postData(`${props.store.url}/auth/`, { "email": props.store.loginValues.email, "password": props.store.loginValues.passwordHash }) // postData /auth
                .then((data) => {
                    console.log(data)
                    if (data.a == "Success") { //userId //"Success"
                        props.store.setLoginValuesFalse()
                        props.store.setLoginValues("loginSuccess", true)
                        const router = Router
                        router.push('/app')
                    } else if (data.a == "User doesn't exist") { //"User doesn't exist"
                        props.store.setLoginValues("errorEmail", true)
                    } else if (data.a == "Wrong password") { //
                        props.store.setLoginValues("errorPassword", true)
                    }
                });
        }
        else {
            props.store.setLoginValues("error", true)
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
                                            value={props.store.loginValues.email}
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
                                {props.store.loginValues.errorEmail && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Пользователя с таким именем почты не существует </Typography>
                                </Grid>}
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                    <FormControl className={classes.textField} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Пароль</Typography> </InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type={props.store.loginValues.showPassword ? 'text' : 'password'}
                                            value={props.store.loginValues.password}
                                            onChange={handleChange('password')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {props.store.loginValues.showPassword ? <Visibility className={classes.icons} /> : <VisibilityOff className={classes.icons} />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            labelWidth={70}
                                        />
                                    </FormControl>
                                </Grid>
                                {props.store.loginValues.errorPassword && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Неправильный пароль </Typography>
                                </Grid>}
                                {props.store.loginValues.error && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Нужно ввести адрес почты и пароль! </Typography>
                                </Grid>}
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <LinkUI className={classes.forgotPassword} href="#" onClick={gotoForgotPassword}>
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