import * as React from 'react';

import clsx from 'clsx';

//New icons 
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SchoolIcon from '@material-ui/icons/School';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import PublicIcon from '@material-ui/icons/Public';
import MessageIcon from '@material-ui/icons/Message';

import { CssBaseline, Box, InputBase, FormControlLabel, Switch, withStyles, Tooltip, Fab, BottomNavigation, BottomNavigationAction, Hidden, ClickAwayListener, AppBar, Toolbar, Typography, IconButton, Drawer, List, Avatar, Grid, Paper, Button, Divider, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Grow, Popper, makeStyles, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Context from '../../../store'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Router from 'next/router';

import { inject, observer } from 'mobx-react'

const defaultSrc = "/avatardefault.png";

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 14,
        // border: '3px solid',
        // borderColor: '#00b0ff',
    },
}))(Tooltip);

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: theme.main.palette.header.background,
        zIndex: theme.zIndex.drawer + 1,
        transition: '1s',
        transition: theme.transitions.create(['width', 'margin'], {
            // backgroundColor: theme.main.palette.header.background,
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        transition: '1s',
        //backgroundColor: theme.main.palette.header.background,
        marginLeft: drawerWidth,
        [theme.breakpoints.up('xs')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        [theme.breakpoints.only('xs')]: {
            width: '100%',
        },
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        backgroundColor: theme.main.palette.navbar.background,

    },
    drawerOpen: {
        width: drawerWidth,
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
        marginRight: 24,
        marginLeft: -10,
        color: theme.main.palette.header.icon,
    },
    menuButtonIcon: {
        width: 30,
        height: 30,
        color: theme.main.palette.header.icon,
    },
    hide: {
        display: 'none',
    },
    toolbar: {
        backgroundColor: theme.main.palette.header.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    aNavLink: {
        textDecoration: 'none',
        color: '#000000'
    },
    typographyEffect: {
        cursor: 'pointer',
        width: '200px',
        marginRight: 0,
        marginLeft: "auto",
    },
    linkMobile: {
        textDecoration: 'none',
        color: '#000000'
    },
    imageAvatarMobile: {
        marginLeft: '3px',
        marginTop: '6px',
        marginBottom: '6px',
        marginRight: '-12px',
    },
    avatarMobile: {
        borderRadius: '50%',
        height: '48px',
        width: '48px',
        transitionDuration: '.5s',
        '&:hover': {
            borderRadius: '25%',
            cursor: 'pointer',
        }
    },
    Image: {
        marginLeft: '-9%',
        color: theme.main.palette.navbar.icon,
    },
    ImageText: {
        marginLeft: '10px',
        color: theme.main.palette.navbar.text,
    },
    dividerBottom: {
        backgroundColor: theme.main.palette.navbar.secondary,
        height: '2px',
    },
    addCourse: {
        margin: theme.spacing(1),
        color: 'white',
        backgroundColor: theme.main.palette.main.main,
        transition: '0.6s',
        '&:hover': {
            backgroundColor: 'white',
            color: theme.main.palette.main.main,
            cursor: 'pointer',
            border: '10px solid',
            borderColor: theme.main.palette.main.main,
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
        width: '180px',
        backgroundColor: '#dbdbdb',
        marginTop: "17px",
        marginBottom: "17px",
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
            cursor: 'pointer',
        }
    },
    imageAvatar: {
        marginLeft: '-10px',
        marginTop: '-5px'
    },
    imageAvatarText: {
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
        width: '230px',
        backgroundColor: '#dbdbdb',
        marginTop: "17px",
        marginBottom: "17px",
    },
    appBarBottom: {
        backgroundColor: theme.main.palette.navbar.background,
        height: 70,
        top: 'auto',
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
    },
    BottomNavigation: {
        backgroundColor: theme.main.palette.navbar.background,
        top: 'auto',
        height: 68,
        width: '100%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    BottomNavigationAction: {
        backgroundColor: theme.main.palette.navbar.background,
    },
    icons: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: 4,
            width: 36,
            height: 36,
        },
        width: 28,
        height: 28,
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
    }
}));

const NavigationAll = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState('главная');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    // const open = props.store.topLeftMenuButtom

    //const [open, setOpen] = React.useState(false);

    // const setOpen = () => {
    //     props.store.setTrueTopLeftMenuButtom()
    // }

    const handleDrawerOpen = () => {
        props.store.setOpenMenu()
    };

    const handleDrawerClose = () => {
        props.store.setOpenMenu()
    };

    const pushMobileMenuButton = (way) => {
        Router.push(way)
    }

    const setClose = () => {
        props.store.setFalseTopLeftMenuButtom()
    }

    //Профиль
    const [open1, setOpen1] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen1((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen1(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen1(false);
        }
    }

    //Стрелочка выпадающего меню

    const [openExpandMore, setOpenExpandMore] = React.useState(false);
    const anchorRefExpandMore = React.useRef(null);

    const handleToggleExpandMore = () => {
        setOpenExpandMore((prevOpen) => !prevOpen);
    };

    const handleCloseExpandMore = (event) => {
        if (anchorRefExpandMore.current && anchorRefExpandMore.current.contains(event.target)) {
            return;
        }

        setOpenExpandMore(false);
    };

    function handleListKeyDownExpandMore(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenExpandMore(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(false);
    React.useEffect(() => {
        if (prevOpen.current === true && openExpandMore === false) {
            anchorRefExpandMore.current.focus();
        }

        prevOpen.current = openExpandMore;
    }, [openExpandMore]);

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChangeSwitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const router = useRouter()

    //Открыть поиск в мобильной версии

    const [openSearch, setOpenSearch] = React.useState(false);

    const setNewOpenSearch = () => {
        setOpenSearch((prevOpen) => !prevOpen);
    };

    const { files, selectFiles } = React.useContext(Context)

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.store.openMenu,
                })}>
                <Toolbar>
                    {/* Кнопка-иконка меню (Отображается всегда, при этом на мобильных платформах исчезает т.к. меню переносится вниз в горизонтальное положение) */}
                    <Hidden only='xs'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: props.store.openMenu,
                            })}

                        >
                            <MenuIcon className={classes.menuButtonIcon} />
                        </IconButton>
                    </Hidden>
                    {/* Основное название сайта. (Отображается всегда) */}
                    <Link href="/">
                        <Typography variant="h4" display='inline' className={classes.typographyEffect}>
                            Ξ Effect
                        </Typography>
                    </Link>
                    {/* Набор инструментов главной части приложения. (Меняется в зависимости от страницы мменю. В мобильной версии в самой правой части отображается аватарка-ссылка на профиль пользователя) */}
                    <Grid container direction="row" justifyContent="flex-end">
                        {/* Набор инструментов для вкладки Образование */}
                        {router.pathname === '/app/education' && <>
                            {/* Поиск по курсам. Только НЕ для мобильной версии */}
                            {!openSearch && <Hidden only={['xs', 'sm']}>
                                <Paper component="form" className={classes.GridHeaderSearch}>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Поиск курсов"
                                        inputProps={{ 'aria-label': 'Поиск курсов' }}
                                    />
                                    <Divider className={classes.divider} orientation="vertical" />
                                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                        <SearchIcon />  {/*  className={classes.iconButtonSearch} */}
                                    </IconButton>
                                </Paper>
                            </Hidden>}
                            {/* Кнопка-иконка для открытия панели поиска в мобильной версии. (Видна только в мобильной версии)  */}
                            {!openSearch && <Hidden mdUp>
                                <IconButton onClick={setNewOpenSearch} className={classes.iconButton}>
                                    <SearchIcon className={classes.iconButtonSearch} />
                                </IconButton>
                            </Hidden>}
                            {/* Панель поиска, открывающаяся для мобильной версии при нажатии кнопки-иконки поиска */}
                            {openSearch && <Paper component="form" className={classes.gridHeaderSearchMobile}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Поиск курсов"
                                    inputProps={{ 'aria-label': 'Поиск курсов' }}
                                />
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />  {/*  className={classes.iconButtonSearch} */}
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton onClick={setNewOpenSearch} className={classes.iconButton}>
                                    <ExitToAppIcon />  {/*  className={classes.iconButtonSearch} */}
                                </IconButton>
                            </Paper>}
                            {/* Панель свойств отображения главного контента на странице */}
                            {/* {!openSearch &&
                                <Button
                                    ref={anchorRefExpandMore}
                                    aria-controls={openExpandMore ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggleExpandMore}
                                >
                                    {!openExpandMore && <LightTooltip title="Настройки отображения"><ExpandMoreIcon fontSize="large" className={classes.expandMoreIcon} /></LightTooltip>}
                                    {openExpandMore && <ExpandLessIcon fontSize="large" className={classes.expandMoreIcon} />}
                                </Button>
                            } */}
                            {/* Выпадающее меню свойств отображения главного контента на странице */}
                            {/* <Popper open={openExpandMore} anchorEl={anchorRefExpandMore.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleCloseExpandMore}>
                                                <MenuList autoFocusItem={openExpandMore} id="menu-list-grow" onKeyDown={handleListKeyDown} className={classes.menuList}>
                                                    <Grid container direction="column" className={classes.gridHeaderFormControlLabel}>
                                                        <FormControlLabel
                                                            control={<Switch checked={state.checkedA} onChange={handleChangeSwitch} name="checkedA" />}
                                                            label="Избранное"
                                                            className={classes.headerFormControlLabel}
                                                        />
                                                        <FormControlLabel
                                                            control={<Switch checked={state.checkedB} onChange={handleChangeSwitch} color="primary" name="checkedB" />}
                                                            label="Ваши Курсы"
                                                            className={classes.headerFormControlLabel}
                                                        />
                                                        <FormControlLabel
                                                            control={<Switch checked={state.checkedC} onChange={handleChangeSwitch} color="primary" name="checkedC" />}
                                                            label="Рекомендации"
                                                            className={classes.headerFormControlLabel}
                                                        />
                                                    </Grid>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper> */}
                            {/* Кнопка-иконка создания новых курсов */}
                            <LightTooltip title="Создать курс">
                                <Fab size="medium" aria-label="add" className={classes.addCourse}>
                                    <AddIcon />
                                </Fab>
                            </LightTooltip>
                        </>}
                        {/* Аватарка-ссылка на профиль. (Отображается в мобильной версии) */}
                        <Hidden smUp>
                            <Link href="/app/profile" className={classes.linkMobile}>
                                <ListItemIcon className={classes.imageAvatarMobile}>
                                    <img alt="Ваш Аватар" src={files?.source || defaultSrc} className={classes.avatarMobile} />
                                </ListItemIcon>
                            </Link>
                        </Hidden>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Hidden only='xs'>
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
                        <Link href="/app/profile" className={classes.aNavLink}>
                            <ListItem button key="profile">
                                <ListItemIcon className={classes.imageAvatar}>
                                    <img alt="Ваш Аватар" src={files?.source || defaultSrc} className={classes.Avatar} />
                                </ListItemIcon>
                                {props.store.openMenu && <Grid container direction="column">
                                    <Typography noWrap={true} className={classes.imageAvatarText}>{props.store.userData.name}</Typography>
                                    <Typography noWrap={true} className={classes.imageAvatarText}>{props.store.userData.secondName}</Typography>
                                </Grid>}
                                {router.pathname === '/app/profile' && <Divider orientation="vertical" className={classes.nowPageDividerAvatar} />}
                            </ListItem>
                        </Link>
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
                                        {props.store.openMenu && <ListItemText primary={obj.name} className={classes.ImageText} />}
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
            <Hidden smUp>
                <AppBar position="fixed" className={classes.appBarBottom}>
                    <Divider className={classes.dividerBottom} />
                    <BottomNavigation value={value} onChange={handleChange} className={classes.BottomNavigation} showLabels>
                        {menulist.map((obj) => (
                            <BottomNavigationAction onClick={() => pushMobileMenuButton(obj.way)} key={obj.name} className={classes.BottomNavigationAction} value={obj.value} label={<Typography className={classes.label}>{obj.label}</Typography>} icon={obj.logo} />
                        ))}
                    </BottomNavigation>
                </AppBar>
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