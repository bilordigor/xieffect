import React from 'react';
import { FormHelperText, TextField, NativeSelect, InputBase, Select, InputLabel, MenuItem, FormControl, withStyles, Button, Divider, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
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

import DateFnsUtils from '@date-io/date-fns';
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
        zIndex: 999,
    },
    rootTodo: {
        zIndex: 999,
    },
    TodoMenu: {
        width: '98%',
        height: '300px',
        zIndex: 999,
        border: '4px solid',
        borderColor: '#CFD5DA',
        borderRadius: 16,
        transition: '0.4s',
        '&:hover': {
            borderColor: 'white',
            //borderColor: '#5B9FED',
        },
        // backgroundColor: 'white', #e7af75 #fce481 #0C7BB3
        background: 'linear-gradient(-90deg, rgb(80,151,136, 0.85), rgb(4,40,75, 0.85))',
        // background: 'linear-gradient(90deg, #dbf2bc, #90e48e, #657d45)',
    },
    TodoHeader: {
        color: "white",
        [theme.breakpoints.down('sm')]: {
            marginTop: "14px",
            fontSize: 22
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 30
        },
        marginTop: '8px',
        marginLeft: '8px',
        cursor: 'default',
    },
    TimeHeader: {
        color: "white",
        [theme.breakpoints.down('sm')]: {
            fontSize: 20
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 25
        },
        marginTop: '8px',
        marginLeft: '8px',
        cursor: 'default',
    },
    dividerTodoHeader: {
        backgroundColor: '#CFD5DA',
    },
    addTask: {
        color: "white",
        borderColor: "white",
        minWidth: 190,
        height: "36px",
        marginTop: "8px",
        marginLeft: "auto",
        marginRight: "8px",
        marginBottom: "8px",
        // paddingRight: "8px",
    },
    categorySelect: {
        marginTop: '3px',
        marginLeft: '8px',

    },
    formControl: {
        margin: theme.spacing(1),
        width: 250,
        color: 'white',
        //backgroundColor: 'white',
        marginLeft: "auto",
        marginRight: "8px",
    },
    selectEmpty: {
        color: 'white',
        marginBottom: '8px',
    },
    gridDayButtom: {

    },
    dayButtom: {
        cursor: 'pointer',
        border: '2px solid',
        paddingTop: '4px',
        paddingBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '6px',
            marginRight: '6px',
        },
        [theme.breakpoints.only('sm')]: {
            marginLeft: '20px',
            marginRight: '20px',
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: '22px',
            marginRight: '22px',
        },

        borderColor: 'white',
        fontSize: 20,
        borderRadius: 4,
        width: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.27)',
        },
        '&:focus': {
            outline: 'none !important',
            backgroundColor: 'rgba(255, 255, 255, 0.37)',
        },
    },
    NavigateBeforeIcon: {
        paddingRight: '30px',
        cursor: 'pointer',
        border: '2px solid',
        borderColor: 'white',
        borderRadius: 4,
        width: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        color: 'white',
        '&:focus': {
            outline: 'none !important',
        },
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.27)',
        },
    },
    NavigateNextIcon: {
        paddingRight: '30px',
        cursor: 'pointer',
        border: '2px solid',
        borderColor: 'white',
        borderRadius: 4,
        width: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        color: 'white',
        '&:focus': {
            outline: 'none !important',
        },
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.27)',
        },
    },
    NavigateBeforeIconShift: {
        cursor: 'not-allowed',
        backgroundColor: 'rgba(117, 117, 117, 0.3)',
        color: 'white',
        borderColor: 'white',
        '&:hover': {
            backgroundColor: 'rgba(117, 117, 117, 0.57)',
        },
    },
    dataClicker: {
        marginTop: '8px',
    },
    weekday: {
        fontSize: 16,
    },
    TextField: {
        marginRight: 16,
        color: 'white',
    },
    textFieldTypography: {
        color: theme.main.palette.content.text,
        backgroundColor: theme.main.palette.content.text,
    }

}));



const Stepper = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    props.store.days()

    const setBefore = () => {
        props.store.navigateBeforeIcon()
        props.store.days()
    }

    const setNext = () => {
        props.store.navigateNextIcon()
        props.store.days()
    }

    return (
        < Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" className={classes.dataClicker} >
            <Grid className={classes.gridDayButtom} >
                <button
                    className={clsx(classes.NavigateBeforeIcon, { [classes.NavigateBeforeIconShift]: props.store.step === 0 })}
                    onClick={setBefore}
                    variant="outlined"
                    color="white">
                    <NavigateBeforeIcon />
                </button>
            </Grid>
            {
                props.store.daysArrow.map((day) => (
                    <Grid key={day.day} className={classes.gridDayButtom}>
                        <button value={day.day} variant="outlined" color="white" className={classes.dayButtom}>
                            {day.day}<br /><Typography className={classes.weekday}>{day.weekday}</Typography>
                        </button>
                    </Grid>
                ))
            }
            <Grid className={classes.gridDayButtom}>
                <button onClick={setNext} variant="outlined" color="white" className={classes.NavigateNextIcon}>
                    <NavigateNextIcon />
                </button>
            </Grid>
        </Grid >
    )

}))


const TodoList = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();


    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const onClickDateButton = (e) => {
        e.preventDefault()
    }

    //Датапикер
    const [value, setValue] = React.useState(new Date());

    return (
        <>
            <Grid spacing={1} container className={classes.root}>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container direction="column" className={classes.rootTodo}>
                    <Grid className={classes.TodoMenu}>
                        <Grid container diraction="row">
                            <Grid item xs>
                                <Typography className={classes.TodoHeader}> Планировщик </Typography>
                            </Grid>
                            <Grid item xs container justifyContent="flex-end">
                                <CustomButton variant="outlined" className={classes.addTask}> Создать задачу </CustomButton>
                            </Grid>
                        </Grid>
                        <Divider className={classes.dividerTodoHeader} />
                        <Grid container diraction="row">
                            <Grid item xs={5}>
                                <Typography variant="h6" className={classes.TimeHeader}>Сейчас - <Moment format="HH:mm" interval={1000} /></Typography>
                            </Grid>
                            <Grid item xs container justifyContent="flex-end">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <MobileDatePicker
                                        label="For mobile"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} margin="normal" variant="standard" />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Stepper />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>

                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>

                </Grid>
            </Grid>
        </>
    )
}))

export default TodoList