import * as React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';

//New icons 
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SchoolIcon from '@material-ui/icons/School';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import PublicIcon from '@material-ui/icons/Public';
import MessageIcon from '@material-ui/icons/Message';

import { SwipeableDrawer, Tabs, Tab, Dialog, TransitionProps, Slide, CssBaseline, Box, IconButton, InputBase, FormControlLabel, Switch, withStyles, Tooltip, Fab, BottomNavigation, BottomNavigationAction, Hidden, ClickAwayListener, AppBar, Toolbar, Typography, Drawer, List, Avatar, Grid, Paper, Button, Divider, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Grow, Popper, makeStyles, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Context from '../../../store'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Router from 'next/router';

import { inject, observer } from 'mobx-react'

import UseAnimations from 'react-useanimations';
import settings from 'react-useanimations/lib/settings'
import info from 'react-useanimations/lib/info'
import volume from 'react-useanimations/lib/volume'
import microphone from 'react-useanimations/lib/microphone'
import arrowLeftCircle from 'react-useanimations/lib/arrowLeftCircle'

import { Scrollbars } from 'rc-scrollbars';
import Castomize from './Dialog/Castomize';
import Appbar from './Appbar';
import { Settings } from '@material-ui/icons';
import SettingsMenuApp from './Dialog/SettingsUp';

const defaultSrc = "/avatardefault.png";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        height: 64,
        backgroundColor: theme.main.palette.header.background,
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.only('xs', 'sm')]: {
            paddingLeft: 8,
            paddingTop: 4,
        },
        //transition: '1s',
        // [theme.breakpoints.up('md')]: {

        // },
        // // [theme.breakpoints.only('md')]: {
        // //     paddingLeft: 8,
        // //     paddingTop: 4,
        // // },
        // [theme.breakpoints.down('md')]: {
        //     // paddingLeft: 8,
        //     // paddingTop: 4,
        // },
        transition: theme.transitions.create(['width', 'margin'], {
            // backgroundColor: theme.main.palette.header.background,
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        height: 64,
        //transition: '1s',
        //backgroundColor: theme.main.palette.header.background,
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,

        },
        // [theme.breakpoints.only('md')]: {
        //     width: '100%',
        // },
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
        // transition: theme.transitions.create(['width', 'margin'], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.enteringScreen,
        // }),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        //width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        overflow: 'hidden',
        backgroundColor: theme.main.palette.navbar.background,

    },
    drawerOpen: {
        width: drawerWidth,
        overflow: 'hidden',
        transition: '1s',
        backgroundColor: theme.main.palette.navbar.background,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: '1s',
        backgroundColor: theme.main.palette.navbar.background,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(9)} + 1px)`,
        },
    },
    menuButton: {
        transition: '1s',
        width: 40,
        height: 40,
        [theme.breakpoints.only('xs', 'sm')]: {
            //paddingLeft: 8,
            marginTop: 80,
            marginBottom: 80,
        },
        marginRight: 24,
        marginLeft: -10,
        color: theme.main.palette.header.icon,
    },
    menuButtonIcon: {
        width: 30,
        height: 30,
        color: theme.main.palette.navbar.iconMenu,
    },
    hide: {
        display: 'none',
    },
    toolbar: {

        height: 64,
        backgroundColor: theme.main.palette.header.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        //padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    aNavLink: {
        textDecoration: 'none',
        color: '#000000'
    },
    typographyEffect: {
        fontSize: 32,
        cursor: 'pointer',
        width: '300px',
        //height: '70px',
        marginRight: 0,
        marginLeft: "auto",
    },
    linkMobile: {
        textDecoration: 'none',
        color: '#000000'
    },
    imageAvatarMobile: {
        marginTop: 6,
        marginLeft: 4,
        marginRight: 0,
        marginBottom: 8,
    },
    avatarMobile: {
        // borderRadius: '50%',
        height: 56,
        width: 56,
        // transitionDuration: '.5s',
        // '&:hover': {
        //     borderRadius: '25%',
        //     cursor: 'pointer',
        // }
    },
    Image: {
        //marginLeft: '-9%',
        color: theme.main.palette.navbar.icon,
    },
    ImageText: {
        marginLeft: '10px',
        color: theme.main.palette.navbar.text,
    },
    ImageTextTypography: {
        fontSize: 20,
    },
    dividerBottom: {
        backgroundColor: theme.main.palette.navbar.secondary,
        height: '2px',
    },
    addCourse: {
        marginTop: 8,
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 8,
        color: 'white',
        backgroundColor: theme.main.palette.main.main,
        transition: '0.6s',
        height: 50,
        width: 50,
        '&:hover': {
            backgroundColor: 'white',
            color: theme.main.palette.header.icon,
            cursor: 'pointer',
            border: '10px solid',
            borderColor: theme.main.palette.main.main,
            backgroundColor: theme.main.palette.header.main,
        }
    },
    expandMoreIcon: {
        color: 'white',
    },
    menuList: {
        backgroundColor: theme.main.palette.content.border,
    },
    headerFormControlLabel: {
        zIndex: 999,
        marginTop: "8px",
        marginBottom: "8px",
        color: theme.main.palette.content.text,
        fontSize: "22px"
    },
    gridHeaderFormControlLabel: {
        marginLeft: "5px",
    },
    GridHeaderSearch: {
        zIndex: 999,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        height: 30,
        width: '160px',
        backgroundColor: '#dbdbdb',
        marginTop: "20px",
        marginRight: 4,
        marginBottom: "18px",
    },
    input: {
        zIndex: 999,
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    divider: {
        zIndex: 999,
        height: 20,
        margin: 4,
    },
    iconButton: {
        zIndex: 999,
        padding: 5,
    },
    iconButtonSearch: {
        color: 'white',
    },
    Avatar: {
        borderRadius: '50%',
        height: '60px',
        width: '60px',
        marginLeft: -2,
        transitionDuration: '.5s',
        '&:hover': {
            borderRadius: '25%',
            //cursor: 'pointer',
        }
    },
    imageAvatar: {
        marginLeft: '-10px',
        marginTop: '-5px'
    },
    imageAvatarText: {
        fontSize: 20,
        fontWeight: 'bolder',
        marginLeft: '10px',
        color: theme.main.palette.navbar.text,
    },
    nowPageDivider: {
        width: '5px',
        height: '38px',
        marginRight: '-15px',
        backgroundColor: theme.main.palette.navbar.secondary,
    },
    nowPageDividerAvatar: {
        width: '3px',
        height: '60px',
        marginRight: '-15px',
        marginLeft: '3px',
        backgroundColor: theme.main.palette.navbar.secondary,
    },
    endToolbar: {
        marginRight: '0',
    },
    gridHeaderSearchMobile: {
        zIndex: 999,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        height: 30,
        width: '210px',
        backgroundColor: '#dbdbdb',
        marginTop: "20px",
        marginBottom: "18px",
    },
    appBarBottom: {
        backgroundColor: theme.main.palette.navbar.background,
        height: 64,
        top: 'auto',
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
    },
    BottomNavigation: {
        backgroundColor: theme.main.palette.navbar.background,
        // top: 'auto',
        height: 62,
        //width: 'auto',
        //position: 'absolute',
        // left: 20,
        // right: 20,
        // bottom: 0,
    },
    BottomNavigationBox: {
        height: 20,
        width: 200,
    },
    BottomNavigationAction: {
        // width: 30,
        backgroundColor: theme.main.palette.navbar.background,
    },
    icons: {
        // [theme.breakpoints.up('md')]: {
        //     marginLeft: 4,
        //     width: 36,
        //     height: 36,
        // },
        width: 36,
        height: 36,
        color: theme.main.palette.navbar.icon,
    },
    iconsMenu: {
        width: 40,
        height: 40,
        color: theme.main.palette.navbar.iconMenu,
    },
    label: {
        height: 14,
        zIndex: 1000,
        fontSize: 10,
        color: theme.main.palette.navbar.text,
    },
    mainClass: {
        backgroundColor: theme.main.palette.main.background,
        //backgroundColor: theme.main.palette.content.background,
        paddingTop: theme.spacing(9),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    toolIconButton: {
        // width: 64,
        // height: 64,
        color: theme.main.palette.header.icon,
    },
    toolIcons: {
        width: 48,
        height: 48,
    },
    gridToolIconButton: {
        marginTop: -4,
        marginLeft: 0,
        cursor: 'pointer',
    },
    leftMenu: {
        height: '100%',
        width: drawerWidth,
        zIndex: 1000,
        color: theme.main.palette.header.text,
        backgroundColor: theme.main.palette.header.main,
    },
}));



const NavigationAll = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState('главная');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { files, selectFiles } = React.useContext(Context)

    //Меню
    const menulist = [
        {
            name: 'Главная',
            way: '/app',
            logo: <HomeIcon className={classes.icons} />,
            label: 'Главная',
            value: 'главная',
        },
        {
            name: 'Образование',
            way: '/app/education',
            logo: <SchoolIcon className={classes.icons} />,
            label: 'Образование',
            value: 'образование',
        },
        {
            name: 'Новости',
            way: '/app/news',
            logo: <PublicIcon className={classes.icons} />,
            label: 'Новости',
            value: 'новости',
        },
        {
            name: 'Друзья',
            way: '/app/friends',
            logo: <MessageIcon className={classes.icons} />,
            label: 'Друзья',
            value: 'друзья',
        },
        {
            name: 'Сообщества',
            way: '/app/communities',
            logo: <FireplaceIcon className={classes.icons} />,
            label: 'Сообщества',
            value: 'сообщества',
        },
        {
            name: 'Приложения',
            way: '/app/apps',
            logo: <AppsIcon className={classes.icons} />,
            label: 'Приложения',
            value: 'приложения',
        }
    ]

    const handleDrawerClose = () => {
        props.store.setOpenMenu()
    };

    const pushMobileMenuButton = (way) => {
        Router.push(way)
        //window.scrollTo(0, 0)
        while (Math.max(document.body.scrollTop, document.documentElement.scrollTop) > 0) {
            window.scrollBy(0, -100)

        }
    }



    const router = useRouter()

    //Tool

    const gotoInfo = () => {
        window.open("https://xieffect.vercel.app/support");
    }

    // const setOpenDialog = () => {
    //     props.store.setDialogMenu()
    // }

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        props.store.setOpenMenu();
    }

    const leftMenuClicked = () => {
        toggleDrawer(false)
        handleDrawerClose
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.store.openMenu,
                })}>
                <Toolbar>
                    <Appbar />
                </Toolbar>
            </AppBar>
            <Hidden mdDown>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: props.store.openMenu,
                        [classes.drawerClose]: !props.store.openMenu,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: props.store.openMenu,
                            [classes.drawerClose]: !props.store.openMenu,
                        }),
                    }}
                >
                    {/* Иконка сокрытия разведённого меню */}

                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.iconsMenu} /> : <ChevronLeftIcon className={classes.iconsMenu} />}
                        </IconButton>
                    </div>
                    <Divider />
                    {/* Список иконок меню */}
                    <List>
                        {/* Аватар-профиль */}
                        {/* <Link href="/app/profile" className={classes.aNavLink}> */}
                        <ListItem key="profile">
                            <ListItemIcon className={classes.imageAvatar}>
                                <img alt="Ваш Аватар" src={files?.source || defaultSrc} className={classes.Avatar} />
                            </ListItemIcon>
                            {props.store.openMenu && <Grid container direction="column">
                                {props.store.userData.firstName != "" && <Typography noWrap={true} className={classes.imageAvatarText}>{props.store.userData.name}</Typography>}
                                {props.store.userData.username != "" && <Typography noWrap={true} className={classes.imageAvatarText}>{props.store.userData.username}</Typography>}
                                {props.store.userData.secondName != "" && <Typography noWrap={true} className={classes.imageAvatarText}>{props.store.userData.secondName}</Typography>}
                            </Grid>}
                            {router.pathname === '/app/profile' && <Divider orientation="vertical" className={classes.nowPageDividerAvatar} />}
                        </ListItem>
                        <Grid className={classes.gridToolIconButton} container direction="row" justifyContent="flex-start" alignItems="center">
                            {/* <IconButton className={classes.toolIconButton}> */}
                            <Link href='/app/settings' className={classes.aNavLink}>
                                <ListItem button>
                                    <ListItemIcon className={classes.Image}>
                                        {props.store.userData.isDarkMode && <UseAnimations className={classes.toolIcons} strokeColor={'#e0e0e0'} animation={settings} size={36} />}
                                        {!props.store.userData.isDarkMode && <UseAnimations className={classes.toolIcons} strokeColor={'#424242'} animation={settings} size={36} />}
                                    </ListItemIcon>
                                    {props.store.openMenu && <ListItemText primary={<Typography className={classes.ImageTextTypography}> Настройки </Typography>} className={classes.ImageText} />}
                                    {router.pathname === '/app/settings' && <Divider orientation="vertical" className={classes.nowPageDivider} />}
                                </ListItem>
                            </Link>
                            {/* </IconButton> */}
                        </Grid>
                        {/* </Link> */}
                        <Divider />
                        {/* Список главного меню  */}
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            {menulist.map((obj) => (
                                // <Grid item >
                                <Link href={obj.way} className={classes.aNavLink} key={obj.name}>
                                    <ListItem button key={obj.name}>
                                        <ListItemIcon className={classes.Image}>
                                            {obj.logo}
                                        </ListItemIcon>
                                        {props.store.openMenu && <ListItemText primary={<Typography className={classes.ImageTextTypography}>{obj.name}</Typography>} className={classes.ImageText} />}
                                        {router.pathname === obj.way && <Divider orientation="vertical" className={classes.nowPageDivider} />}
                                    </ListItem>
                                </Link>
                                // </Grid>

                            ))}
                        </Grid>
                    </List>

                    <Divider />
                </Drawer>
            </Hidden>
            <Hidden mdUp>
                <SwipeableDrawer
                    disableBackdropTransition={!iOS}
                    disableDiscovery={iOS}
                    anchor='left'
                    open={props.store.openMenu}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}

                >
                    <div
                        className={classes.leftMenu}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >

                        <Drawer
                            variant="permanent"
                            className={clsx(classes.drawer, {
                                [classes.drawerOpen]: props.store.openMenu,
                                [classes.drawerClose]: !props.store.openMenu,
                            })}
                            classes={{
                                paper: clsx({
                                    [classes.drawerOpen]: props.store.openMenu,
                                    [classes.drawerClose]: !props.store.openMenu,
                                }),
                            }}
                        >
                            {/* Иконка сокрытия разведённого меню */}

                            <div className={classes.toolbar}>
                                <IconButton onClick={leftMenuClicked}>
                                    {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.iconsMenu} /> : <ChevronLeftIcon className={classes.iconsMenu} />}
                                </IconButton>
                            </div>
                            <Divider />
                            {/* Список иконок меню */}
                            <List>
                                {/* Аватар-профиль */}
                                {/* <Link href="/app/profile" className={classes.aNavLink}> */}
                                <ListItem key="profile">
                                    <ListItemIcon className={classes.imageAvatar}>
                                        <img alt="Ваш Аватар" src={files?.source || defaultSrc} className={classes.Avatar} />
                                    </ListItemIcon>
                                    {props.store.openMenu && <Grid container direction="column">
                                        {props.store.userData.firstName != "" && <Typography noWrap={true} className={classes.imageAvatarText}>{props.store.userData.name}</Typography>}
                                        {props.store.userData.username != "" && <Typography noWrap={true} className={classes.imageAvatarText}>{props.store.userData.username}</Typography>}
                                        {props.store.userData.secondName != "" && <Typography noWrap={true} className={classes.imageAvatarText}>{props.store.userData.secondName}</Typography>}
                                    </Grid>}
                                    {router.pathname === '/app/profile' && <Divider orientation="vertical" className={classes.nowPageDividerAvatar} />}
                                </ListItem>
                                <Grid className={classes.gridToolIconButton} container direction="row" justifyContent="flex-start" alignItems="center">
                                    {/* <IconButton className={classes.toolIconButton}> */}

                                    <Link href='/app/settings' className={classes.aNavLink}>
                                        <ListItem button>
                                            <ListItemIcon className={classes.Image}>
                                                {props.store.userData.isDarkMode && <UseAnimations className={classes.toolIcons} strokeColor={'#e0e0e0'} animation={settings} size={36} />}
                                                {!props.store.userData.isDarkMode && <UseAnimations className={classes.toolIcons} strokeColor={'#424242'} animation={settings} size={36} />}
                                            </ListItemIcon>
                                            {props.store.openMenu && <ListItemText primary={<Typography className={classes.ImageTextTypography}> Настройки </Typography>} className={classes.ImageText} />}
                                            {router.pathname === '/app/settings' && <Divider orientation="vertical" className={classes.nowPageDivider} />}
                                        </ListItem>
                                    </Link>

                                    {/* </IconButton> */}
                                </Grid>
                                {/* </Link> */}
                                <Divider />
                                {/* Список главного меню  */}
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    {menulist.map((obj) => (
                                        // <Grid item >
                                        <Link href={obj.way} className={classes.aNavLink} key={obj.name}>
                                            <ListItem button key={obj.name}>
                                                <ListItemIcon className={classes.Image}>
                                                    {obj.logo}
                                                </ListItemIcon>
                                                {props.store.openMenu && <ListItemText primary={<Typography className={classes.ImageTextTypography}>{obj.name}</Typography>} className={classes.ImageText} />}
                                                {router.pathname === obj.way && <Divider orientation="vertical" className={classes.nowPageDivider} />}
                                            </ListItem>
                                        </Link>
                                        // </Grid>

                                    ))}
                                </Grid>
                            </List>

                            <Divider />
                        </Drawer>

                    </div>
                </SwipeableDrawer>
            </Hidden>
            <main className={clsx(classes.mainClass, {
                [classes.mainOpen]: props.store.openMenu,
                [classes.mainClose]: !props.store.openMenu,
            })}>
                {props.children}
            </main>
        </div>
    );
}))

export default NavigationAll