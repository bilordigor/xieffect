import * as React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';

//New icons 
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import SchoolIcon from '@material-ui/icons/School';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import PublicIcon from '@material-ui/icons/Public';
import MessageIcon from '@material-ui/icons/Message';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Typography, Divider, makeStyles, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Context from '../../../../store'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Router from 'next/router';

import { inject, observer } from 'mobx-react'

import { Scrollbars } from 'rc-scrollbars';
import Castomize from './Castomize';
import { Settings } from '@material-ui/icons';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const useStylesDialogAll = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.main.palette.content.background,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    tabs: {
        borderRight: `2px solid ${theme.main.palette.main.background}`,
        color: theme.main.palette.content.text,
        backgroundColor: theme.main.palette.content.background,
        marginTop: 32,
        height: window.innerHeight - 64,
    },
    gridRoot: {
        flexGrow: 1,
        backgroundColor: theme.main.palette.content.background,
        display: 'flex',
        // height: 224,
        width: '100vw',
    },
    gridTabs: {
        width: '100%',
    },
    gridTabPanel: {
        width: '100%',
    },
    TabPanel: {
        paddingLeft: 8,
        minWidth: 350,
        backgroundColor: theme.main.palette.content.main,
    },
    menuTypography: {
        paddingLeft: 16,
        paddingTop: 8,
        fontWeight: 'bold',
        fontSize: 16,
    },
    menuButton: {
        // display: 'flex',
        // textAlign: 'left',
        // float: 'left',
        width: 220,
        marginRight: 4,
        '&:hover': {
            backgroundColor: theme.main.palette.content.reverseText,
            //opacity: 1,
        },
    },
    menuButtonClicked: {
        backgroundColor: theme.main.palette.content.reverseText,
    },
    buttonLabel: {
        paddingLeft: 0,
        marginRight: 'auto',
        textTransform: 'none',
        fontSize: 20,
        color: theme.main.palette.content.text,
    },
    divider: {
        marginTop: 4,
        marginBottom: 8,
        height: 1,
        //width: '100vw',
        backgroundColor: theme.main.palette.content.border,
    },
    menuExitButton: {
        width: 220,
        marginRight: 4,
        '&:hover': {
            backgroundColor: theme.main.palette.help.redbackground,
            //opacity: 1,
        },
    },
    buttonExitLabel: {
        paddingLeft: 0,
        marginRight: 'auto',
        textTransform: 'none',
        fontSize: 20,
        color: theme.main.palette.help.red,
    },
    content: {
        marginTop: 32,
        marginLeft: 32,
        width: 400,
        height: "100%",
    },
    goBackButton: {
        position: 'fixed',
        top: 32,
        right: 32,
        cursor: 'pointer',
    },
}));

const SettingsDown = inject('store')(observer((props) => {
    const classes = useStylesDialogAll();
    const theme = useTheme();

    const [expanded, setExpanded] = React.useState(); //'panel1'

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const goBack = () => {
        setTimeout(props.store.setDialogMenu, 500)
    }

    return (
        <div>
            <Typography className={classes.menuTypography}> Настройки Пользователя </Typography>
            <Divider className={classes.divider} />
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Учётная запись</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        0
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Конфиденциальность</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Boost Effect</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        2
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Divider className={classes.divider} />
            <Typography className={classes.menuTypography}> Настройки Приложения </Typography>
            <Divider className={classes.divider} />
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Внешний вид</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Castomize />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>Уведомления</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        4
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>Язык</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        4
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Divider className={classes.divider} />
        </div>
    )
}))

export default SettingsDown