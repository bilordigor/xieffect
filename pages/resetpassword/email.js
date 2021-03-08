import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import Page from 'react-page-loading'
import { Grid, TextField, Tooltip, Popper, Grow, MenuList, MenuItem, InputLabel, Checkbox, ButtonGroup, InputAdornment, IconButton, FormControl, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button, Paper } from '@material-ui/core';
import { Link as LinkUI } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../components/app/help/background/background'
import clsx from 'clsx'
import { inject, observer } from 'mobx-react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HelpIcon from '@material-ui/icons/Help';
const options = ['Участник', 'Ученик', 'Преподаватель', 'Автор', 'Родитель'];


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



const PassResetEmail = inject('store')(observer((props) => {
    const classes = useStyles();

    const handleChange = (name) => (event) => {
        props.store.setRegistrationValues(name, event.target.value)
    };

    const gotoAuth = (event) => {
        const router = Router
        router.push('/login')
        event.preventDefault();
    }


    //SelectorButton

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {
        //console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        props.store.setUserDataValues("userRole", options[index])
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const wallpapers = () => {
        let count = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1))) + Math.ceil(1)
        return "/wallpapers/hp" + count.toString() + ".jpg"
    }

    const clickRegistartionButton = () => {
        props.store.setUserRegValuesFalse()
        if (!props.store.registrationValues.emailReset.includes('@') || !props.store.registrationValues.emailReset.includes('.') || props.store.registrationValues.emailReset.length < 5) {
            props.store.setRegistrationValuesUI("errorEmailReset", true)
        }
        //if (!props.store.registrationValues.isFirstName && !props.store.registrationValues.isSecondName && !props.store.registrationValues.isNickName && !props.store.registrationValues.errorSymNickName && !props.store.registrationValues.errorSymSecondName && !props.store.registrationValues.errorSymFirstName) {
        if (!props.store.registrationValuesUI.errorEmailReset && !props.store.registrationValuesUI.errorEmailNotFounedReset) {
            //props.store.goToHex()

            props.store.getData(`${props.store.url}/password-reset/${props.store.registrationValues.emailReset}/`)
                .then((data) => {
                    if (data != undefined) {
                        if (data.a === true) { //true
                            props.store.setRegistrationValuesUI("emailResetOk", true)
                        } else if (data.a === false) {
                            props.store.setRegistrationValuesUI("errorEmailNotFounedReset", true)
                        }
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
                                    <Typography variant='h7' className={classes.typographyMainly}> Введите адрес электроной почты вашего аккаунта.</Typography>
                                    <Typography variant='h7' className={classes.typographyMainly}> Мы отправим вам письмо со ссылкой на страницу создания нового пароля. </Typography>

                                </Grid>
                                <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                    <FormControl className={classes.textField} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Адрес почты</Typography> </InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type='text'
                                            value={props.store.registrationValues.emailReset}
                                            onChange={handleChange('emailReset')}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        // onClick={handleClickShowPassword}
                                                        // onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        <Tooltip title="Ваш адресс электронной почты" arrow>
                                                            <HelpIcon className={classes.icons} />
                                                        </Tooltip>
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
                                {props.store.registrationValuesUI.errorEmailReset && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Некорректный адрес почты</Typography>
                                </Grid>}
                                {props.store.registrationValuesUI.errorEmailNotFounedReset && <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotPassword}>
                                    <Typography className={classes.ErrorLabel}> Пользователя с таким адресом электронной почты не существует</Typography>
                                </Grid>}
                                {!props.store.registrationValuesUI.emailResetOk && <>
                                    <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridEnterButtom}>
                                        <Button onClick={clickRegistartionButton} variant="contained" color="primary" className={classes.enterButtom}>
                                            Отправить письмо
                                        </Button>  
                                    </Grid>
                                </>}
                                {props.store.registrationValuesUI.emailResetOk && <>
                                    <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridTypography}>
                                        <Typography className={classes.typographyMainlySuccess}> Письмо отправлено. С этой страницы можно безопасно уходить  </Typography>

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
    )
}))

export default PassResetEmail;