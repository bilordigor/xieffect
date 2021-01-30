import React from 'react';
import { Box, FormHelperText, TextField, NativeSelect, InputBase, Select, InputLabel, MenuItem, FormControl, withStyles, Button, Divider, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import Moment from "react-moment";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { inject, observer } from 'mobx-react'
import clsx from 'clsx';

import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
//import DatePicker from '@material-ui/lab/DatePicker';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
//import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import AddTaskIcon from '@material-ui/icons/AddTask';
import OpenInFullIcon from '@material-ui/icons/OpenInFull';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DateFnsUtils from '@date-io/date-fns';
import HistoryIcon from '@material-ui/icons/History';

import UseAnimations from 'react-useanimations';
import arrowRightCircle from 'react-useanimations/lib/arrowRightCircle'

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const CustomButton = withStyles((theme) => ({
    root: {
        borderColor: 'white',
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.27)',
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing(3),
        },
        [theme.breakpoints.only('sm')]: {
            marginTop: theme.spacing(3),
        },
        marginTop: '-20px',
        //width: '100%',
        //backgroundColor: 'blue',
        zIndex: 100,
    },
    rootTodo: {
        zIndex: 999,
    },
    TodoMenu: {
        position: 'relative',
        //paddingLeft: 4,
        // border: '4px solid',
        // borderColor: theme.main.palette.content.border,
        borderRadius: 4,
        transition: '0.4s',
        '&:hover': {
            borderColor: theme.main.palette.main.main,
        },
        // marginTop: theme.spacing(8),
        height: 'auto',
        transition: '0.3s',
        width: '99%',
        overflow: 'initial',
        background: theme.main.palette.content.background,
        // width: '98%',
        // height: '300px',
        // zIndex: 999,
        // border: '4px solid',
        // borderColor: '#CFD5DA',
        // borderRadius: 16,
        // transition: '0.4s',
        // '&:hover': {
        //     borderColor: 'white',
        //     //borderColor: '#5B9FED',
        // },
        // // backgroundColor: 'white', #e7af75 #fce481 #0C7BB3
        // background: 'linear-gradient(-90deg, rgb(80,151,136, 0.85), rgb(4,40,75, 0.85))',
        // // background: 'linear-gradient(90deg, #dbf2bc, #90e48e, #657d45)',
    },
    TodoHeader: {
        color: theme.main.palette.content.text,
        // [theme.breakpoints.down('sm')]: {
        //     marginTop: "14px",
        //     fontSize: 22
        // },
        // [theme.breakpoints.up('sm')]: {
        //     fontSize: 30
        // },
        fontSize: 28,
        marginTop: '8px',
        marginLeft: '8px',
        cursor: 'default',
    },
    TimeHeader: {
        color: theme.main.palette.content.text,
        // [theme.breakpoints.down('sm')]: {
        //     fontSize: 20
        // },
        // [theme.breakpoints.up('sm')]: {
        //     fontSize: 25
        // },
        fontSize: 20,
        marginTop: '8px',
        marginLeft: '8px',
        cursor: 'default',
    },
    dividerTodoHeader: {
        backgroundColor: '#CFD5DA',
    },
    icons: {
        color: theme.main.palette.content.icon,
    },
    gridTask: {
        borderRadius: 4,
        height: 74,
        width: '99%',
        margin: 4,
        //backgroundColor: '#37474f',
        //backgroundColor: theme.main.palette.content.text,
        //backgroundColor: theme.main.palette.content.border,
    },
    gridTaskIcon: {
        height: 64,
        width: 64,
        borderRadius: 12,
        margin: 5,
        backgroundColor: '#388e3c',
        cursor: 'pointer',
        transition: '0.4s',
        '&:hover': {
            backgroundColor: '#4caf50',
            // color: theme.main.palette.header.icon,
            cursor: 'pointer',
            // border: '10px solid',
        }
    },
    gridTaskTime: {
        margin: 5,
        marginTop: 16,

    },
    taskTime: {
        color: theme.main.palette.content.text,
    },
    gridButtom: {
        marginLeft: 'auto',
        paddingRight: 4,
    },
    taskLabel: {
        color: theme.main.palette.content.text,
        fontSize: 22,
    },
    infoLabel: {
        color: theme.main.palette.content.text,
        fontSize: 18,
    },
    gridLabel: {
        margin: 4,
    },
    DoneIcon: {
        height: 48,
        width: 48,
        color: theme.main.palette.navbar.iconMenu,
        marginLeft: 4,
        marginTop: 4,
    },
    buttonTaskIcon: {
        height: 64,
        width: 64,
        borderRadius: 16,
    },
    space: {
        height: 50,
    },
    rootGridLastActive: {
        margin: 2,
    }

}));



const ToDo = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    const setIcon = (key) => {
        //console.log('!', key)
        props.store.setIsIcon(key)
    }

    return (
        <Grid className={classes.TodoMenu}>
            <Grid container diraction="row">
                <Grid item xs>
                    <Typography className={classes.TodoHeader}> Планировщик </Typography>
                </Grid>
                <Grid item xs container justifyContent="flex-end">
                    <Button>
                        <AddTaskIcon className={classes.icons} />
                    </Button>
                    <Button>
                        <OpenInFullIcon className={classes.icons} />
                    </Button>
                </Grid>

            </Grid>
            <Divider className={classes.dividerTodoHeader} />
            <Grid container diraction="row">
                <Grid item>
                    <Typography className={classes.TimeHeader}> Задачи на сегодня: </Typography>
                </Grid>
            </Grid>
            {/* Начало списка дел */}
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                className={classes.rootGridLastActive}
            >
                {props.store.todoList.map((obj) => (
                    <Grid key={obj.key} container direction="row" className={classes.gridTask}>
                        <Grid item className={classes.gridTaskTime}>
                            <Typography className={classes.taskTime}> {obj.time} </Typography>
                        </Grid>
                        <Grid item className={classes.gridTaskIcon}>
                            <Button className={classes.buttonTaskIcon} onClick={() => setIcon(obj.key)}>
                                {obj.done && <DoneIcon className={classes.DoneIcon} />}
                            </Button>
                        </Grid>
                        <Grid
                            item

                            className={classes.gridLabel}
                        >
                            <Typography className={classes.taskLabel}>{obj.task}</Typography>
                            <Typography className={classes.infoLabel}>{obj.info}</Typography>
                        </Grid>
                        <Grid
                            item

                            className={classes.gridButtom}
                        >
                            <Grid>
                                <Button>
                                    <DeleteIcon className={classes.icons} />
                                </Button>
                            </Grid>
                            <Grid>
                                <Button>
                                    <ExpandMoreIcon className={classes.icons} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}

            </Grid>
            <Box className={classes.space}>

            </Box>
        </Grid>
    )

}))


const useStylesLastActive = makeStyles((theme) => ({
    LastActive: {
        position: 'relative',
        //paddingLeft: 4,
        // border: '4px solid',
        // borderColor: theme.main.palette.content.border,
        borderRadius: 4,
        transition: '0.4s',
        '&:hover': {
            borderColor: theme.main.palette.main.main,
        },
        // marginTop: theme.spacing(8),
        height: 'auto',
        transition: '0.3s',
        width: '99%',
        overflow: 'initial',
        background: theme.main.palette.content.background,
    },
    LastActiveHeader: {
        color: theme.main.palette.content.text,
        fontSize: 28,
        marginTop: '8px',
        marginLeft: '8px',
        padding: 0,
        cursor: 'default',
    },
    TimeHeader: {
        color: theme.main.palette.content.text,
        fontSize: 20,
        marginTop: '8px',
        marginLeft: '8px',
        cursor: 'default',
    },
    dividerLastActiveHeader: {
        backgroundColor: '#CFD5DA',
    },

    gridLastActiveIcon: {
        height: 60,
        width: 60,
        borderRadius: 20,
        margin: 5,
        backgroundColor: '#f57c00',
        cursor: 'pointer',
        transition: '0.4s',
        '&:hover': {
            backgroundColor: '#fb8c00',
            // color: theme.main.palette.header.icon,
            cursor: 'pointer',
            // border: '10px solid',
        }
    },
    icons: {
        color: theme.main.palette.content.icon,
    },
    gridButtom: {
        marginLeft: 'auto',
        paddingRight: 4,
    },
    taskLabel: {
        color: theme.main.palette.content.text,
        fontSize: 18,
        //width: '100%',
        padding: 0,
        margin: 0,
        //wordBreak: 'break-all',
    },
    infoLabel: {
        color: theme.main.palette.content.text,
        fontSize: 18,
    },
    gridLabel: {
        margin: 4,
        //paddingRight: 30,
        padding: 0,
        width: '70%',
        marginTop: 8,
    },
    DeleteForeverIcon: {
        height: 36,
        width: 36,
        color: theme.main.palette.navbar.iconMenu,
        marginLeft: 0,
        marginTop: 0,
    },
    buttonLastActiveIcon: {
        marginLeft: -4,
        height: 60,
        width: 60,
        borderRadius: 20,
    },
    gridButtonEnd: {
        marginLeft: 'auto',
        marginRight: 4,
        marginTop: 12,
    },
    UseAnimations: {
        // marginLeft: 'auto',
        // marginRight: 4,
        cursor: 'pointer',
    },
    gridLastActive: {
        //borderRadius: 37,
        height: 74,
        width: '99%',
        margin: 4,
        //backgroundColor: '#37474f',
        //backgroundColor: theme.main.palette.content.text,
        //backgroundColor: theme.main.palette.content.border,
    },
    rootGridLastActive: {
        margin: 2,
    }
}));

const LastActive = inject('store')(observer((props) => {
    const classes = useStylesLastActive();
    const theme = useTheme();

    // const setIcon = (key) => {
    //     //console.log('!', key)
    //     props.store.setIsIcon(key)
    // }

    return (
        <Grid className={classes.LastActive}>
            <Grid container diraction="row">
                <Grid item>
                    <Typography className={classes.LastActiveHeader}> Последняя активность </Typography>
                </Grid>
                <Grid item container xs justifyContent="flex-end">
                    <Button>
                        <OpenInFullIcon className={classes.icons} />
                    </Button>
                </Grid>
            </Grid>
            <Divider className={classes.dividerLastActiveHeader} />
            {/* <Grid container diraction="row">
                <Grid item>
                    <Typography className={classes.TimeHeader}> Задачи на сегодня: </Typography>
                </Grid>
            </Grid> */}
            {/* Начало списка дел */}
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                className={classes.rootGridLastActive}
            >
                {props.store.lastActiveList.map((obj) => (
                    < Grid key={obj.key} container direction="row" className={classes.gridLastActive} >
                        <Grid item className={classes.gridLastActiveIcon}>
                            {/* onClick={() => setIcon(obj.key)} */}
                            <Button className={classes.buttonLastActiveIcon} >
                                <HistoryIcon className={classes.DeleteForeverIcon} />
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridLabel}>
                            <Typography noWrap={false} className={classes.taskLabel}>{obj.label}</Typography>
                            {/* <Typography className={classes.infoLabel}>{obj.info}</Typography> */}
                        </Grid>
                        <Grid item className={classes.gridButtonEnd}>
                            {props.store.userData.isDarkMode && <UseAnimations className={classes.UseAnimations} strokeColor={'#e0e0e0'} animation={arrowRightCircle} size={48} style={{}} speed={1} />}
                            {!props.store.userData.isDarkMode && <UseAnimations className={classes.UseAnimations} strokeColor={'#424242'} animation={arrowRightCircle} size={48} style={{}} speed={1} />}
                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </Grid >
    )

}))

const useStylesNotifications = makeStyles((theme) => ({
    Notifications: {
        position: 'relative',
        //paddingLeft: 4,
        // border: '4px solid',
        // borderColor: theme.main.palette.content.border,
        borderRadius: 4,
        transition: '0.4s',
        '&:hover': {
            borderColor: theme.main.palette.main.main,
        },
        // marginTop: theme.spacing(8),
        height: 'auto',
        transition: '0.3s',
        width: '99%',
        overflow: 'initial',
        background: theme.main.palette.content.background,
    },
    NotificationsHeader: {
        color: theme.main.palette.content.text,
        fontSize: 28,
        marginTop: '8px',
        marginLeft: '8px',
        padding: 0,
        cursor: 'default',
    },
    TimeHeader: {
        color: theme.main.palette.content.text,
        fontSize: 20,
        marginTop: '8px',
        marginLeft: '8px',
        cursor: 'default',
    },
    dividerNotifications: {
        backgroundColor: '#CFD5DA',
    },
    icons: {
        color: theme.main.palette.content.icon,
    },
    gridNote: {
        //borderRadius: 37,
        height: 74,
        width: '99%',
        margin: 4,
        //backgroundColor: '#37474f',
        //backgroundColor: theme.main.palette.content.text,
        //backgroundColor: theme.main.palette.content.border,
    },
    gridNoteIcon: {
        height: 56,
        width: 56,
        borderRadius: 28,
        margin: 5,
        backgroundColor: '#0091ea',
        cursor: 'pointer',
        transition: '0.4s',
        '&:hover': {
            backgroundColor: '#01579b',
            // color: theme.main.palette.header.icon,
            cursor: 'pointer',
            // border: '10px solid',
        }
    },
    gridTaskTime: {
        margin: 5,
        marginTop: 16,
    },
    taskTime: {
        color: theme.main.palette.content.text,
    },
    gridButtom: {
        marginLeft: 'auto',
        paddingRight: 4,
    },
    taskLabel: {
        color: theme.main.palette.content.text,
        fontSize: 18,
        //width: '100%',
        padding: 0,
        margin: 0,
        //wordBreak: 'break-all',
    },
    infoLabel: {
        color: theme.main.palette.content.text,
        fontSize: 18,
    },
    gridLabel: {
        margin: 4,
        //paddingRight: 30,
        padding: 0,
        width: '70%',
        marginTop: 8,
    },
    DeleteForeverIcon: {
        height: 36,
        width: 36,
        color: theme.main.palette.navbar.iconMenu,
        marginLeft: 0,
        marginTop: 0,
    },
    buttonNoteIcon: {
        marginLeft: -4,
        height: 56,
        width: 56,
        borderRadius: 28,
    },
    gridButtonEnd: {
        marginLeft: 'auto',
        marginRight: 4,
        marginTop: 12,
    },
    UseAnimations: {
        // marginLeft: 'auto',
        // marginRight: 4,
        cursor: 'pointer',
    },
    rootGridLastActive: {
        margin: 2,
    }
}));

const Notifications = inject('store')(observer((props) => {
    const classes = useStylesNotifications();
    const theme = useTheme();

    const setIcon = (key) => {
        //console.log('!', key)
        //props.store.setIsIcon(key)
    }

    return (
        <Grid className={classes.Notifications}>
            <Grid container diraction="row">
                <Grid item>
                    <Typography className={classes.NotificationsHeader}> Уведомления </Typography>
                </Grid>
                <Grid item container xs justifyContent="flex-end">
                    <Button>
                        <OpenInFullIcon className={classes.icons} />
                    </Button>
                </Grid>
            </Grid>
            <Divider className={classes.dividerNotifications} />
            {/* <Grid container diraction="row">
                <Grid item>
                    <Typography className={classes.TimeHeader}> Задачи на сегодня: </Typography>
                </Grid>
            </Grid> */}
            {/* Начало списка дел */}
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                className={classes.rootGridLastActive}
            >
                {props.store.NoteList.map((obj) => (
                    <Grid key={obj.key} container direction="row" className={classes.gridNote}>
                        <Grid item className={classes.gridNoteIcon}>
                            <Button className={classes.buttonNoteIcon} onClick={() => setIcon(obj.key)}>
                                <DeleteForeverIcon className={classes.DeleteForeverIcon} />
                            </Button>
                        </Grid>
                        <Grid item className={classes.gridLabel}>
                            <Typography noWrap={false} className={classes.taskLabel}>{obj.label}</Typography>
                            {/* <Typography className={classes.infoLabel}>{obj.info}</Typography> */}
                        </Grid>
                        <Grid item className={classes.gridButtonEnd}>
                            {props.store.userData.isDarkMode && <UseAnimations className={classes.UseAnimations} strokeColor={'#e0e0e0'} animation={arrowRightCircle} size={48} style={{}} speed={1} />}
                            {!props.store.userData.isDarkMode && <UseAnimations className={classes.UseAnimations} strokeColor={'#424242'} animation={arrowRightCircle} size={48} style={{}} speed={1} />}
                        </Grid>
                    </Grid>
                ))}

            </Grid>
        </Grid>
    )

}))


const MainApp = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Grid spacing={2} container className={classes.root}>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container direction="column" className={classes.rootTodo}>
                    <ToDo />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
                    <LastActive />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
                    <Notifications />
                </Grid>
            </Grid>
        </>
    )
}))

export default MainApp