import React from 'react';
import { Button, Tooltip, Divider, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
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
        cursor: 'default',
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


const LearningCenter = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid container direction="row" alignItems="center" justifyContent="flex-start" className={classes.root}>
                <Grid item xs zeroMinWidth className={classes.gridTypography}>
                    {/* <Tooltip title="Школа 641" arrow placement="bottom-start" className={classes.TooltipTypography}> */}
                        <Typography className={classes.label} noWrap={true}> Школа 641 </Typography>
                    {/* </Tooltip> */}
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