import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Button from '../components/Button';

import animation from '../static/img/animation-crop.gif';
import background from '../static/img/productCurvyLines.png';

const styles = theme => ({
    preroot:{
        backgroundColor: theme.palette.secondary.light,
        borderBottomStyle: 'solid',
        borderBottomColor: '#0082D9',
    },
    root: {
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(10),
		width: "100%",
        display: 'flex',
        position: 'relative',
    },
    cardWrapper: {
          zIndex: 1,
    },
    card: {
      	display: 'flex',
      	justifyContent: 'center',
      	backgroundColor: '#6f6f6f',
      	padding: theme.spacing(8, 3),
      	color: 'white',
    },
    cardContent: {
      	maxWidth: 400,
    },
    textField: {
	  	width: '100%',
	  	margin: 0,
      	marginTop: theme.spacing(3),
	  	marginBottom: theme.spacing(2),
    },
    button: {
      	width: '100%',
    },
    imagesWrapper: {
    	position: 'relative',
    },
    image: {
      	position: 'absolute',
      	top: '-10%',
      	left: '-10%',
      	width: 600,
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
		top: -180,
		right: 0,
    },
});

function HeroAnimation(props) {
    const { classes } = props;
    
    return (
        <div className={classes.preroot}>
        <Container className={classes.root} component="section">
            <img src={background} className={classes.curvyLines} alt="curvy lines" />
            <Grid container>
                <Grid item xs={12} md={6} className={classes.cardWrapper}>
                <div className={classes.card}>
                    <form className={classes.cardContent}>
                    <Typography variant="h4" align='center' gutterBottom style={{color: "white", paddingBottom: '10%'}}>
                        Too busy to call patients?
                    </Typography>
                    <Typography variant="h5" align='center' gutterBottom style={{paddingBottom: '15%'}}>
                        RxNotify enables you to automatically notify all patients of the status of their prescription.
                    </Typography>
                    <Button type="submit" color="primary" variant="contained" className={classes.button} href="#contact">
                        Contact Us
                    </Button>
                    </form>
                </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.imagesWrapper}>
					<Hidden smDown>
						<img src={animation}
							 alt="call to action"
							 className={classes.image}
						/>
					</Hidden>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
}

HeroAnimation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroAnimation);