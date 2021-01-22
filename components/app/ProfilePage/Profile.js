import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grow, Grid, Paper, FormControl, Popper, Checkbox, Tooltip, InputLabel, ButtonGroup, TextField, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button } from '@material-ui/core'
import { useFileUpload } from "use-file-upload"
import { inject, observer } from 'mobx-react'
import Image from 'next/image'
import Link from 'next/link'

import Context from '../../../store'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link as LinkUI } from '@material-ui/core';

const useStylesUserAvatar = makeStyles((theme) => ({
  div: {
    marginLeft: -200,
    overFlow: 'hidden',
  },
  mainGrid: {
    overFlow: 'hidden',
  },
  AvatarImage: {
    width: '350px',
    height: '350px',
  },
  Button: {
    backgroundColor: theme.main.palette.buttons.secondary,
    color: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: '#324ab2',
    }
  }
}));


const UserAvatar = inject('store')(observer((props) => {
  const classes = useStylesUserAvatar();
  const defaultSrc = "/avatardefault.png";

  const { files, selectFiles } = React.useContext(Context)

  return (
    <div className={classes.div}>
      <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.mainGrid}>
        <Grid item>
          <img className={classes.AvatarImage}
            src={files?.source || defaultSrc}
            alt="Ваша Аватарка"
          />
        </Grid>
        <Grid item>
          <Button className={classes.Button} variant="contained" onClick={() =>
            selectFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
              console.log("Files Selected", { name, size, source, file });
            })
          }>
            Загрузить новый Аватар
          </Button>
        </Grid>
      </Grid>
    </div>
  )

}))

const useStylesUserMainData = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
  },
  rootProfile: {

  },
  gridTextField: {
    margin: 10,
  },
  gridFormControlLabel: {
    margin: 10,
  },
  FormControlLabel: {
    fontSize: 10,
  },
  inputLabel: {
    color: theme.main.palette.textaria.text,
  },
  gridTextField: {
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 32,
    width: '100%',
  },
  gridTextField: {
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 32,
    width: '100%',
  },
  textFieldTypography: {
    marginTop: -4,
    color: theme.main.palette.textaria.text,
  },
  typographyMain: {
    zIndex: 999,
    color: 'rgb(255,255,255)',
    fontWeight: 'bold',
  },
  typographyMainly: {
    zIndex: 999,
    color: 'rgb(142,146,151)',
  },
  gridPaper: {
    margin: 8,
    marginTop: 24,
    marginLeft: -200,
  },
  textField: {
    width: '100%',
    backgroundColor: theme.main.palette.textaria.background,
  },
  icons: {
    color: 'rgb(142,146,151)',
  },
  gridForgotPassword: {
    marginTop: 4,
    paddingLeft: 20,

  },
  forgotPassword: {
    color: 'rgb(142,146,151)',
  },
  gridEnterButtom: {
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 32,

    width: '100%',
  },
  enterButtom: {
    width: '100%',
  },
  gridForgotRegistration: {
    marginTop: 4,
    paddingLeft: 20,
    paddingBottom: 20,

  },
  forgotRegistration: {
    color: 'rgb(142,146,151)',
  },
  popper: {
    zIndex: 1100,
  },
  paper: {
    zIndex: 1100,
  },
  gridCheckbox: {
    marginTop: 4,
    paddingLeft: 16,
    paddingRight: 32,
    width: '100%',
  },
  checkboxTypography: {
    paddingTop: 2,
    color: 'rgb(142,146,151)',
  },
  tooltip: {

  },
  tooltipTypography: {
    paddingTop: 2,
    fontSize: 16,
  },
  iconHelp: {
    marginTop: 8,
    marginLeft: -10,
    color: 'rgb(142,146,151)',
  },
  Checkbox: {
    color: theme.main.palette.content.border,
  }
}));

const options = ['Участник', 'Ученик', 'Преподаватель', 'Автор', 'Родитель'];

const UserMainData = inject('store')(observer((props) => {
  const classes = useStylesUserMainData();
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,

  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const gotoAuth = (event) => {
  //     const router = Router
  //     router.push('/auth')
  //     event.preventDefault();
  // }

  //SelectorButton

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  //Checkbox

  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const wallpapers = () => {
    let count = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1))) + Math.ceil(1)
    return "/wallpapers/hp" + count.toString() + ".jpg"
  }

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.gridPaper}>
      <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
        <FormControl className={classes.textField} variant="outlined">
          <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Имя</Typography></InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text'
            value={values.email}
            onChange={handleChange('password')}
          />
        </FormControl>
      </Grid>
      <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
        <FormControl className={classes.textField} variant="outlined">
          <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Фамилия</Typography> </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text'
            value={values.password}
            onChange={handleChange('password')}
            labelWidth={70}
          />
        </FormControl>
      </Grid>
      <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
        <FormControl className={classes.textField} variant="outlined">
          <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Никнейм</Typography> </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text'
            value={values.password}
            onChange={handleChange('password')}
            labelWidth={70}
          />
        </FormControl>
      </Grid>
      <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridTextField}>
        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick}>{options[selectedIndex]}</Button>
          <Button
            color="primary"
            size="small"
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            onClick={handleToggle}
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal className={classes.popper}>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        // disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
      <Grid item container direction="row" justifyContent="flex-start" alignItems="flex-start" className={classes.gridCheckbox}>
        <FormControlLabel
          control={<Checkbox color="primary" className={classes.Checkbox} checked={state.checkedA} onChange={handleChangeCheckbox} name="checkedA" />}
          label={<Typography className={classes.checkboxTypography}> Скрыть Имя и Фамилию </Typography>}
        />
        <Tooltip className={classes.tooltip} title={<Typography className={classes.tooltipTypography}>Скрыть Имя и Фамилию от незнакомых пользоватлей. Показывать им только ваш Никнейм.</Typography>} arrow>
          <HelpOutlineIcon className={classes.iconHelp} />
        </Tooltip>
      </Grid>
      <Grid item container direction="column" justifyContent="center" alignItems="center" className={classes.gridEnterButtom}>
        <Link href="/login">
          <Button onClick={props.store.setReadyAuth} variant="contained" color="primary" className={classes.enterButtom}>
            Сохранить изменения
          </Button>
        </Link >
      </Grid>
      <Grid item container direction="column" justifyContent="center" alignItems="flex-start" className={classes.gridForgotRegistration}>
      </Grid>
    </Grid>
  )

}))



const useStylesProfile = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.main.palette.main.background,
    overFlow: 'hidden',
  },
  rootProfile: {
    width: '100%',
    height: '100%',
    overFlow: 'hidden',
  }
}));

const Profile = (props) => {
  const classes = useStylesProfile();


  return (
    <>
      <Grid spacing={1} container className={classes.root}>
        <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container direction="column" className={classes.rootProfile}>
          <UserAvatar />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>
          <UserMainData />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} xl={4} item container>

        </Grid>
      </Grid>
    </>
  );
}

export default Profile