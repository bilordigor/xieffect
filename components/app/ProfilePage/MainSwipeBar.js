import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core'
import Profile from './Profile';
import Castomize from '../Menu/Dialog/Castomize';

const useTabPanelStyles = makeStyles((theme) => ({
  div: {
    minHeight: '500px',
    width: 'auto',
    paddingBottom: '100px',
    overFlow: 'hidden'
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useTabPanelStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      className={classes.div}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    overFlow: 'hidden',
    marginTop: -6,
    marginLeft: -16,
    marginRight: -16,
    flexGrow: 1,
    width: 'auto',
    // positon: 'fixed',
    // left: 0,
    // top: 0,
    // bottom: 0,
    // right: 0,
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: "-12px",
      marginRight: "-16px",
      marginLeft: "-16px",
    },
    // marginTop: "-12px", 
    // marginRight: "-12px", 
    // marginLeft: "-12px", 
    backgroundColor: theme.main.palette.main.background,
  },
  AppBar: {
    overFlow: 'hidden',
    backgroundColor: theme.main.palette.content.background,
  },
  Typography: {
    color: theme.main.palette.content.text,
  }
}));

const MainSwipeBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.AppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label={<Typography className={classes.Typography}>Профиль</Typography>} {...a11yProps(0)} />
          <Tab label={<Typography className={classes.Typography}>Подписка</Typography>} {...a11yProps(1)} />
          <Tab label={<Typography className={classes.Typography}>Конфиденциальность</Typography>} {...a11yProps(2)} />
          <Tab label={<Typography className={classes.Typography}>Кастомизация</Typography>} {...a11yProps(3)} />
          <Tab label={<Typography className={classes.Typography}>Настройки</Typography>} {...a11yProps(4)} />
          <Tab label={<Typography className={classes.Typography}>Item Five</Typography>} {...a11yProps(5)} />
          <Tab label={<Typography className={classes.Typography}>Item Six</Typography>} {...a11yProps(5)} />
          <Tab label={<Typography className={classes.Typography}>Item Seven</Typography>} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Подписка
        </TabPanel>
        <TabPanel value={value} index={2}>
          Конфиденциальность
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Castomize />
        </TabPanel>
        <TabPanel value={value} index={4}>
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </SwipeableViews>

    </div>
  );
}

export default MainSwipeBar