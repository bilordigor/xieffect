import React from 'react';
import { ReactDOM } from "react-dom";
import { Radio, FormControl, FormControlLabel, RadioGroup, FormHelperText, FormLabel, TextField, Dialog, DialogTitle, Button, Tooltip, Divider, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import Image from 'next/image'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { inject, observer } from 'mobx-react'
import clsx from 'clsx';
import YouTube from 'react-youtube';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import {
    ThemeProvider,
    withStyles,
    createMuiTheme,
} from '@material-ui/core/styles';


const useStylesSimpleDialog = makeStyles((theme) => ({
    Dialog: {
        color: theme.main.palette.content.background,
    },
    gridDialog: {
        backgroundColor: theme.main.palette.content.background,
    },
    DialogTitle: {
        cursor: 'default',
        color: theme.main.palette.content.text,
    },
    divider: {
        backgroundColor: theme.main.palette.content.text,
    },
    typography: {
        cursor: 'default',
        padding: 8,
        color: theme.main.palette.content.text,
    },
}));


function SimpleDialog(props) {
    const classes = useStylesSimpleDialog();
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };


    return (
        <Dialog className={classes.Dialog} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <Grid className={classes.gridDialog}>
                <DialogTitle className={classes.DialogTitle} id="simple-dialog-title">Школа 641</DialogTitle>
                <Divider className={classes.divider} />
                <Typography className={classes.typography}> ГБОУ СОШ №641 </Typography>
            </Grid>

        </Dialog>
    );
}



const MenuItem = ({ time, lesson, isLast, now }) => {
    const classes = useStylesMain();
    const theme = useTheme();
    return (
        <div className={classes.menuItem}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Typography className={classes.labelTodayTimetable}> {time} </Typography>
                <Divider className={clsx(classes.dividerTodayTimetableBefore, {
                    [classes.dividerTodayTimetableBeforeClicked]: now,
                })} />
                <Button className={clsx(classes.buttonTodayTimetable, {
                    [classes.buttonTodayTimetableClicked]: now,
                })}>
                    <Typography className={classes.labelButtonTodayTimetable}> {lesson} </Typography>
                </Button>
                {!isLast && <Divider className={clsx(classes.dividerTodayTimetableAfter, {
                    [classes.dividerTodayTimetableAfterClicked]: now,
                })} />}
            </Grid>
        </div>
    );
};

// const list = [
//     { name: 'item1' },
//     { name: 'item2' },
//     { name: 'item3' },
//     { name: 'item4' },
//     { name: 'item5' },
// ];

const dataTimeTable = [
    { time: "9:00", lesson: "Математика", now: false, isLast: false },
    { time: "9:55", lesson: "География", now: false, isLast: false },
    { time: "11:00", lesson: "История", now: true, isLast: false },
    { time: "12:05", lesson: "Немецкий язык", now: false, isLast: false },
    { time: "13:00", lesson: "Биология", now: false, isLast: true },
]


// All items component
// Important! add unique key
export const Menu = (dataTimeTable) => dataTimeTable.map(el => {
    const { time, lesson, isLast, now } = el;

    return (
        <MenuItem
            time={time}
            key={time}
            lesson={lesson}
            isLast={isLast}
            now={now}
        />
    );
});

// const Arrow = ({ text, className }) => {
//     return (
//       <div
//         className={className}
//       >{text}</div>
//     );
//   };


//   const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
//   const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const useStylesContentPlayer = makeStyles((theme) => ({

    gridYoutube: {
        position: 'relative',
        paddingBottom: '56.25%',
        height: '0',
        overflow: 'hidden',
    },
    youtube: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    gridContentAfterYoutube: {
        paddingTop: 12,
    },
    labelContentAfterYoutube: {
        fontSize: 24,
        color: theme.main.palette.content.text,
    },
    icon: {
        height: 32,
        width: 32,
        padding: 4,
        cursor: 'pointer',
        color: theme.main.palette.content.text,
    },
    labelSynopsis: {
        padding: 4,
        fontSize: 20,
        color: theme.main.palette.content.text,
    },
    iconSystemUpdateAltIcon: {
        height: 40,
        width: 40,
        padding: 4,
        cursor: 'pointer',
        color: theme.main.palette.content.text,
    },
    gridDividerWhite: {
        backgroundColor: theme.main.palette.content.text,
        width: '98%',
        marginTop: 4,
        marginLeft: 16, //?
        marginRight: 16, //?
        height: 1,
    },
}));

const ContentPlayer = inject('store')(observer((props) => {
    const classes = useStylesContentPlayer();
    const theme = useTheme();
    return (
        <Grid className={classes.a} xs={12} sm={12} md={12} lg={6} xl={4} item container direction="column" justifyContent="center" alignItems="center">
            <Grid
                className={classes.gridYoutube}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {/* <div className={classes.divYoutube}> */}
                <YouTube className={classes.youtube} videoId="SnNbqEiDBDM" />
                {/* </div> */}
            </Grid>
            <Grid
                className={classes.gridContentAfterYoutube}
                container
                diraction="row"
            >
                <Grid item>
                    <Typography className={classes.labelContentAfterYoutube}> История. Пётр I </Typography>
                </Grid>
                <Grid item container xs justifyContent="flex-end">
                    <FavoriteBorderIcon className={classes.icon} />
                    <BookmarkBorderIcon className={classes.icon} />
                </Grid>

            </Grid>
            <Grid
                className={classes.a}
                container
                diraction="row"
            >
                <Grid item>
                    <Image
                        src="/icons/word.png"
                        width={36}
                        height={36}
                    />
                </Grid>
                <Grid item>
                    <Typography className={classes.labelSynopsis}> Конспект занятия </Typography>
                </Grid>
                <Grid item>
                    <SystemUpdateAltIcon className={classes.iconSystemUpdateAltIcon} />
                </Grid>

            </Grid>
            <Grid className={classes.gridDividerWhite}>

            </Grid>
        </Grid>
    )

}))

const useStylesQuiz = makeStyles((theme) => ({
    gridContentInter: {
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        //backgroundColor: 'blue',
    },
    contentInterLabel: {
        fontSize: 20,
        color: theme.main.palette.content.text,
    },
    Radio: {
        color: theme.main.palette.content.text,
    },
    FormControlLabel: {
        color: theme.main.palette.content.text,
    },
    FormHelperText: {
        color: theme.main.palette.content.text,
    },
    buttonCheckAnswer: {
        color: theme.main.palette.content.text,
        borderColor: theme.main.palette.content.text,
    },
    gridDividerWhite: {
        backgroundColor: theme.main.palette.content.text,
        width: '98%',
        marginTop: 4,
        marginLeft: 16, //?
        marginRight: 16, //?
        height: 1,
    },
}));

const Quiz = inject('store')(observer((props) => {
    const classes = useStylesQuiz();
    const theme = useTheme();
    //Quiz

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Выберите вариант ответа');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === 'Сенат') {
            setHelperText('Совершенно верно');
            setError(false);
        } else if (value === 'Дума' || value === 'Верховное собрание' || value === 'Собор') {
            setHelperText('Ответ неверный');
            setError(true);
        } else {
            setHelperText('Пожалуйста, выберите вариант ответа');
            setError(true);
        }
    };
    return (
        <Grid className={classes.gridContentInter} xs={12} sm={12} md={12} lg={6} xl={4} item container direction="column" justifyContent="flex-start" alignItems="center">

            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Typography className={classes.contentInterLabel}> Каким высшим органом государственной власти Петр I заменил Боярскую думу?  </Typography>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start">
                <form onSubmit={handleSubmit}>
                    <FormControl
                        component="fieldset"
                        error={error}
                        className={classes.formControl}
                    >
                        <RadioGroup
                            aria-label="quiz"
                            name="quiz"
                            value={value}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel className={classes.FormControlLabel} value="Сенат" control={<Radio className={classes.Radio} />} label="Сенатом" />
                            <FormControlLabel className={classes.FormControlLabel} value="Дума" control={<Radio className={classes.Radio} />} label="Думой" />
                            <FormControlLabel className={classes.FormControlLabel} value="Собор" control={<Radio className={classes.Radio} />} label="Собором" />
                            <FormControlLabel className={classes.FormControlLabel} value="Верховное собрание" control={<Radio className={classes.Radio} />} label="Верховным собранием" />
                        </RadioGroup>
                        <FormHelperText className={classes.FormHelperText}>{helperText}</FormHelperText>
                        <Button type="submit" variant="outlined" className={classes.buttonCheckAnswer}>
                            Проверить ответ
                            </Button>
                    </FormControl>
                </form>
                {/* <Grid className={classes.gridDividerWhite}>

                </Grid> */}
            </Grid>
        </Grid>
    )

}))


const useStylesMain = makeStyles((theme) => ({
    root: {
        padding: 8,
        marginTop: 8,
        // marginRight: 8,
        marginLeft: 0,
        marginRight: 0,
        //position: 'relative',
        //paddingLeft: 4,
        // border: '4px solid',
        // borderColor: theme.main.palette.content.border,
        borderRadius: 8,
        transition: '2s',
        '&:hover': {
            borderColor: theme.main.palette.main.main,
        },
        // marginTop: theme.spacing(8),
        height: 'auto',
        transition: '0.3s',
        //width: '100%',
        //overflow: 'initial',
        overflow: 'hidden',
        background: theme.main.palette.content.background,
    },
    rootLabel: {

    },
    label: {
        maxWidth: 450,
        //background: 'blue',
        cursor: 'pointer',
        fontSize: 32,
        color: theme.main.palette.content.text,
    },
    gridButtonExpandMoreIcon: {
        width: 48,
        height: 48,
        marginLeft: 0,
        marginRight: 10,
    },
    // buttonExpandMoreIcon: {
    //     width: 48,
    //     height: 48,
    //     color: theme.main.palette.content.text,
    // },
    expandMoreIcon: {
        cursor: 'pointer',
        width: 48,
        height: 48,
        color: theme.main.palette.content.text,
    },
    buttonImage: {
        color: theme.main.palette.content.text,
    },
    gridButton: {
        marginLeft: 'auto',
        marginRight: 0,
    },
    TooltipTypography: {
        // [theme.breakpoints.up('sm')]: {
        //     display: 'none',
        // },
    },
    gridTypography: {
        // marginLeft: 0,
        // marginRight: 'auto',
    },
    main: {
        padding: 4,
        //height: 'auto',
        //width: '100%',
    },
    gridLabelToday: {

    },
    labelToday: {
        fontWeight: 'bold',
        fontSize: 24,
        color: theme.main.palette.content.text,
    },
    gridTodayTimetable: {

        paddingTop: 16,
        paddingLeft: 8,
        // paddingRight: 0,
        height: 128,
        //width: '100vw',
    },
    labelTodayTimetable: {
        fontSize: 22,
        color: theme.main.palette.content.text,
    },
    dividerTodayTimetableBefore: {
        marginLeft: 6,
        height: 6,
        width: 24,
        backgroundColor: theme.main.palette.content.text,
    },
    dividerTodayTimetableBeforeClicked: {
        backgroundColor: theme.main.palette.main.main,
    },
    buttonTodayTimetable: {
        marginLeft: 4,
        border: "6px solid",
        borderRadius: 8,
        borderColor: theme.main.palette.content.text,
        width: 240,
        height: 96,
        overflow: 'initial',
        // background: ,
    },
    buttonTodayTimetableClicked: {
        borderColor: theme.main.palette.main.main,
    },
    labelButtonTodayTimetable: {
        fontSize: 24,
        color: theme.main.palette.content.text,
    },
    dividerTodayTimetableAfter: {
        marginLeft: 4,
        marginRight: 6,
        height: 6,
        width: 24,
        backgroundColor: theme.main.palette.content.text,
    },
    dividerTodayTimetableAfterClicked: {
        backgroundColor: theme.main.palette.main.main,
    },
    scroll: {
        overflow: 'hidden',
        transition: '0.5s',
        paddingRight: 0,
        paddingLeft: 0,

    },
    scrollOpen: {
        overflow: 'hidden',
        transition: '0.5s',
        [theme.breakpoints.only('xs')]: {
            width: 'calc(100vw - 76px)',
        },
        width: 'calc(100vw - 314px)',
    },
    scrollClose: {
        overflow: 'hidden',
        transition: '0.5s',
        [theme.breakpoints.only('xs')]: {
            width: 'calc(100vw - 76px)',
        },
        width: 'calc(100vw - 154px)',
    },
    menuItem: {
        //padding: '0 40px',
        //margin: '5px 10px',
        userSelect: 'none',
        //cursor: 'pointer',
        border: 'none',
        outline: 'none',
        //border: `10px ${theme.main.palette.content.background} solid`,
        '&:active': {
            userSelect: 'none',
            // //cursor: 'pointer',
            border: 'none',
            // outline: 'none',
            //border: `10px ${theme.main.palette.content.background} solid`,
        },
    },
    arrowIcon: {
        marginTop: 6,
        color: theme.main.palette.content.text,
    },
    gridDividerUnder: {
        zIndex: 9999,
        height: 4,
        marginTop: 200,
        width: 'auto',
        marginLeft: 4,
        marginRight: 4,
    },
    dividerUnder: {
        marginTop: 200,
        backgroundColor: theme.main.palette.content.text,
    },
    gridContent: {
        paddingTop: 20,
        //position: 'relative',
    },
    gridContentMainLabel: {

    },

    gridDividerBlue: {
        backgroundColor: theme.main.palette.main.main,
        width: '100%',
        marginTop: 4,
        marginLeft: -640, //?
        marginRight: -640, //?
        height: 3,
    },
    contentMainLabel: {
        fontSize: 24,
        color: theme.main.palette.content.text,
    },
    contentPlayer: {
        paddingTop: 4,
        // width: '100%',
        // height: 'auto',
    },
    contentPlayerAfter: {

        paddingTop: 4,
        paddingLeft: 8,
        paddingRight: 8,
    },
    youtubeLabel: {
        fontSize: 20,
        color: theme.main.palette.content.text,
    },
    iconButton: {
        // borderRadius: 24,
        // height: 48,
        //width: 24,
        color: theme.main.palette.content.text,
        //backgroundColor: theme.main.palette.content.text,
    },
    icon: {
        height: 32,
        width: 32,
        padding: 4,
        cursor: 'pointer',
        color: theme.main.palette.content.text,
        //backgroundColor: theme.main.palette.content.text,
    },
    gridContentAfter: {
        margin: 8,
        //position: 'relative',
    },
    cospectLabel: {
        paddingTop: 4,
        //paddingLeft: 8,
        fontSize: 20,
        color: theme.main.palette.content.text,
    },
    iconCloud: {
        height: 36,
        width: 36,
        paddingTop: 0,
        paddingLeft: 4,
        cursor: 'pointer',
        color: theme.main.palette.content.text,
    },
    gridDividerWhite: {
        backgroundColor: theme.main.palette.content.text,
        width: '98%',
        marginTop: 4,
        marginLeft: 16, //?
        marginRight: 16, //?
        height: 1,
    },
    addComment: {
        color: theme.main.palette.content.text,
    },
    TextField: {
        color: theme.main.palette.content.text,
        borderColor: theme.main.palette.content.text,
        borderBottomColor: theme.main.palette.content.text,
    },
}));

const LearningCenter = inject('store')(observer((props) => {
    const classes = useStylesMain();
    const theme = useTheme();

    let ref1 = React.useRef();
    const { current } = ref1;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    //Scroll
    //const [selected, setSelected] = React.useState(0)
    const menu = Menu(dataTimeTable);


    // const onSelect = (key) => {
    //     setSelected({ selected: key });
    // }

    //console.log(ref1.current.offsetWidth)
    // const opts = {
    //     height: '300px',
    //     width: '500px',
    //     playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 0,
    //     },
    // };



    return (
        <Grid
            className={classes.root}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid container direction="row" alignItems="center" justifyContent="flex-start" className={classes.rootLabel}>
                <Grid item xs zeroMinWidth className={classes.gridTypography}>
                    <Typography onClick={handleClickOpen} className={classes.label} noWrap={true}> Школа 461 </Typography>
                    <SimpleDialog
                        open={open}
                        onClose={handleClose}
                    />
                </Grid>
                <Grid item className={classes.gridButton}>
                    <Tooltip title="Учебный процесс" arrow>
                        <Button className={classes.buttonImage}>
                            <Image
                                src="/schoolmenu/045-website.png"
                                width={48}
                                height={48}
                            />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Администрация" arrow>
                        <Button className={classes.buttonImage}>
                            <Image
                                src="/schoolmenu/019-graduation.png"
                                width={48}
                                height={48}
                            />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Успеваемость" arrow>
                        <Button className={classes.buttonImage}>
                            <Image
                                src="/schoolmenu/021-book.png"
                                width={48}
                                height={48}
                            />
                        </Button>
                    </Tooltip>
                </Grid>
                <Grid item className={classes.gridButtonExpandMoreIcon}>
                    {!props.store.learningCenterValues.openExpandMore && <ExpandMoreIcon onClick={() => props.store.clickedExpandMoreIcon()} className={classes.expandMoreIcon} />}
                    {props.store.learningCenterValues.openExpandMore && <ExpandLessIcon onClick={() => props.store.clickedExpandMoreIcon()} className={classes.expandMoreIcon} />}
                </Grid>
            </Grid>
            { props.store.learningCenterValues.openExpandMore && <Grid
                className={classes.main}
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid
                    className={classes.gridLabelToday}
                    item
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelToday}> Уроки на сегодня: </Typography>
                </Grid>
                <Grid
                    className={classes.gridTodayTimetable}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <div className={clsx(classes.scroll, {
                        [classes.scrollOpen]: props.store.openMenu,
                        [classes.scrollClose]: !props.store.openMenu,
                    })}>
                        <ScrollMenu
                            data={menu}
                            alignCenter={false}
                            arrowLeft={<ArrowBackIosIcon className={classes.arrowIcon} />}
                            arrowRight={<ArrowForwardIosIcon className={classes.arrowIcon} />}
                        // selected={selected}
                        // onSelect={onSelect}
                        />
                    </div>

                </Grid>
                <Grid className={classes.gridDividerBlue}>

                </Grid>
                <Grid
                    className={classes.gridContent}
                    container
                    spacing={4}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ContentPlayer />
                    <Quiz />
                    <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container direction="column" justifyContent="center" alignItems="center">
                        <Typography className={classes.contentInterLabel}> Домашние задания </Typography>
                    </Grid>

                </Grid>

            </Grid>
            }


        </Grid >

    )
}))


export default LearningCenter