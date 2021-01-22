import React from 'react'
import { Chip, Badge, AppBar, Tabs, Tab, Divider, Button, Avatar, withStyles, Paper, Grid, FormControlLabel, makeStyles, useTheme, Menu, Hidden, IconButton, InputBase, Switch, Typography } from '@material-ui/core'

import { inject, observer } from 'mobx-react'

import TimelapseIcon from '@material-ui/icons/Timelapse';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReorderIcon from '@material-ui/icons/Reorder';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        border: '2px solid',
        borderColor: '#CFD5DA',
        transition: '0.4s',
        '&:hover': {
            borderColor: '#5B9FED',
        },
        backgroundColor: 'rgba(0, 0, 0, .03)',
        //borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        height: 96,
        '&$expanded': {
            height: 96,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    // '@keyframes ripple': {
    //     '0%': {
    //         transform: 'scale(.8)',
    //         opacity: 1,
    //     },
    //     '100%': {
    //         transform: 'scale(2.4)',
    //         opacity: 0,
    //     },
    // },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    avatar: {
        height: 64,
        width: 64,
    },
    accordion: {
        [theme.breakpoints.only('xs')]: {
            width: '100%',
        },
        [theme.breakpoints.only('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.only('md')]: {
            width: '85%',
        },
        [theme.breakpoints.only('lg')]: {
            width: '70%',
        },
        [theme.breakpoints.only('xl')]: {
            width: '60%',
        },
    },
    userName: {
        paddingLeft: theme.spacing(1),
        fontSize: 22,
        fontFamily: 'Roboto',
    },
    groupChip: {
        marginTop: '3px',
        paddingLeft: theme.spacing(1),
    },
    chip: {
        marginLeft: theme.spacing(1),
    },
    groupIcons: {
        marginTop: '-7px',
        marginLeft: 'auto',
    },
    lastMessage: {
        paddingTop: '6px',
        paddingLeft: theme.spacing(1),
        [theme.breakpoints.only('xs')]: {
            width: '200px',
        },
        [theme.breakpoints.only('sm')]: {
            width: '250px',
        },
        [theme.breakpoints.only('md')]: {
            width: '360px',
        },
        [theme.breakpoints.only('lg')]: {
            width: '500px',
        },
        [theme.breakpoints.only('xl')]: {
            width: '600px',
        },

    },
    goToDialog: {
        marginLeft: 'auto',
    },
    messageCounter: {
        width: '24px',
        height: '24px',
        borderRadius: 12,
        border: '2px solid',
        borderColor: '#5B9FED',
        textAlign: 'center',
    }

}));



const DialogsList = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    const handleDelete = () => {
        return null
    }
    const dialogsList = props.store.dialogsList
    const userGroups = props.store.userGroups

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChangeAcordion = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Grid item className={classes.accordion}>
            {dialogsList.map((dialog) => (
                <Grid container direction="column" className={classes.userDialog}>
                    <Accordion square expanded={expanded === 'panel' + dialog.key} onChange={handleChangeAcordion('panel' + dialog.key)} key={dialog.key}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <Grid className={classes.containerStyledBadge}>
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar className={classes.avatar} alt="" src="/static/images/avatar/1.jpg" />
                                </StyledBadge>
                            </Grid>
                            <Grid className={classes.userName} container direction="column">
                                <Grid container direction="row" justifyContent="flex-start">
                                    <Grid item>
                                        <Typography className={classes.userName}>{dialog.userName}</Typography>
                                    </Grid>
                                    <Hidden smDown>
                                        <Grid item className={classes.groupChip}>
                                            {userGroups.map((group) => (
                                                <Chip className={classes.chip} label={group.label} variant="outlined" color="primary" size="small" onDelete={handleDelete} />
                                            ))}
                                        </Grid>
                                    </Hidden>
                                    <Grid item className={classes.groupIcons}>
                                        <Hidden mdUp>
                                            <IconButton aria-label="Установить время" color="primary">
                                                <ReorderIcon />
                                            </IconButton>
                                        </Hidden>
                                        <IconButton aria-label="Установить время" color="primary">
                                            <TimelapseIcon />
                                        </IconButton>
                                        <Hidden smDown>
                                            <IconButton aria-label="Удалить диалог" color="primary">
                                                <DeleteForeverIcon />
                                            </IconButton>
                                            <IconButton aria-label="Больше" color="primary">
                                                <MoreVertIcon />
                                            </IconButton>
                                        </Hidden>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row">
                                    <Grid className={classes.lastMessage}>
                                        <Typography noWrap="true"> {dialog.lastMessage} </Typography>
                                    </Grid>
                                    {/* <Grid>
                                        <Typography color="primary" className={classes.messageCounter}>
                                            1
                                        </Typography>
                                    </Grid> */}
                                    <Hidden mdUp>
                                        <Grid className={classes.goToDialog}>
                                            <IconButton aria-label="Удалить диалог" color="primary">
                                                <DeleteForeverIcon />
                                            </IconButton>
                                            <IconButton aria-label="Больше" color="primary">
                                                <MoreVertIcon />
                                            </IconButton>
                                        </Grid>
                                    </Hidden>
                                    <Hidden smDown>
                                        <Grid className={classes.goToDialog}>
                                            <Button variant="contained" color="primary">
                                                Перейти к диалогу
                                            </Button>
                                        </Grid>
                                    </Hidden>

                                </Grid>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                </Grid>
            ))}
        </Grid>
    );
}));

export default DialogsList;
