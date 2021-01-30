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
        zIndex: 999,
    },
    typographyGetDaysPart: {
        cursor: 'default',
        zIndex: 999,
        //color: '#757575',
        color: theme.main.palette.content.text,
        marginTop: '4px',
    },
    typographyWeekday: {
        cursor: 'default',
        zIndex: 999,
        position: 'absolute',
        //color: '#9e9e9e',
        color: theme.main.palette.content.text,
        right: '170px',
        marginTop: '20px',
    },
    typographyDate: {
        cursor: 'default',
        zIndex: 999,
        position: 'absolute',
        //color: '#9e9e9e',
        color: theme.main.palette.content.text,
        right: '10px',
        marginTop: '20px',
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
        <Grid container justifyContent="flex-start" className={classes.root}>
            <Grid item xs={12} sm={12} md={6} className={classes.gridTypographyGetDaysPart}>
                <Typography className={classes.typographyGetDaysPart} variant="h4"> {getDaysPart() + ' '} </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.gridTypographyWeekday}>
                {/* <Typography className={classes.typographyWeekday} variant="h4"> {getWeekDay() + ','} </Typography> */}
                <Typography className={classes.typographyDate} variant="h5"> {getWeekDay() + ',  ' + getDate() + ' ' + getMonth()} </Typography>
            </Grid>
        </Grid>
    )
}

setInterval(getDaysPart, 60000);
setInterval(getWeekDay, 60000);
setInterval(getDate, 60000);
setInterval(getMonth, 60000);

export default HelloTittle