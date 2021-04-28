import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <Typography variant='h3' align='center' className={classes.container}>
      My Blog
    </Typography>
  );
}
