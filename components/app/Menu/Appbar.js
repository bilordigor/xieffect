import * as React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import { SwipeableDrawer, Tabs, Tab, Dialog, TransitionProps, Slide, CssBaseline, Box, IconButton, InputBase, FormControlLabel, Switch, withStyles, Tooltip, Fab, BottomNavigation, BottomNavigationAction, Hidden, ClickAwayListener, AppBar, Toolbar, Typography, Drawer, List, Avatar, Grid, Paper, Button, Divider, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Grow, Popper, makeStyles, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import AddIcon from '@material-ui/icons/Add';

import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Context from '../../../store'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { inject, observer } from 'mobx-react'

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    menuButton: {
        transition: '1s',
        width: 48,
        height: 48,
        // marginRight: 16,
        // marginLeft: 0,
        color: theme.main.palette.header.icon,
    },
    menuButtonIcon: {
        width: 36,
        height: 36,
        color: theme.main.palette.navbar.iconMenu,
    },
    hide: {
        display: 'none',
    },
    typographyEffect: {
        fontSize: 36,
        cursor: 'pointer',
        width: '300px',
        //height: '70px',
        paddingLeft: 16,
        // marginRight: 0,
        // marginLeft: "auto",
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
    leftMenu: {
        height: '100%',
        width: drawerWidth,
        zIndex: 1000,
        color: theme.main.palette.header.text,
        backgroundColor: theme.main.palette.header.main,
    },
    saveButtom: {
        backgroundColor: theme.main.palette.help.green,
        '&:hover': {
            backgroundColor: theme.main.palette.help.green,
        }
    }
}));

const Appbar = inject('store')(observer(({ store }) => {
    const classes = useStyles();
    const theme = useTheme();
    const { files, selectFiles } = React.useContext(Context)

    //Открыть поиск в мобильной версии

    const [openSearch, setOpenSearch] = React.useState(false);

    const setNewOpenSearch = () => {
        setOpenSearch((prevOpen) => !prevOpen);
    };

    const handleDrawerOpen = () => {
        store.setOpenMenu()
    };
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter()

    const clickedSaveSettings = () => {
        store.labelSettings.map((name, index) => {
            if (store.settingsNew[name] != store.settings[name]) {
                store.update.changed[store.labelServerSettings[index]] = store.settingsNew[name]
                store.settings[name] = store.settingsNew[name]
            }
        })
        console.log(store.update)
        store.postDataScr(`${store.url}/settings/`, store.update)
            .then((data) => {
                if (data.a) {
                    enqueueSnackbar('Успешно', {
                        'success',
                    });
                }
            })
    }

    return (
        <>
            {/* Кнопка-иконка меню (Отображается всегда, при этом на мобильных платформах исчезает т.к. меню переносится вниз в горизонтальное положение) */}
            {/* < Hidden only='xs' > */}
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: store.openMenu,
                        })}

                    >
                        <MenuIcon className={classes.menuButtonIcon} />
                    </IconButton>
                </Grid>

                {/* </Hidden > */}
                {/* Основное название сайта. (Отображается всегда) */}
                <Grid item>
                    < Link href="/" >
                        <Typography display='inline' className={classes.typographyEffect}>
                            Ξ Effect
                        </Typography>
                    </Link >
                </Grid>

            </Grid>

            {/* Набор инструментов главной части приложения. (Меняется в зависимости от страницы мменю. В мобильной версии в самой правой части отображается аватарка-ссылка на профиль пользователя) */}
            < Grid container direction="row" justifyContent="flex-end" >
                {/* Набор инструментов для вкладки Образование */}
                {
                    router.pathname === '/app/education' && <>
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
                        {/* Кнопка-иконка создания новых курсов */}
                        {/* <LightTooltip title="Создать курс">
                            <Fab size="medium" aria-label="add" className={classes.addCourse}>
                                <AddIcon />
                            </Fab>
                        </LightTooltip> */}
                    </>

                }
                {
                    router.pathname === '/app/settings' && <>
                        <Tooltip title="Сохранить все изменения в настройках" arrow>
                            <Button onClick={clickedSaveSettings} variant="contained" color="primary" className={classes.saveButtom}>
                                Сохранить изменения
                            </Button>
                        </Tooltip>

                    </>

                }
            </Grid >
        </>
    );
}))

export default Appbar