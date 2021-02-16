import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  background: {
    // display: 'block',
    // position: 'absolute',
    // top: '0',
    // left: '0',
    // bottom: 0,
    // right: 0,
    // // bottom: '0',
    // // right: '0',
    // // width: '100vw',
    // // height: '100vh',
    // objectFit: 'cover',
    // zIndex: 100,
    // filter: 'grayscale(45%) opacity(90%)',
    // mixBlendMode: 'multiply',
    // overflowY: 'hidden',
    // backgroundPosition: 'left bottom',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'top',
    backgroundColor: 'black',
    filter: 'grayscale(50 %) opacity(85 %)',
    mixBlendMode: 'multiply',
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    zIndex: '-1',
  },
}));

const Background = ({ src, alt = 'background' }) => {


  const classes = useStyles();
  const theme = useTheme();
  //return <img alt={alt} src={src} className={classes.background} />;
  return (
    <div className={classes.background}>
      <Image
        alt={alt}
        src={src}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>

  )


  // < Image className = { classes.background } src = { src } alt = { alt } priority = "true" layout = "responsive" />; //objectFit="cover"
};

export default Background;
