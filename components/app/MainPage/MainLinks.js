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

const useStylesFirstLink = makeStyles((theme) => ({
    rootLink: {
        [theme.breakpoints.up('xs')]: {
            height: '72px',
            margin: 16,
        },
        [theme.breakpoints.only('xs')]: {
            height: '58px',
            margin: 6,
        },
        width: '80%',
        
        borderRadius: '16px',
    },
    ButtonLink: {
        width: '80%',
        [theme.breakpoints.up('xs')]: {
            height: '72px',
        },
        [theme.breakpoints.only('xs')]: {
            height: '58px',
        },
        borderRadius: '16px',
        backgroundColor: 'rgb(56, 142, 60, 0.6)', //'#388e3c'
        cursor: 'pointer',
        transition: '0.4s',
        '&:hover': {
            backgroundColor: 'rgb(75, 175, 80, 0.6)', //'#4caf50'
        }
    },
    TypographyLink: {
        color: theme.main.palette.navbar.iconMenu,
        [theme.breakpoints.up('xs')]: {
            fontSize: 30,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 22,
        },
    }
}));


const FirstLink = inject('store')(observer((props) => {
    const classes = useStylesFirstLink();
    const theme = useTheme();


    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.rootLink}>
            <Button className={classes.ButtonLink}>
                <Typography className={classes.TypographyLink}> Учительская </Typography>
            </Button>
        </Grid>
    )

}))

const useStylesSecondLink = makeStyles((theme) => ({
    rootLink: {
        [theme.breakpoints.up('xs')]: {
            height: '72px',
            margin: 16,
        },
        [theme.breakpoints.only('xs')]: {
            margin: 6,
            height: '58px',
        },
        width: '80%',
        borderRadius: '16px',

    },
    ButtonLink: {
        width: '80%',
        [theme.breakpoints.up('xs')]: {
            height: '72px',
        },
        [theme.breakpoints.only('xs')]: {
            height: '58px',
        },
        borderRadius: '16px',
        backgroundColor: 'rgb(245, 124, 0, 0.6)', //'#f57c00'
        cursor: 'pointer',
        transition: '0.4s',
        '&:hover': {
            backgroundColor: 'rgb(251, 140, 0, 0.6)', //'#fb8c00'
        }
    },
    TypographyLink: {
        color: theme.main.palette.navbar.iconMenu,
        [theme.breakpoints.up('xs')]: {
            fontSize: 30,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 22,
        },
    }
}));

const SecondLink = inject('store')(observer((props) => {
    const classes = useStylesSecondLink();
    const theme = useTheme();


    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.rootLink}>
            <Button className={classes.ButtonLink}>
                <Typography className={classes.TypographyLink}> Учебный процесс </Typography>
            </Button>
        </Grid>
    )

}))

const useStylesThirdLink = makeStyles((theme) => ({
    rootLink: {
        [theme.breakpoints.up('xs')]: {
            height: '72px',
            margin: 16,
        },
        [theme.breakpoints.only('xs')]: {
            margin: 6,
            height: '58px',
        },
        width: '80%',
        borderRadius: '16px',

    },
    ButtonLink: {
        width: '80%',
        [theme.breakpoints.up('xs')]: {
            height: '72px',
        },
        [theme.breakpoints.only('xs')]: {
            height: '58px',
        },
        borderRadius: '16px',
        backgroundColor: 'rgb(0, 145, 234, 0.6)', //'#0091ea'
        cursor: 'pointer',
        transition: '0.4s',
        '&:hover': {
            backgroundColor: 'rgb(1, 87, 155, 0.6)', // '#01579b'
        }
    },
    TypographyLink: {
        color: theme.main.palette.navbar.iconMenu,
        
        [theme.breakpoints.up('xs')]: {
            fontSize: 30,
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: 22,
        },
    }
    // main: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '100%',
    //     height: '300px',
    //     margin: 0,
    //     padding: 0,
    //     //zIndex: 300,
    // },
    // box: {
    //     margin: 0,
    //     padding: 0,
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     color: 'rgb(80, 80, 80)',
    //     width: '250px',
    //     height: '250px',
    //     backgroundColor: 'rgb(24, 24, 24)',
    //     fontSize: '2rem',
    //     fontFamily: 'cursive',
    //     position: 'relative',
    //     //zIndex: 300,
    //     "&:before": {
    //         position: 'absolute',
    //         content: '""',
    //         width: '258px',
    //         height: '258px',
    //         background: 'linear-gradient(45deg, #3dec28, #000000, #000000, #1c58c9)',
    //         zIndex: -1,
    //         transition: 'all .6s',
    //     },
    // },
}));

const ThirdLink = inject('store')(observer((props) => {
    const classes = useStylesThirdLink();
    const theme = useTheme();


    return (
        <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.rootLink}>
            <Button className={classes.ButtonLink}>
                <Typography className={classes.TypographyLink}> Успеваемость </Typography>
            </Button>
        </Grid>
    )

}))

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 10,
    }
}));

const MainLinks = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Grid spacing={2} container className={classes.root}>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container direction="row" justifyContent="center" alignItems="center" >
                    <FirstLink />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container direction="row" justifyContent="center" alignItems="center" >
                    <SecondLink />
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container direction="row" justifyContent="center" alignItems="center" >
                    <ThirdLink />
                </Grid>
            </Grid>
        </>
    )
}))

export default MainLinks