import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import Page from 'react-page-loading'
import { Grid, TextField, Tooltip, Popper, Grow, MenuList, MenuItem, InputLabel, Checkbox, ButtonGroup, InputAdornment, IconButton, FormControl, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button, Paper } from '@material-ui/core';
import { Link as LinkUI } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MainSwipeBar from '../../../components/app/ProfilePage/MainSwipeBar'
import { makeStyles } from '@material-ui/core/styles';
import Background from '../../../components/app/help/background/background'
import clsx from 'clsx'
import { inject, observer } from 'mobx-react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const options = ['Участник', 'Ученик', 'Преподаватель', 'Автор', 'Родитель'];


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
    }
}));



const User = inject('store')(observer((props) => {
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


    //SelectorButton

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
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

    //Checkbox

    const [state, setState] = React.useState({
        checkedA: false,
    });

    const handleChangeCheckbox = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const wallpapers = () => {
        let count = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1))) + Math.ceil(1)
        return "/wallpapers/hp" + count.toString() + ".jpg"
    }

    return (
        <>
            <Head>
                <title>Ξ Регистрация</title>
            </Head>
            <Background src="/wallpapers/hp3.jpg" />
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
                                <Typography variant='h5' className={classes.typographyMain}> Давайте знакомиться! </Typography>
                                <Typography variant='h7' className={classes.typographyMainly}> Расскажите нам о себе! </Typography>
                            </Grid>
                            <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                <FormControl className={classes.textField} variant="outlined">
                                    <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Имя</Typography></InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type='text'
                                        value={values.email}
                                        onChange={handleChange('password')}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                <FormControl className={classes.textField} variant="outlined">
                                    <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Фамилия</Typography> </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type='text'
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        labelWidth={70}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                <FormControl className={classes.textField} variant="outlined">
                                    <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Никнейм</Typography> </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type='text'
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        labelWidth={70}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
                                <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                                    <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                                    <Button
                                        color="primary"
                                        size="small"
                                        aria-controls={open ? 'split-button-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-label="select merge strategy"
                                        aria-haspopup="menu"
                                        onClick={handleToggle}
                                    >
                                        <ArrowDropDownIcon />
                                    </Button>
                                </ButtonGroup>
                                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                            }}
                                        >
                                            <Paper className={classes.paper}>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList id="split-button-menu">
                                                        {options.map((option, index) => (
                                                            <MenuItem
                                                                key={option}
                                                                // disabled={index === 2}
                                                                selected={index === selectedIndex}
                                                                onClick={(event) => handleMenuItemClick(event, index)}
                                                            >
                                                                {option}
                                                            </MenuItem>
                                                        ))}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </Grid>
                            <Grid item container direction="row" justifyContent="flex-start" alignItems="flex-start" className={classes.gridCheckbox}>
                                <FormControlLabel
                                    control={<Checkbox className={classes.Checkbox} color="primary" checked={state.checkedA} onChange={handleChangeCheckbox} name="checkedA" />}
                                    label={<Typography className={classes.checkboxTypography}> Скрыть Имя и Фамилию </Typography>}
                                />
                                <Tooltip className={classes.tooltip} title={<Typography className={classes.tooltipTypography}>Скрыть Имя и Фамилию от незнакомых пользоватлей. Показывать им только ваш Никнейм.</Typography>} arrow>
                                    <HelpOutlineIcon className={classes.iconHelp} />
                                </Tooltip>

                            </Grid>
                            <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridEnterButtom}>
                                <Link href="/login">
                                    <Button onClick={props.store.setReadyAuth} variant="contained" color="primary" className={classes.enterButtom}>
                                        Завершить Регистрацию
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

export default User;