import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import UploadFileIcon from '@material-ui/icons/UploadFile';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Link, InputAdornment, Tooltip, IconButton, ClickAwayListener, Divider, ButtonGroup, MenuList, MenuItem, Avatar, Paper, Grow, Popper, Badge, Grid, withStyles, FormControl, InputLabel, TextField, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button } from '@material-ui/core'
import { useFileUpload } from "use-file-upload"
import { inject, observer } from 'mobx-react'
import Image from 'next/image'
import Context from '../../../../store'
import ImageUploading from "react-images-uploading";
import SaveIcon from '@material-ui/icons/Save';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';




const SmallAvatar = withStyles((theme) => ({
    root: {
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto',
        //backgroundColor: theme.main.palette.content.background,
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
    },
    Badge: {

    },
    Icon: {
        marginTop: 32,
        marginLeft: 32,
        borderRadius: "25%",
        color: theme.main.palette.content.reverseText,
        backgroundColor: theme.main.palette.content.text,
    },
    background: {
        //position: 'fixed',
        height: 128,
        width: 128,

    },
    usernameLabel: {
        paddingLeft: 8,
        fontSize: 24,
        color: theme.main.palette.content.text,
    },
    divider: {
        paddingTop: 8,
        //paddingBottom: 8,
    },
    textField: {
        marginLeft: 12,
        marginRight: 0,
        width: "calc(100% - 160px)",
        backgroundColor: theme.main.palette.content.reverseText,
    },
    textFieldDialog: {
        marginLeft: 12,
        marginRight: 0,
        width: "100%",
        backgroundColor: theme.main.palette.content.reverseText,
    },
    OutlinedInput: {
        zIndex: 999,
        color: theme.main.palette.content.text,
    },
    icons: {
        //color: 'rgb(142,146,151)',
    },
    inputLabel: {
        zIndex: 999,
        color: theme.main.palette.content.text,

    },
    textFieldTypography: {
        zIndex: 999,
        marginTop: -4,
        color: theme.main.palette.content.text,
    },
    gridTextField: {
        paddingTop: 12,
    },
    gridSelectButton: {
        paddingTop: 6,
        paddingLeft: 12,
    },
    popper: {
        zIndex: 1000,
    },
    labelEmailPassword: {
        paddingTop: 6,
        paddingLeft: 12,
    },
    gridLabel: {
        paddingTop: 6,
        paddingLeft: 12,
        backgroundColor: theme.main.palette.content.reverseText,
        paddingBottom: 6,
        borderRadius: 4,
    },
    labelEmailBefore: {
        fontSize: 20,
    },
    labelEmailAfter: {
        fontSize: 20,
    },
    link: {
        color: '#637bfe',
        cursor: 'pointer',
        paddingLeft: 4,
        paddingTop: 4,
    },
    changeButton: {
        width: 180,
        marginTop: 8,
    },
    cancelButton: {
        color: theme.main.palette.content.text
    },
    gridDialogItem: {
        width: '100%',
        paddingTop: 16,
        paddingLeft: -4,
    },
    gridRootDialogItem: {
        width: '100%',
        paddingRight: 24,
    }


}));

const UserAccount = inject('store')(observer(({ store }) => {
    const classes = useStyles();
    const options = ['Участник', 'Ученик', 'Преподаватель', 'Автор', 'Родитель'];


    const handleChange = (name) => (event) => {
        store.setSettingsValues(name, event.target.value)
    };

    // const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };


    //SelectorButton

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    //const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {
        //console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event, index) => {
        console.log("click")
        store.setSettingsValues("role", index)
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

    const [openEmailChangeDialog, setOpenEmailChangeDialog] = React.useState(false)
    const [openPasswordChangeDialog, setOpenPasswordChangeDialog] = React.useState(false)


    const clickedChangeEmailButton = () => {
        setOpenEmailChangeDialog(true)
    }

    const clickedChangePasswordButton = () => {
        setOpenPasswordChangeDialog(true)
    }

    const handleCloseEmail = () => {
        setOpenEmailChangeDialog(false)
    }

    const handleClosePassword = () => {
        setOpenPasswordChangeDialog(false)
    }


    return (
        <>
            <Grid spacing={1} container direction="column" className={classes.root}>
                <Grid
                    //item
                    container
                    direction="row"
                    //justifyContent="flex-start"
                    alignItems="center"
                >
                    {/* <Grid> */}
                    <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps
                        }) => (
                            <>
                                <Button onClick={onImageUpload} {...dragProps}>
                                    <Badge
                                        className={classes.Badge}
                                        overlap="circular"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        badgeContent={
                                            <UploadFileIcon className={classes.Icon} />
                                        }
                                    >
                                        <div className={classes.background}>
                                            <Image
                                                //alt={alt}
                                                src="/enot.jpg"
                                                layout="fill"
                                                objectFit="cover"
                                                quality={100}
                                            />
                                        </div>
                                    </Badge>
                                </Button>
                            </>
                        )}
                    </ImageUploading>
                    {/* </Grid>
                    <Grid> */}
                    <FormControl className={classes.textField} variant="outlined">
                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Имя пользователя</Typography> </InputLabel>
                        <OutlinedInput
                            className={classes.OutlinedInput}
                            type='text'
                            value={store.settingsNew.username}
                            onChange={handleChange('username')}
                            // endAdornment={  
                            //     <InputAdornment position="end">
                            //         <IconButton
                            //             aria-label="toggle password visibility"
                            //             // onClick={handleClickShowPassword}
                            //             // onMouseDown={handleMouseDownPassword}
                            //             edge="end"
                            //         >
                            //             <Tooltip title="Сохранить изменения" arrow>
                            //                 <SaveIcon className={classes.icons} />
                            //             </Tooltip>
                            //         </IconButton>
                            //     </InputAdornment>
                            // }
                            labelWidth={210}

                        />
                    </FormControl>
                    {/* </Grid> */}

                </Grid>
                {/* <Divider className={classes.divider} />
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Grid item container className={classes.gridSelectButton}>
                        <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                            <Button onClick={handleClick}>{options[store.settingsNew.role]}</Button>
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
                                                        selected={index === store.settingsNew.role}
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
                    {(store.settingsNew.role === 1 || store.settingsNew.role === 2 || store.settingsNew.role === 4) && <>
                        <Grid item container className={classes.gridTextField}>
                            <FormControl className={classes.textField} variant="outlined">
                                <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Имя</Typography> </InputLabel>
                                <OutlinedInput
                                    className={classes.OutlinedInput}
                                    type='text'
                                    value={store.settingsNew.firstName}
                                    onChange={handleChange('firstName')}
                                    // endAdornment={  
                                    //     <InputAdornment position="end">
                                    //         <IconButton
                                    //             aria-label="toggle password visibility"
                                    //             // onClick={handleClickShowPassword}
                                    //             // onMouseDown={handleMouseDownPassword}
                                    //             edge="end"
                                    //         >
                                    //             <Tooltip title="Сохранить изменения" arrow>
                                    //                 <SaveIcon className={classes.icons} />
                                    //             </Tooltip>
                                    //         </IconButton>
                                    //     </InputAdornment>
                                    // }
                                    labelWidth={210}

                                />
                            </FormControl>
                        </Grid>
                        <Grid item container className={classes.gridTextField}>
                            <FormControl className={classes.textField} variant="outlined">
                                <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Фамилия</Typography> </InputLabel>
                                <OutlinedInput
                                    className={classes.OutlinedInput}
                                    type='text'
                                    value={store.settingsNew.secondName}
                                    onChange={handleChange('secondName')}
                                    // endAdornment={  
                                    //     <InputAdornment position="end">
                                    //         <IconButton
                                    //             aria-label="toggle password visibility"
                                    //             // onClick={handleClickShowPassword}
                                    //             // onMouseDown={handleMouseDownPassword}
                                    //             edge="end"
                                    //         >
                                    //             <Tooltip title="Сохранить изменения" arrow>
                                    //                 <SaveIcon className={classes.icons} />
                                    //             </Tooltip>
                                    //         </IconButton>
                                    //     </InputAdornment>
                                    // }
                                    labelWidth={210}

                                />
                            </FormControl>
                        </Grid>
                        <Grid item container className={classes.gridTextField}>
                            <FormControl className={classes.textField} variant="outlined">
                                <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Отчество</Typography> </InputLabel>
                                <OutlinedInput
                                    className={classes.OutlinedInput}
                                    type='text'
                                    value={store.settingsNew.patronymic}
                                    onChange={handleChange('patronymic')}
                                    // endAdornment={  
                                    //     <InputAdornment position="end">
                                    //         <IconButton
                                    //             aria-label="toggle password visibility"
                                    //             // onClick={handleClickShowPassword}
                                    //             // onMouseDown={handleMouseDownPassword}
                                    //             edge="end"
                                    //         >
                                    //             <Tooltip title="Сохранить изменения" arrow>
                                    //                 <SaveIcon className={classes.icons} />
                                    //             </Tooltip>
                                    //         </IconButton>
                                    //     </InputAdornment>
                                    // }
                                    labelWidth={210}

                                />
                            </FormControl>
                        </Grid>
                    </>}

                </Grid> */}

                <Divider className={classes.divider} />
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Typography className={classes.labelEmailPassword}> Почта </Typography>
                    <Grid
                        className={classes.gridLabel}
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        {!store.settingsUI.hiddenEmail && <Typography className={classes.labelEmailBefore}> {store.settingsNew.emailBefore} </Typography>}
                        {store.settingsUI.hiddenEmail && <Typography className={classes.labelEmailBefore}> {"*".repeat(store.settingsNew.emailBefore.length)} </Typography>}
                        <Typography className={classes.labelEmailAfter}> {store.settingsNew.emailAfter} </Typography>
                        {store.settingsUI.hiddenEmail && <Link className={classes.link} onClick={() => store.setSettingsUIValues("hiddenEmail", false)}> Показать </Link>}
                        {!store.settingsUI.hiddenEmail && <Link className={classes.link} onClick={() => store.setSettingsUIValues("hiddenEmail", true)}> Скрыть </Link>}

                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Button variant="contained" onClick={clickedChangeEmailButton} className={classes.changeButton}>
                        Сменить почту
                    </Button>
                    <Dialog open={openEmailChangeDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Изменение адреса электронной почты </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To subscribe to this website, please enter your email address here. We
                                will send updates occasionally.
                            </DialogContentText>
                            <Grid
                                className={classes.gridRootDialogItem}
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid className={classes.gridDialogItem}>
                                    <FormControl className={classes.textFieldDialog} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Пароль</Typography> </InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type='text'
                                            value={store.settingsNew.username}
                                            onChange={handleChange('username')}
                                            // endAdornment={  
                                            //     <InputAdornment position="end">
                                            //         <IconButton
                                            //             aria-label="toggle password visibility"
                                            //             // onClick={handleClickShowPassword}
                                            //             // onMouseDown={handleMouseDownPassword}
                                            //             edge="end"
                                            //         >
                                            //             <Tooltip title="Сохранить изменения" arrow>
                                            //                 <SaveIcon className={classes.icons} />
                                            //             </Tooltip>
                                            //         </IconButton>
                                            //     </InputAdornment>
                                            // }
                                            labelWidth={210}

                                        />
                                    </FormControl>
                                </Grid>
                                <Grid className={classes.gridDialogItem}>
                                    <FormControl className={classes.textFieldDialog} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Новый адрес почты</Typography> </InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type='text'
                                            value={store.settingsNew.username}
                                            onChange={handleChange('username')}
                                            // endAdornment={  
                                            //     <InputAdornment position="end">
                                            //         <IconButton
                                            //             aria-label="toggle password visibility"
                                            //             // onClick={handleClickShowPassword}
                                            //             // onMouseDown={handleMouseDownPassword}
                                            //             edge="end"
                                            //         >
                                            //             <Tooltip title="Сохранить изменения" arrow>
                                            //                 <SaveIcon className={classes.icons} />
                                            //             </Tooltip>
                                            //         </IconButton>
                                            //     </InputAdornment>
                                            // }
                                            labelWidth={210}

                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button className={classes.cancelButton} onClick={handleCloseEmail}>отмена</Button>
                            <Button variant="contained" onClick={handleClose}>Готово</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
                <Divider className={classes.divider} />
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    <Button variant="contained" onClick={clickedChangePasswordButton} className={classes.changeButton}>
                        Сменить пароль
                    </Button>
                    <Dialog open={openPasswordChangeDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Изменение пароля</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Чтобы изменить пароль, введите сначала текущий пароль, а затем введите новый.
                            </DialogContentText>
                            <Grid
                                className={classes.gridRootDialogItem}

                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid className={classes.gridDialogItem}>
                                    <FormControl className={classes.textFieldDialog} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Текущий пароль</Typography> </InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type='text'
                                            value={store.settingsNew.username}
                                            onChange={handleChange('username')}
                                            // endAdornment={  
                                            //     <InputAdornment position="end">
                                            //         <IconButton
                                            //             aria-label="toggle password visibility"
                                            //             // onClick={handleClickShowPassword}
                                            //             // onMouseDown={handleMouseDownPassword}
                                            //             edge="end"
                                            //         >
                                            //             <Tooltip title="Сохранить изменения" arrow>
                                            //                 <SaveIcon className={classes.icons} />
                                            //             </Tooltip>
                                            //         </IconButton>
                                            //     </InputAdornment>
                                            // }
                                            labelWidth={210}

                                        />
                                    </FormControl>
                                </Grid>
                                <Grid className={classes.gridDialogItem}>
                                    <FormControl className={classes.textFieldDialog} variant="outlined">
                                        <InputLabel className={classes.inputLabel} htmlFor="outlined-adornment-password"> <Typography className={classes.textFieldTypography}>Новый пароль</Typography> </InputLabel>
                                        <OutlinedInput
                                            className={classes.OutlinedInput}
                                            type='text'
                                            value={store.settingsNew.username}
                                            onChange={handleChange('username')}
                                            // endAdornment={  
                                            //     <InputAdornment position="end">
                                            //         <IconButton
                                            //             aria-label="toggle password visibility"
                                            //             // onClick={handleClickShowPassword}
                                            //             // onMouseDown={handleMouseDownPassword}
                                            //             edge="end"
                                            //         >
                                            //             <Tooltip title="Сохранить изменения" arrow>
                                            //                 <SaveIcon className={classes.icons} />
                                            //             </Tooltip>
                                            //         </IconButton>
                                            //     </InputAdornment>
                                            // }
                                            labelWidth={210}

                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button className={classes.cancelButton} onClick={handleClosePassword}>отмена</Button>
                            <Button variant="contained" onClick={handleClosePassword}>Готово</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
                <Divider className={classes.divider} />
            </Grid>
        </>
    );
}))

export default UserAccount