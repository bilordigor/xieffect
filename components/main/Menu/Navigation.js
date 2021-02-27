import * as React from 'react';

import clsx from 'clsx';

import { SwipeableDrawer, Box, InputBase, FormControlLabel, Switch, withStyles, Tooltip, Fab, BottomNavigation, BottomNavigationAction, Hidden, ClickAwayListener, AppBar, Toolbar, Typography, IconButton, Drawer, List, Avatar, Grid, Paper, Button, Divider, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Grow, Popper, makeStyles, useTheme } from '@material-ui/core';
//import Context from '../../../store'
import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Router from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { Link as LinkUI } from '@material-ui/core'

import { inject, observer } from 'mobx-react'

import UseAnimations from "react-useanimations"
import menu2 from 'react-useanimations/lib/menu2'

const useStyles = makeStyles((theme) => ({
    gridTypographyMain: {
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
    typographyMain: {
        fontSize: 32,
        color: theme.main.palette.header.text,
        cursor: 'pointer',
        zIndex: 999,
    },
    gridMenuLink: {
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 36,
        },
        [theme.breakpoints.down('lg')]: {
            paddingLeft: 20,
        },
        fontSize: 16,
        fontFamily: 'Roboto',
        zIndex: 999,
    },
    menuLink: {
        color: theme.main.palette.header.text,
        cursor: 'pointer',
        zIndex: 999,
    },
    gridMenu: {
        paddingTop: 16,
        zIndex: 999,
    },
    gridEnterButton: {
        
        [theme.breakpoints.up('md')]: {
            paddingRight: 32,
            marginLeft: 'auto',
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: 16,
            paddingLeft: 16,
        },
    },
    gridRegLink: {
        marginLeft: 'auto',

        [theme.breakpoints.up('md')]: {
            paddingRight: 32,
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: 16,
        },
    },
    enterButton: {
        borderRadius: 12,
        zIndex: 999,
        color: theme.main.palette.header.text,
        //cursor: 'pointer',
    },
    rightMenu: {
        height: '100%',
        width: 320,
        zIndex: 1000,
        color: theme.main.palette.header.text,
        backgroundColor: theme.main.palette.header.main,
    },
    fullList: {
        width: 'auto',
    },
    gridEnterMenuButton: {
        zIndex: 1001,
        paddingRight: 16,
    },
    enterMenuButton: {
        zIndex: 1001,
    },
    MenuIcon: {
        height: 48,
        width: 48,
        color: theme.main.palette.header.text,
    },
    gridMenuLinkRight: {
        paddingTop: 4,
        // paddingLeft: 32,
        fontSize: 16,
        fontFamily: 'Roboto',
        zIndex: 999,
    },
    menuLinkRight: {
        fontSize: 24,
        color: theme.main.palette.header.text,
        cursor: 'pointer',
        zIndex: 999,
    },
    Divider: {
        height: 2,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: theme.main.palette.header.text,
        width: '300px',
    }
}));


const Navigation = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    //Боковое меню

    const [open, setOpen] = React.useState(false)
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpen(open);
    }
    const menuList = [
        {
            key: '0',
            label: 'Регистрация',
            way: '/registration',
        },
        {
            key: '1',
            label: 'Загрузка',
            way: '/download',
        },
        {
            key: '2',
            label: 'Почему Ξ Effect?',
            way: '/why-effect',
        },
        {
            key: '3',
            label: 'Boost',
            way: '/boost',
        },
        {
            key: '4',
            label: 'Будущее образования',
            way: '/future-of-education',
        },
        {
            key: '5',
            label: 'Поддержка',
            way: '/support',
        },

    ]

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.gridMenu}>
            <Grid item className={classes.gridTypographyMain}>
                <Link href="/">
                    <Typography className={classes.typographyMain}> Ξ Effect </Typography>
                </Link>
            </Grid>
            <Hidden mdDown>
                {menuList.map((obj) => (
                    <Grid item key={obj.key} className={classes.gridMenuLink}>
                        <Link href={obj.way} key={obj.key}>
                            <LinkUI key={obj.key} className={classes.menuLink}>{obj.label}</LinkUI>
                        </Link>
                    </Grid>

                ))}
            </Hidden>
            <Hidden mdUp>
                <Grid className={classes.gridRegLink}>
                    <Link href="/registration">
                        <LinkUI className={classes.menuLink}>Регистрация</LinkUI>
                    </Link>
                </Grid>
            </Hidden>
            <Grid className={classes.gridEnterButton}>

                <Link href="/login">
                    <Button variant="contained" className={classes.enterButton} > Вход </Button>
                </Link>
            </Grid>
            <Hidden mdUp>
                <Grid className={classes.gridEnterMenuButton}>
                    <Button onClick={toggleDrawer(true)} className={classes.enterMenuButton} >
                        {/* <UseAnimations strokeColor={theme.main.palette.header.text} animation={menu2} size={56} reverse={open}/> */}
                        <MenuIcon className={classes.MenuIcon} />
                    </Button>
                    <SwipeableDrawer
                        disableBackdropTransition={!iOS}
                        disableDiscovery={iOS}
                        anchor='right'
                        open={open}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}

                    >
                        <div
                            className={classes.rightMenu}
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <Grid container direction="column" justifyContent="center" alignItems="center">
                                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                    <Grid item className={classes.gridTypographyMain}>
                                        <Typography className={classes.typographyMain}> Ξ Effect </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={toggleDrawer(false)} className={classes.enterMenuButton} >
                                            <UseAnimations strokeColor={theme.main.palette.header.text} animation={menu2} size={48} autoplay={false} loop={false} reverse={open} />
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Divider className={classes.Divider} />
                                <Grid container direction="column" justifyContent="center" alignItems="center">
                                    {menuList.map((obj) => (
                                        <Grid item key={obj.key} className={classes.gridMenuLinkRight}>
                                            <Link href={obj.way} key={obj.key}>
                                                <LinkUI key={obj.key} className={classes.menuLinkRight}>{obj.label}</LinkUI>
                                            </Link>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                        </div>


                    </SwipeableDrawer>
                </Grid>
            </Hidden>

        </Grid>
    )
}));

export default Navigation;