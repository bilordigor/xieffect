import React from 'react';
import clsx from 'clsx';

import { FormControl, InputLabel, InputAdornment, Input, Chip, Divider, IconButton, CardMedia, Avatar, CardContent, CardHeader, Menu, MenuItem, Button, Card, CardActions, Grid, Box, Typography, makeStyles, useTheme } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Page from 'react-page-loading'

import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import { useSnackbar } from 'notistack';

import { inject, observer } from 'mobx-react'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 8,
        marginLeft: 2,
        //paddingRight: 16,
        marginRight: 16,
        marginBottom: 8,
        width: "calc(100% - 12px)",
        //height: 30,
        borderRadius: 4,
        background: theme.main.palette.content.background,
    },
    gridChip: {
        marginLeft: '6px',
        marginTop: '8px',
        cursor: 'pointer',

    },
    chip: {
        border: '2px solid',
        borderColor: theme.main.palette.content.text,
        cursor: 'pointer',
        backgroundColor: "rgb(0,0,0, .0)",
        '&:hover': {
            backgroundColor: "rgb(0,0,0, .0)"
        }
    },
    chipClicked: {
        //color: 'blue',
        backgroundColor: theme.main.palette.content.text,
        '&:hover': {
            backgroundColor: theme.main.palette.content.text,
        }
    },
    chipTypography: {
        fontSize: 18,
        //color: theme.main.palette.content.text,
        cursor: 'pointer',
    },
    chipTypographyTheme: {
        fontSize: 16,
        //color: theme.main.palette.content.text,
        cursor: 'pointer',
    },
    chipTypographyClicked: {
        color: theme.main.palette.content.reverseText,

    },
    chipTypographyNotClicked: {
        color: theme.main.palette.content.text,
    },
    labelTypography: {
        //marginTop: '8px',
        paddingRight: 4,
        fontSize: 22,
        color: theme.main.palette.content.text,
    },
    labelTypographyAccept: {
        paddingRight: 4,
        fontSize: 18,
        //color: theme.main.palette.content.text,
    },
    icons: {
        color: theme.main.palette.content.text,

    },
    filterColumn: {
        width: 'auto',
        paddingLeft: 8,
        paddingRight: 8,
    },
    labelFilterColumn: {
        paddingTop: 16,
        paddingLeft: 12,
        fontSize: 20,
        color: theme.main.palette.content.text,
    },
    gridFilters: {
        marginTop: 0,
        marginBottom: 8,
        //width: "100vw",
        // height: "300px",
    },
    gridLabelTypographyAccept: {
        paddingTop: 8,
        paddingLeft: 8,
        paddingBottom: 8,
    },
    formControl: {
        marginBottom: 4,
    },
    typographyInputLabel: {
        color: theme.main.palette.content.text,
    }

}));



const Chipper = inject('store')(observer(({ store, loadingMoreCourses }) => {
    const classes = useStyles();
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);

    const chipClickedA = (name, key) => {
        store.chipperClickAny(name, key)
    }

    const chipClickedO = (key) => {
        store.chipperClickOneSort(key)

    }

    const clickedLoadingCourses = () => {
        store.counterZero()
        store.setAllLoading(false)
        store.clearCoursesList()
        loadingMoreCourses()
        setOpen(false)
    }

    const clickedSearch = (event) => {
        event.preventDefault()
        store.counterZero()
        store.setAllLoading(false)
        store.clearCoursesList()
        console.log("filtersSerch:", store.coursesFilters)
        loadingMoreCourses()
    }

    const handleChange = () => (event) => {
        store.setSearchValue(event.target.value)
        //setValues({ ...values, [prop]: event.target.value });
    };


    return (

        <Grid container direction="column" className={classes.root}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Button onClick={() => setOpen(!open)}>
                    <Typography className={classes.labelTypography}> Фильтры </Typography>
                    <TuneIcon className={classes.icons} />
                </Button>
                <FormControl className={classes.formControl}>
                    {/* <InputLabel htmlFor="standard-adornment-password"><Typography className={classes.typographyInputLabel}> Поиск </Typography>  </InputLabel> */}
                    <Input
                        type='text'
                        placeholder="Поиск"
                        value={store.coursesFilters["search"]}
                        onChange={handleChange()}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={(event) => clickedSearch(event)}
                                //onMouseDown={handleMouseDownPassword}
                                >
                                    <SearchIcon className={classes.icons}/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Grid>
            <Divider />
            { open && <Grid
                item
                className={classes.gridFilters}
                container
                direction="row"
            //justifyContent="flex-start"
            //alignItems="center"
            >
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> Глобальные: </Typography>
                    {store.chipsGlobalList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                //variant="outlined"
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.clicked,
                                })}
                                //clickable
                                onClick={() => chipClickedA("chipsGlobalList", chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypography, {
                                            [classes.chipTypographyClicked]: chip.clicked,
                                            [classes.chipTypographyNotClicked]: !chip.clicked,
                                        })}

                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> По Категории: </Typography>
                    {store.chipsCategoryList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                //variant="outlined"
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.clicked,
                                })}
                                //clickable
                                onClick={() => chipClickedA("chipsCategoryList", chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypography, {
                                            [classes.chipTypographyClicked]: chip.clicked,
                                            [classes.chipTypographyNotClicked]: !chip.clicked,
                                        })}

                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> По Теме: </Typography>
                    {store.chipsThemeList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                //variant="outlined"
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.clicked,
                                })}
                                //clickable
                                onClick={() => chipClickedA("chipsThemeList", chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypographyTheme, {
                                            [classes.chipTypographyClicked]: chip.clicked,
                                            [classes.chipTypographyNotClicked]: !chip.clicked,
                                        })}

                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> По Сложности: </Typography>
                    {store.chipsDifficultyList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                //variant="outlined"
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.clicked,
                                })}
                                //clickable
                                onClick={() => chipClickedA("chipsDifficultyList", chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypography, {
                                            [classes.chipTypographyClicked]: chip.clicked,
                                            [classes.chipTypographyNotClicked]: !chip.clicked,
                                        })}

                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
                <Grid
                    item
                    className={classes.filterColumn}
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelFilterColumn}> Сортировка: </Typography>
                    {store.chipsSortList.map((chip) => (
                        <Grid className={classes.gridChip} key={chip.key}>
                            <Chip
                                //variant="outlined"
                                className={clsx(classes.chip, {
                                    [classes.chipClicked]: chip.clicked,
                                })}
                                //clickable
                                onClick={() => chipClickedO(chip.key)}
                                label={
                                    <Typography
                                        className={clsx(classes.chipTypography, {
                                            [classes.chipTypographyClicked]: chip.clicked,
                                            [classes.chipTypographyNotClicked]: !chip.clicked,
                                        })}

                                    >
                                        {chip.title}
                                    </Typography>} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>}
            {/* <Grid>
                <Typography className={classes.labelTypography}> Фильтры: </Typography>
            </Grid>
            {
                chipsList.map((chip) => (
                    <Grid className={classes.gridChip} key={chip.key}>
                        <Chip
                            className={clsx(classes.chip, {
                                [classes.chipClicked]: chip.clicked,
                            })}
                            clickable
                            onClick={() => Clicked(chip.key)}
                            label={
                                <Typography
                                    className={clsx(classes.chipTypography, {
                                        [classes.chipTypographyClicked]: chip.clicked,
                                        [classes.chipTypographyNotClicked]: !chip.clicked,
                                    })}

                                >
                                    {chip.title}
                                </Typography>} />
                    </Grid>
                ))
            } */}
            {/* { open && <Divider />} */}
            { open && <Grid className={classes.gridLabelTypographyAccept} container>
                <Button variant="contained" onClick={clickedLoadingCourses}>
                    <Typography className={classes.labelTypographyAccept}> Применить </Typography>
                </Button>
            </Grid>}
            { open && <Divider />}
        </Grid>
    )
}));

export default Chipper;