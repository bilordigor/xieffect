import React from 'react';

//import ImageUploader from 'react-images-upload';

import { Paper, makeStyles, useTheme, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { SentimentVerySatisfiedOutlined } from '@material-ui/icons';

import { inject, observer } from 'mobx-react'

const useStyles = makeStyles((theme) => ({
    GridHeaderButton: {
        marginTop: "11px",
        marginLeft: "6px",
        marginBottom: "8px",
    }
}));

const AddCourse = inject('store')(observer((props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    //const { addCourseF } =

    const [courseAvatar, setCourseAvatar] = React.useState();

    const onDrop = newpicture => {
        setCourseAvatar(newpicture);
    };
    const [nameCourse, setNameCourse] = React.useState('');
    const [secondNameCourse, setSecondNameCourse] = React.useState('');

    return (
        <div>
            <Button variant="contained" color="primary" className={classes.GridHeaderButton} onClick={handleClickOpen}>
                Создать Курс
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Создать Курс</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите основные данные вашего нового курса, чтобы продолжить
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Название"
                        type="text"
                        fullWidth
                        //value={nameCourse}
                        // onChange={nameCourse => setNameCourse(nameCourse.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Категория"
                        type="text"
                        fullWidth
                        //value={secondNameCourse}
                        // onChange={secondNameCourse => setSecondNameCourse(secondNameCourse.target.value)}
                    />
                    {/* <ImageUploader
                        singleImage={true}
                        withPreview={true}
                        withIcon={true}
                        onChange={onDrop}
                        imgExtension={['.jpg', '.gif', '.png',]}
                        maxFileSize={5242880}
                        buttonText="Выбрать изображение"
                    /> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    {/* onClick={addCourseF.bind(null, nameCourse, secondNameCourse, courseAvatar)} */}
                    <Button  color="primary">
                        Продолжить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}));

export default AddCourse;