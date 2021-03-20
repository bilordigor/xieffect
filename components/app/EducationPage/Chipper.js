import React from 'react';
import clsx from 'clsx';

import { Chip, Divider, IconButton, CardMedia, Avatar, CardContent, CardHeader, Menu, MenuItem, Button, Card, CardActions, Grid, Box, Typography, makeStyles, useTheme } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Page from 'react-page-loading'

import TuneIcon from '@material-ui/icons/Tune';

import { useSnackbar } from 'notistack';

import { inject, observer } from 'mobx-react'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 8,
        marginLeft: 8,
        //marginRight: 8,
        marginBottom: 8,
        //width: '100%',
        //height: 30,
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
    chipTypographyClicked: {
        color: theme.main.palette.content.reverseText,

    },
    chipTypographyNotClicked: {
        color: theme.main.palette.content.text,
    },
    labelTypography: {
        //marginTop: '8px',
        fontSize: 22,
        color: theme.main.palette.content.text,
    },
    icons: {
        color: theme.main.palette.content.text,

    },
    filterColumn: {
        //width: '240px',
        paddingLeft: 8,
    },
    labelFilterColumn: {
        paddingLeft: 12,
        fontSize: 20,
        color: theme.main.palette.content.text,
    },
    gridFilters: {
        marginTop: 8,
        marginBottom: 8,
        //width: "100vw",
        // height: "300px",
    }

}));



const Chipper = inject('store')(observer(({store}) => {
    const classes = useStyles();
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);

    return (

        <Grid container direction="column" className={classes.root}>
            <Grid container>
                <Button onClick={() => setOpen(!open)}>
                    <Typography className={classes.labelTypography}> Фильтры </Typography>
                    <TuneIcon className={classes.icons} />
                </Button>
            </Grid>
            <Divider/>
            { open && <Grid
                item
                className={classes.gridFilters}
                container
                direction="row"
                //justifyContent="flex-start"
                //alignItems="center"
            >
                <Grid
                    //item
                    className={classes.filterColumn}
                    //container
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
                                onClick={() => store.chipperClickOne(chip.key)}
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
                    //item
                    className={classes.filterColumn}
                    //container
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
                                onClick={() => store.chipperClickAny("chipsCategoryList", chip.key)}
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
                    //item
                    className={classes.filterColumn}
                    //container
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
                                onClick={() => store.chipperClickAny("chipsThemeList", chip.key)}
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
                    //item
                    className={classes.filterColumn}
                    //container
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
                                onClick={() => store.chipperClickAny("chipsDifficultyList", chip.key)}
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
        </Grid>
    )
}));

export default Chipper;