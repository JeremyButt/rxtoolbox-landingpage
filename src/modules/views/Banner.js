import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import logo from '../static/img/logo_nobackground.png';

const useStyles = makeStyles(theme => ({
	banner:{
		background: 'transparent', 
        boxShadow: 'none',
        position: 'absolute',
        color: 'black',
	},
    menuButton: {
      	marginRight: theme.spacing(2),
    },
    title: {
		flexGrow: 1,
		paddingLeft: '2em',
		color: 'inherit',
    },
}));
  

export default function Banner () {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.banner}>
            <Toolbar>
                <img src={logo} 
                    alt="logo" 
                    height="70" 
                    width="80" 
                />
                <Typography variant="h6" className={classes.title}>
                    RxToolbox
                </Typography>
                <Button color="inherit" href="#contact">Contact Us</Button>
            </Toolbar>
        </AppBar>
    );
}
