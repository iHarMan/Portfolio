import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './theme';

const useStyles = makeStyles((theme) => ({
  root : {
    background: theme.palette.background,
  },
}));


export default function Landing(){
  const classes = useStyles();
	return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <h2>Harmandeep Singh</h2>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      </div>
    </ThemeProvider>
	);
}