import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Image from 'next/image'


const Background = ({ src, alt = 'background' }) => {
  const useStyles = makeStyles((theme) => ({
    background: {
      display: 'block',
      position: 'fixed',
      top: '0',
      left: '0',
      // bottom: '0',
      // right: '0',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 100,
      filter: 'grayscale(45%) opacity(90%)',
      mixBlendMode: 'multiply',
      backgroundColor: theme.main.palette.content.main,
      //overflowY: 'hidden',
      // backgroundAttachment: 'fixed',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: 'top',
      //filter: 'grayscale(50 %) opacity(85 %)',
      //mixBlendMode: 'multiply',
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  //return <img alt={alt} src={src} className={classes.background} />;
  return <Image className={classes.background} src={src} alt={alt} layout="fill" objectFit="cover"/>;
};

export default Background;
