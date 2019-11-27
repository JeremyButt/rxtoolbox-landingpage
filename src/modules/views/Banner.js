import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// import logo from '../../../public/logo';

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
    icon: {
        paddingTop: "5px"
    }
}));
  

export default function Banner () {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.banner}>
            <Toolbar>
                <div className={classes.title}>
                    <img src="/logo.png" 
                        alt="logo" 
                        height="60"
                        className={classes.icon}
                    />
                </div>
                <Button color="inherit" href="#contact">Contact Us</Button>
            </Toolbar>
        </AppBar>
    );
}
