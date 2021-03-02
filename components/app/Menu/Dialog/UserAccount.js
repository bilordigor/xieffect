import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import UploadFileIcon from '@material-ui/icons/UploadFile';
import { Avatar, Badge, Grid, withStyles, FormControl, InputLabel, TextField, OutlinedInput, FormControlLabel, Switch, AppBar, Tabs, Tab, Typography, Box, Button } from '@material-ui/core'
import { useFileUpload } from "use-file-upload"
import { inject, observer } from 'mobx-react'
import Image from 'next/image'
import Context from '../../../../store'
import ImageUploading from "react-images-uploading";

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
    }


}));

const UserAccount = inject('store')(observer((props) => {
    const classes = useStyles();
    // const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    return (
        <>
            <Grid spacing={1} container direction="column" className={classes.root}>
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Grid item>
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
                    </Grid>
                    <Grid item>
                        <Typography className={classes.usernameLabel}> bilord </Typography>
                    </Grid>

                </Grid>

            </Grid>
        </>
    );
}))

export default UserAccount