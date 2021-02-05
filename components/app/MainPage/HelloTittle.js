import React from 'react';
import { Divider, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    preroot: {
        zIndex: 999,
    },
    root: {
        //width: '100%',
        //backgroundColor: 'blue',
        zIndex: 999,
    },
    gridTypographyGetDaysPart: {
        width: 220,
        zIndex: 999,
    },
    gridTypographyDate: {
        //width: 220,
        zIndex: 999,
        marginLeft: 'auto',
        marginRight: 0,
    },
    typographyGetDaysPart: {
        cursor: 'default',
        zIndex: 999,
        //color: '#757575',
        fontSize: 32,
        width: 230,
        color: theme.main.palette.content.text,
        marginTop: '4px',
    },
    typographyDate: {
        cursor: 'default',
        zIndex: 999,
        //color: '#9e9e9e',
        //width: 220,
        color: theme.main.palette.content.text,
        marginTop: '12px',
        marginLeft: 'auto',
        marginRight: 0,
        [theme.breakpoints.only('xs')]: {
            fontSize: 18,
            marginTop: '20px',
        },
        fontSize: 24,

        
    },
    gridDividerUnderHelloTittle: {
        zIndex: 99,
        marginTop: '5px',
        marginBottom: '5px',
    },
    dividerUnderHelloTittle: {
        marginTop: '5px',
        height: '2px',
        width: '100%',
        zIndex: 999,
        backgroundColor: 'blue',
    }
}));

const getDaysPart = () => {
    let now = new Date();
    if (now.getHours() >= 4 && now.getHours() <= 11) return "Доброе утро"
    else if (now.getHours() >= 12 && now.getHours() <= 16) return "Добрый день"
    else if (now.getHours() >= 17 && now.getHours() <= 23) return "Добрый вечер"
    else if (now.getHours() >= 0 && now.getHours() <= 3) return "Доброй ночи"
}

const getWeekDay = () => {
    let now = new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = now.getDay()
    return days[day]
}

const getDate = () => {
    let now = new Date();
    return now.getDate().toString()
}

const getMonth = () => {
    let now = new Date();
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    let month = now.getMonth()
    return months[month]
}



const HelloTittle = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container direction="row" justifyContent="flex-start" className={classes.root}>
            <Grid item className={classes.gridTypographyGetDaysPart}>
                <Typography className={classes.typographyGetDaysPart}> {getDaysPart() + ' '} </Typography>
            </Grid>
            <Grid item className={classes.gridTypographyDate}>
                <Typography className={classes.typographyDate}> {getWeekDay() + ',  ' + getDate() + ' ' + getMonth()} </Typography>
            </Grid>
        </Grid>
    )
}

setInterval(getDaysPart, 60000);
setInterval(getWeekDay, 60000);
setInterval(getDate, 60000);
setInterval(getMonth, 60000);

export default HelloTittle