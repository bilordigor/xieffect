
import React from 'react'
import Head from 'next/head'
import { useRouter } from "next/router";

import { Divider, Paper, Grid, FormControlLabel, makeStyles, useTheme, Menu, Hidden, IconButton, InputBase, Switch, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
//import CoursesList from '../../../components/app/EducationPage/CoursesList';
// import Chipper from '../../../components/app/EducationPage/Chipper';

// import AddCourse from '../../../components/app/EducationPage/AddCourse';
//import Background from '../../../components/app/help/background/background';

import { inject, observer } from 'mobx-react'



import Page from 'react-page-loading'
import NavigationAll from '../../../../components/app/Menu/NavigationAll';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        //backgroundColor: theme.main.palette.main.background,
    },

}));

const Course = inject('store')(observer(({ store }) => {

    const classes = useStyles();
    const theme = useTheme();
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Head>
                <title>Ξ Образование</title>
            </Head>
            <NavigationAll>
                {/* <Page loader={"bar"} color={"#4452b8"} size={16}> */}
                <div className={classes.root}>
                    {id}
                </div >
                {/* </Page> */}
            </NavigationAll>
        </>
    )
}))


export default Course