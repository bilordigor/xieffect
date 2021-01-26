import React, { useState, useEffect } from 'react';

import cx from 'clsx';
import axios from 'axios';
import { Divider, IconButton, CardMedia, Avatar, CardContent, CardHeader, Menu, MenuItem, Button, Card, CardActions, Grid, Box, Typography, makeStyles, useTheme } from '@material-ui/core';

// import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
// import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
// import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Page from 'react-page-loading'

import { useSnackbar } from 'notistack';

import { inject, observer } from 'mobx-react'

const useStyles = makeStyles((theme) => ({
    card: {
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

        transition: '0.3s',
        width: '99%',
        overflow: 'initial',
        background: theme.main.palette.content.background,
    },
    content: {
        paddingTop: 6,
        textAlign: 'left',
        overflowX: 'auto',
        '& table': {
            marginBottom: 0,
        }
    },
    gridCard: {
        paddingRight: 2,
        paddingLeft: 2,
        paddingBottom: 20,
    },
    cardbegin: {
        zIndex: 999,

        // [theme.breakpoints.only('xs')]: {
        //     paddingLeft: theme.spacing(2),
        // },
        marginBottom: theme.spacing(12),
        height: '100%',
        width: '100%',
        marginRight: '-50px',
        // paddingLeft: theme.spacing(12),
        // paddingRight: theme.spacing(2),
        // backgroundColor: "blue"
    },
    media:
    {
        height: 180,
        width: 320,
        paddingTop: '56.25%', // 16:9
    },
    boxCardHeader: {
        paddingTop: -8,
    },
    cardHeader: {
        color: theme.main.palette.content.text,
    },
    avatar: {
        borderRadius: 8,
        backgroundColor: theme.main.palette.content.secondary,
    },
    overline: {
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: theme.main.palette.content.text,
    },
    name: {
        fontSize: 16,
        fontWeight: 500,
        color: theme.main.palette.content.text,
    },
    gridcreater: {
        paddingLeft: theme.spacing(1.5),
    },
    userownerinfo: {
        paddingTop: theme.spacing(1.5),
        width: 'auto',
        marginRight: 'auto',
    },
    CardActionsCenterButton: {
        marginTop: "5px",
        height: "40px",
        marginBottom: "5px",
    },
    CardContentGrid: {
        width: "100%"
    },
    CardContentSmallActionButtom: {
        marginTop: "8px",
    },
    gridDivider: {
        marginTop: 100,
    },
    icons: {
        color: theme.main.palette.content.icon,
    },
    Menu: {
        color: theme.main.palette.content.border,
    },
    media: {
        height: 320,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        marinLeft: 0,
        marginRight: 0,
    },
    title: {
        fontSize: 28,
        color: theme.main.palette.content.text,
    },
    subtitle: {
        fontSize: 20,
        color: theme.main.palette.content.text,
    },
    Page: {
        height: 320,
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        marinLeft: 0,
        marginRight: 0,
    }
}));



const CoursesList = inject('store')(observer(({ store }) => {
    const classes = useStyles();
    const theme = useTheme();
    // console.log(store)
    // console.log(data)
    const options = [
        'Скрыть курс',
        'Пожаловаться',
        'Добавить в Избранное',
        'Закрепить',
    ];

    const ITEM_HEIGHT = 48;

    //const courseList = data.courseList
    const courseList = store.courseList

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        // enqueueSnackbar('Ссылка на курс успешно скопирована в буффер обмена', { variant });
    };

    // React.useEffect = () => {
    //     async function fetchData() {
    //         const res = await fetch(`http://localhost:4200/courses`)
    //         const data = await res.json()
    //         console.log(data)
    //         store.setCourseList(data)
    //     }
    // }

    // useEffect(() => {
    //     // const result = await axios(
    //     //     'http://localhost:4200/courses',
    //     // );
    //     async function fetchData() {
    //         const res = await fetch(`http://localhost:4200/courses`)
    //         const data = await res.json()
    //         console.log(data)
    //         store.setCourseList(data)
    //     }
    // });

    useEffect(() => {
        if (window.location.href.indexOf('local')) {
            fetch("http://localhost:4200/courses")
                .then((response) => response.json())
                .then((data) => {
                    store.setCourseList(data) // new
                })
        }
        else {
            store.setCourseList([
                { key: '1', id: '1', nameCourse: 'Английский язык', secondNameCourse: 'Школьный курс', courseAvatar: "/education/bigben1.jpg", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
                { key: '2', id: '2', nameCourse: 'История', secondNameCourse: 'ЕГЭ', courseAvatar: "/education/historyEGE.jpeg", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
                { key: '3', id: '3', nameCourse: 'Цифровая Культура', secondNameCourse: 'Школьный курс', courseAvatar: "/education/internetculture.jpg", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
                { key: '4', id: '4', nameCourse: 'История', secondNameCourse: 'Школьный курс', createrName: 'Ξ Effect', courseAvatar: "/education/historyjpg.jpg", createrAvatar: 'Ξ' },
                { key: '5', id: '5', nameCourse: 'Литература', secondNameCourse: 'Школьный курс', courseAvatar: "/education/literature.jpg", createrName: 'Ξ Effect', createrAvatar: 'Ξ' },
                { key: "6", id: "6", nameCourse: "Робототехника",secondNameCourse: "Кружок ", courseAvatar: "/education/robotechnik.jpg", createrName: "Ξ Effect", createrAvatar: "Ξ"},
                { key: "7", id: "7", nameCourse: "Профильная Математика", secondNameCourse: "ЕГЭ", courseAvatar: "/education/math.jpg", createrName: "Ξ Effect", createrAvatar: "Ξ"},
                { key: "8", id: "8", nameCourse: "Веб Дизайн", secondNameCourse: "Кружок", courseAvatar: "/education/webdesign.jpg", createrName: "Ξ Effect", createrAvatar: "Ξ"}
            ])
        }
    }, [])

    return (

        <Grid container className={classes.cardbegin}>
            {
                store.courseList.map((course) => (
                    <Grid xs={12} sm={12} md={6} lg={4} xl={3} item className={classes.gridCard} container key={course.key}>
                        <Card className={cx(classes.card)} key={course.key}>
                            <Box className={classes.boxCardHeader}>
                                <CardHeader
                                    className={classes.cardHeader}
                                    title={<Typography className={classes.title}>{course.nameCourse}</Typography>}
                                    subheader={<Typography className={classes.subtitle}>{course.secondNameCourse}</Typography>}
                                />
                            </Box>
                            <div className={classes.Page}>
                                <Page loader="bar" color={"#4452b8"} size={16}>
                                    <CardMedia
                                        className={classes.media}
                                        image={course.courseAvatar}
                                    />
                                </Page>
                            </div>

                            <CardContent className={classes.content}>
                                {/* <img
                                    className={classes.media}
                                    src={course.courseAvatar}
                                /> */}
                                <Grid container item direction="row" justifyContent="flex-end" xs={12} className={classes.CardContentGrid}>
                                    <Grid container direction='row' className={classes.userownerinfo}>
                                        <Grid><Avatar className={classes.avatar}>{course.createrAvatar}</Avatar></Grid>
                                        <Grid className={classes.gridcreater}>
                                            <Typography className={classes.overline}>Создатель</Typography>
                                            <Typography className={classes.name}>{course.createrName}</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid className={classes.CardContentSmallActionButtom}>
                                        <IconButton onClick={handleClickVariant('success')} color="primary" aria-label="add an alarm">
                                            <ShareOutlinedIcon className={classes.icons} />
                                        </IconButton>
                                    </Grid>
                                    <Grid className={classes.CardContentSmallActionButtom}>
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreVertIcon className={classes.icons} />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '30ch',
                                                    backgroundColor: theme.main.palette.content.border,
                                                    color: theme.main.palette.content.text,
                                                },
                                            }}
                                        >
                                            {options.map((option) => (
                                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <Grid spacing={1} container justifyContent="center" className={classes.CardActions}>
                                    <Grid>
                                        <Button variant="contained" color="primary" className={classes.CardActionsCenterButton}>
                                            <Typography variant="subtitle1">Приступить к курсу</Typography>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                ))

            }
        </Grid>
    )
}));



export default CoursesList;