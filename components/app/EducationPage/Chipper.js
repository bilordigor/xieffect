import React from 'react';
import clsx from 'clsx';

import { Chip, Divider, IconButton, CardMedia, Avatar, CardContent, CardHeader, Menu, MenuItem, Button, Card, CardActions, Grid, Box, Typography, makeStyles, useTheme } from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import Page from 'react-page-loading'

import { useSnackbar } from 'notistack';

import { inject, observer } from 'mobx-react'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        width: '100%',
        height: 30,
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
        color: 'blue',
        backgroundColor: theme.main.palette.content.text,
        '&:hover': {
            backgroundColor: theme.main.palette.content.text,
        }
    },
    chipTypography: {
        fontSize: 20,
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
        marginTop: '8px',
        fontSize: 20,
        color: theme.main.palette.content.text,
    }

}));



const Chipper = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme()

    let chipsList = props.store.chipsList

    const Clicked = (key) => {
        props.store.chipperClick(key)
        console.log('Clicked!!!')
    }

    return (

        <Grid container direction="row" justifyContent="flex-start" alignItems="center" className={classes.root}>
            <Grid>
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
            }
        </Grid>
    )
}));

export default Chipper;