import React from 'react';
import { Dialog, DialogTitle, Button, Tooltip, Divider, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import Image from 'next/image'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 8,
        marginTop: 8,
        // marginRight: 8,
        marginLeft: -10,
        marginRight: -10,
        //position: 'relative',
        //paddingLeft: 4,
        // border: '4px solid',
        // borderColor: theme.main.palette.content.border,
        borderRadius: 8,
        transition: '0.4s',
        '&:hover': {
            borderColor: theme.main.palette.main.main,
        },
        // marginTop: theme.spacing(8),
        height: 'auto',
        transition: '0.3s',
        width: '100%',
        overflow: 'initial',
        background: theme.main.palette.content.background,
    },
    label: {
        maxWidth: 450,
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
    buttonExpandMoreIcon: {
        width: 48,
        height: 48,
        color: theme.main.palette.content.text,
    },
    expandMoreIcon: {
        width: 48,
        height: 48,
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
    }
}));

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
    divider :{
        backgroundColor: theme.main.palette.content.text,
    },
    typography: {
        cursor: 'default',
        padding: 8,
        color: theme.main.palette.content.text,
    }
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


const LearningCenter = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid container direction="row" alignItems="center" justifyContent="flex-start" className={classes.root}>
                <Grid item xs zeroMinWidth className={classes.gridTypography}>
                    <Typography onClick={handleClickOpen} className={classes.label} noWrap={true}> Школа 641 </Typography>
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
                    <Button className={classes.buttonExpandMoreIcon}>
                        <ExpandMoreIcon className={classes.expandMoreIcon} />
                    </Button>
                </Grid>
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >

            </Grid>

        </Grid>

    )
}


export default LearningCenter