import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, FormControl, InputLabel, TextField, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button } from '@material-ui/core'
import { useFileUpload } from "use-file-upload"
import { inject, observer } from 'mobx-react'
import Image from 'next/image'
import Context from '../../../../store'
import DarkModeToggle from "react-dark-mode-toggle"


const useStylesProfile = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto',
        backgroundColor: theme.main.palette.content.background,
    },
    rootProfile: {
        // paddingLeft: 8,
        // paddingTop: 8,
    },
    gridDarkModeToggle: {
        marginLeft: 8,
        marginTop: 8,
    },
    gridTypography: {
        marginTop: 4,
        marginLeft: 8,
    },
    Typography: {
        color: theme.main.palette.content.text,
    }
}));

const Castomize = inject('store')(observer((props) => {
    const classes = useStylesProfile();
    // const [isDarkMode, setIsDarkMode] = useState(() => false);

    return (
        <>
            <Grid spacing={1} container className={classes.root}>
                {/* <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container direction="column" className={classes.rootProfile}> */}
                    <Grid item container direction="row" className={classes.gridDarkModeToggle}>
                        <Grid>
                            <DarkModeToggle
                                onChange={props.store.setIsDarkMode}
                                checked={props.store.userData.isDarkMode}
                                size={80}
                            />
                        </Grid>
                        <Grid className={classes.gridTypography}>
                            <Typography variant="h6" className={classes.Typography}> Тёмная тема </Typography>
                        </Grid>
                    </Grid>
                {/* </Grid> */}
                {/* <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>

                </Grid> */}
            </Grid>
        </>
    );
}))

export default Castomize