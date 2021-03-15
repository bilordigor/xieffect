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

import { Alert, Link, SwipeableDrawer, Tabs, Tab, Dialog, TransitionProps, Slide, CssBaseline, Box, IconButton, InputBase, FormControlLabel, Switch, withStyles, Tooltip, Fab, BottomNavigation, BottomNavigationAction, Hidden, ClickAwayListener, AppBar, Toolbar, Typography, Drawer, List, Avatar, Grid, Paper, Button, Divider, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Grow, Popper, makeStyles, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Context from '../../../../store'

import Image from 'next/image'
//import Link from 'next/link'
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
import Castomize from './Castomize';
import { Settings } from '@material-ui/icons';
import UserAccount from './UserAccount';


const useStylesDialogAll = makeStyles((theme) => ({
    root: {
        //display: 'flex',
        backgroundColor: theme.main.palette.content.background,
        //position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
    },

    tabs: {
        borderRight: `2px solid ${theme.main.palette.main.background}`,
        color: theme.main.palette.content.text,
        backgroundColor: theme.main.palette.content.background,
        marginTop: 32,
        height: window.innerHeight - 64,
    },
    gridRoot: {
        flexGrow: 1,
        backgroundColor: theme.main.palette.content.background,
        //display: 'flex',
        // height: 224,
        //width: '100vw',
    },
    gridTabs: {
        width: '100%',
    },
    gridTabPanel: {
        width: '100%',
    },
    TabPanel: {
        paddingLeft: 8,
        minWidth: 350,
        backgroundColor: theme.main.palette.content.main,
    },
    menuTypography: {
        paddingLeft: 16,
        fontWeight: 'bold',
        fontSize: 16,
    },
    menuButton: {
        // display: 'flex',
        // textAlign: 'left',
        // float: 'left',
        width: 220,
        marginRight: 4,
        '&:hover': {
            backgroundColor: theme.main.palette.content.reverseText,
            //opacity: 1,
        },
    },
    menuButtonClicked: {
        backgroundColor: theme.main.palette.content.reverseText,
    },
    buttonLabel: {
        paddingLeft: 0,
        marginRight: 'auto',
        textTransform: 'none',
        fontSize: 20,
        color: theme.main.palette.content.text,
    },
    divider: {
        marginTop: 4,
        marginBottom: 8,
        height: 1,
        width: 200,
        backgroundColor: theme.main.palette.content.border,
    },
    menuExitButton: {
        width: 220,
        marginRight: 4,
        '&:hover': {
            backgroundColor: theme.main.palette.help.redbackground,
            //opacity: 1,
        },
    },
    buttonExitLabel: {
        paddingLeft: 0,
        marginRight: 'auto',
        textTransform: 'none',
        fontSize: 20,
        color: theme.main.palette.help.red,
    },
    content: {
        marginTop: 32,
        marginLeft: 32,
        width: 500,
        height: "100%",
    },
    contentAlert: {
        marginTop: 24,
        marginLeft: 24,
        width: 500,
        height: "100%",
    },
    goBackButton: {
        position: 'fixed',
        top: 32,
        right: 32,
        cursor: 'pointer',
    },
    link: {
        color: theme.main.palette.content.text,
        cursor: "pointer",
    }
}));

const SettingsUp = inject('store')(observer(({ store }) => {
    const classes = useStylesDialogAll();
    const theme = useTheme();

    const goBack = () => {
        setTimeout(store.setDialogMenu, 500)
    }

    const sendEmail = () => {
        store.postDataScr(`${store.url}/email/${store.settingsNew.email}/`, {"email": store.settingsNew.email})
        .then((data) => {})
    }

    return (
        <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            className={classes.gridRoot}
        >
            {/* <Grid item> */}
            <Box className={classes.tabs}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Scrollbars style={{ width: 230, height: window.innerHeight - 64 }}>
                        <>
                            <Typography className={classes.menuTypography}> Настройки Пользователя </Typography>
                            <Button onClick={() => store.setDialogMenuItem(0)} className={clsx(classes.menuButton, { [classes.menuButtonClicked]: store.dialogMenuItem === 0, })}>
                                <Typography className={classes.buttonLabel}> Учётная запись </Typography>
                            </Button>
                            <Button onClick={() => store.setDialogMenuItem(1)} className={clsx(classes.menuButton, { [classes.menuButtonClicked]: store.dialogMenuItem === 1, })}>
                                <Typography className={classes.buttonLabel}> Конфиденциальность </Typography>
                            </Button>
                            <Button onClick={() => store.setDialogMenuItem(2)} className={clsx(classes.menuButton, { [classes.menuButtonClicked]: store.dialogMenuItem === 2, })}>
                                <Typography className={classes.buttonLabel}> Boost Effect </Typography>
                            </Button>
                            <Divider className={classes.divider} />
                            <Typography className={classes.menuTypography}> Настройки Приложения </Typography>
                            <Button onClick={() => store.setDialogMenuItem(3)} className={clsx(classes.menuButton, { [classes.menuButtonClicked]: store.dialogMenuItem === 3, })}>
                                <Typography className={classes.buttonLabel}> Внешний вид </Typography>
                            </Button>
                            <Button onClick={() => store.setDialogMenuItem(4)} className={clsx(classes.menuButton, { [classes.menuButtonClicked]: store.dialogMenuItem === 4, })}>
                                <Typography className={classes.buttonLabel}> Уведомления </Typography>
                            </Button>
                            <Button onClick={() => store.setDialogMenuItem(5)} className={clsx(classes.menuButton, { [classes.menuButtonClicked]: store.dialogMenuItem === 5, })}>
                                <Typography className={classes.buttonLabel}> Язык </Typography>
                            </Button>
                            <Divider className={classes.divider} />
                            <Button className={classes.menuExitButton}>
                                <Typography className={classes.buttonExitLabel}> Выйти </Typography>
                            </Button>
                        </>
                    </Scrollbars>

                </Grid>
            </Box>
            <Box>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    {!store.settingsNew.emailConfirmed && <div className={classes.contentAlert}>
                        <Alert severity="info"> {`Внимание! Адрес электронной почты ${store.settingsNew.email}, привязанный к этому аккаунту не был подтверждён. На этот адрес должно было придти письмо с ссылкой для подтверждения. Если вы не можете его найти, проверьте папку спам или`} <Link onClick={sendEmail} className={classes.link}> нажмите здесь для повторной отправки </Link> </Alert>
                    </div>}
                    {store.dialogMenuItem === 0 && <div className={classes.content}>
                        <UserAccount />
                    </div>}
                    {store.dialogMenuItem === 1 && <div className={classes.content}>
                        1
                        </div>}
                    {store.dialogMenuItem === 2 && <div className={classes.content}>
                        2
                        </div>}
                    {store.dialogMenuItem === 3 && <div className={classes.content}>
                        <Castomize />
                    </div>}
                    {store.dialogMenuItem === 4 && <div className={classes.content}>
                        4
                        </div>}
                    {store.dialogMenuItem === 5 && <div className={classes.content}>
                        5
                        </div>}
                    {store.dialogMenuItem === 6 && <div className={classes.content}>
                        6
                        </div>}
                </Grid>
            </Box>
        </Grid>
    )
}))

export default SettingsUp