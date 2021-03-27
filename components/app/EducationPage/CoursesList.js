import React, { useState, useEffect } from 'react';
import Link from "next/link";
import cx from 'clsx';
import { Popper, MenuList, Paper, Grow, ClickAwayListener, Divider, IconButton, Skeleton, CardMedia, Avatar, CardContent, CardHeader, Menu, MenuItem, Button, Card, CardActions, Grid, Box, Typography, makeStyles, useTheme } from '@material-ui/core';

// import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
// import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
// import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import PushPinIcon from '@material-ui/icons/PushPin';
import Page from 'react-page-loading'

import { SnackbarProvider, useSnackbar } from 'notistack';

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
        //marginBottom: 16,
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
    iconsPush: {
        color: "#8bc34a",
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
    },
    popper: {
        zIndex: 1000,
        //position: 'fixed',
    },
}));

const coursesThemeList = {
    "math": "Математика",
    "algebra": "Алгебра",
    "geometry": "Геометрия",
    "languages": "Языки",
    "physics": "Физика",
    "chemistry": "Химия",
    "biology": "Биология",
    "geography": "География",
    "history": "История",
    "social-science": "Обществознание",
    "philosophy": "Философия",
    "literature": "Литература",
    "arts": "Искусства",
    "informatics": "Информатика",
}

const coursesImgList = {
    "Робототехника": "/education/robotechnik.jpg",
    "Безопасность в интернете": "/education/secureInInternet.jpg",
    "Математика ЕГЭ": "/education/mathEGE.jpg",
    "English ABCs": "/education/EnglishABC.jpg",
    "Веб Дизайн": "/education/webdesign.jpg",
    "Классическая Музыка": "/education/musicClassic.jpg",
    "География": "/education/geography.jpg",
    "Геодезия": "/education/geodesia.jpg",
    "Океанология": "/education/oceanology.jpg",
    "Социология": "/education/sociology.jpg",
    "нформатика 7 класс": "/education/informatica.jpg",
    "Литература Европы XX века": "/education/literatureXX.jpg",
    "Python": "/education/python.jpg",
    "Ораторское искусство": "/education/publicSpeaking.jpg",
    "стория ЕГЭ": "/education/historyEGE.jpg",
    "Немецкий язык": "/education/deutsch.jpg",
    "Классическая философия": "/education/classicPhilosophy.jpg",
    "Литература": "/education/literature.jpg",
    "стория России": "/education/historyRussia.jpg",
    "Арифметика": "/education/arifmetic.jpg",
    "Архитектура XIX века": "/education/architecture.jpg",
    "Матан": "/education/math.jpg",
    "Физика: термодинамика": "/education/phi.jpeg",
}

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


    const courseList = store.courseList

    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const handleClick = (event) => {
    //     setAnchorEl(anchorEl ? null : event.currentTarget);
    //     //console.log( "event.currentTarget", event.currentTarget )
    // };
    // const handleClose = () => {
    // };
    // const open = Boolean(anchorEl);
    // const idP = open ? 'simple-popper' : undefined;

    const { enqueueSnackbar } = useSnackbar();

    const setStarred = (id, bool) => {
        console.log("idSt", id, bool)
        let answer
        let value
        if (bool) {
            answer = { "a": "unstar" }
            value = false
        } else {
            answer = { "a": "star" }
            value = true
        }
        console.log(answer)
        store.postDataScr(`${store.url}/courses/${id}/preference/`, answer)
            .then((data) => {
                //console.log(data)
                if (data != undefined) {
                    if (data.a == true) {
                        store.setDataCoursesList(id, "starred", value)
                        if (!bool) enqueueSnackbar('Курс успешно добавлен в избранное', { variant: 'success' });
                        if (bool) enqueueSnackbar('Курс успешно убран из избранного', { variant: 'success' });
                    } else {
                        enqueueSnackbar('Что-то пошло не так', { variant: 'error' });
                    }
                }
            });
    }

    const setPinned = (id, bool) => {
        console.log(id, bool)
        let answer
        let value
        if (bool) {
            answer = { "a": "unpin" }
            value = false
        } else {
            answer = { "a": "pin" }
            value = true
        }
        console.log(answer)
        store.postDataScr(`${store.url}/courses/${id}/preference/`, answer)
            .then((data) => {
                //console.log(data)
                if (data != undefined) {

                    if (data.a == true) {
                        store.setDataCoursesList(id, "pinned", value)
                        if (!bool) enqueueSnackbar('Курс успешно закреплён', { variant: 'success' });
                        if (bool) enqueueSnackbar('Курс успешно откреплён', { variant: 'success' });
                    } else {
                        enqueueSnackbar('Что-то пошло не так', { variant: 'error' });
                    }
                }
            });
    }

    const clickedHiddenCourse = (id, bool) => {
        store.storeClickedMoreVertIcon(id, false)
        console.log("id", id)
        let answer = { "a": "hide" }
        store.postDataScr(`${store.url}/courses/${id}/preference/`, answer)
            .then((data) => {
                console.log(data)
                if (data != undefined) {

                    if (data.a == true) {
                        store.setOneCourseHidden(id)
                        enqueueSnackbar('Курс успешно скрыт', { variant: 'success' });
                    } else {
                        enqueueSnackbar('Что-то пошло не так', { variant: 'error' });
                    }
                }
            });

    }

    const clearHidden = () => {
        store.getDataScr(`${store.url}/test/`).then(() => {

        })
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const clickedMoreVertIcon = (id, openMenu, event) => {
        if (openMenu == undefined) {
            // setAnchorEl(anchorEl ? null : event.currentTarget)
            store.storeClickedMoreVertIcon(id, true, event.currentTarget)
        } else {
            store.storeClickedMoreVertIcon(id, !openMenu, event.currentTarget)
        }
    }

    return (

        <Grid container className={classes.cardbegin}>
            {
                store.coursesList.map((course) => (
                    <Grid xs={12} sm={12} md={6} lg={4} xl={3} item className={classes.gridCard} container key={course.id}>
                        <Card className={cx(classes.card)} key={course.id}>
                            <Box className={classes.boxCardHeader}>
                                <CardHeader
                                    className={classes.cardHeader}
                                    title={<Typography className={classes.title}>{course.name}</Typography>}
                                    subheader={<Typography className={classes.subtitle}>{coursesThemeList[course.theme]}</Typography>}
                                />
                            </Box>
                            <div className={classes.Page}>
                                <Page loader="bar" color={"#4452b8"} size={16}>
                                    <CardMedia
                                        className={classes.media}
                                        image={coursesImgList[course.name]}
                                    />
                                    {/* <Skeleton animation={false} variant="rectangular"  height={320} />  */}
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
                                            <Typography className={classes.name}>{course["author-name"]}</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid className={classes.CardContentSmallActionButtom}>
                                        <IconButton onClick={() => setStarred(course.id, course.starred)} color="primary" aria-label="add an alarm">
                                            {!course.starred && <StarBorderIcon className={classes.icons} />}
                                            {course.starred && <StarIcon className={classes.icons} />}
                                        </IconButton> 
                                    </Grid>
                                    <Grid className={classes.CardContentSmallActionButtom}>
                                        <IconButton onClick={() => setPinned(course.id, course.pinned)} color="primary" aria-label="add an alarm">
                                            {!course.pinned && <PushPinIcon className={classes.icons} />}
                                            {course.pinned && <PushPinIcon className={classes.iconsPush} />}
                                        </IconButton>
                                    </Grid>
                                    <Grid className={classes.CardContentSmallActionButtom}>
                                        <IconButton variant="contained" color="primary" onClick={(event) => clickedMoreVertIcon(course.id, course.openMenu, event)}>
                                            <MoreVertIcon className={classes.icons} />
                                        </IconButton>
                                        <Popper className={classes.popper} id={undefined} open={course.openMenu} anchorEl={course.openMenuTarget}>
                                            <Paper className={classes.popper}>
                                                <MenuList
                                                    id="composition-menu"
                                                    aria-labelledby="composition-button"
                                                >
                                                    <MenuItem onClick={() => clickedHiddenCourse(course.id, course.starred)}>Скрыть курс</MenuItem>
                                                    <MenuItem onClick={() => clearHidden()}>Пожаловаться</MenuItem>
                                                    {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                                                </MenuList>
                                            </Paper>
                                        </Popper>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <Grid spacing={1} container justifyContent="center" className={classes.CardActions}>
                                    <Grid>
                                        <Link as={`/app/education/courses/${course.id}`} href="/app/education/courses/[id]">
                                            <Button variant="contained" color="primary" className={classes.CardActionsCenterButton}>
                                                {!course.started && <Typography variant="subtitle1">Приступить к курсу</Typography>}
                                                {course.started && <Typography variant="subtitle1">Продолжить курс</Typography>}
                                            </Button>
                                        </Link>
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