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
    root: {
        paddingTop: theme.spacing(20),
        marginBottom: 0,
        display: 'flex',
        paddingBottom: theme.spacing(10),
        backgroundColor: theme.palette.secondary.light,
        borderBottomStyle: 'solid',
        borderBottomColor: 'red',
        maxWidth: '100%',
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
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    button: {
      width: '100%',
    },
    imagesWrapper: {
      position: 'relative',
    },
    imageDots: {
      position: 'absolute',
      top: -67,
      left: -67,
      right: 0,
      bottom: 0,
      width: '100%',
      background: 'url(/static/onepirate/productCTAImageDots.png)',
    },
    image: {
      position: 'absolute',
      top: -28,
      left: -28,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: 600,
    },
    curvyLines: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -180,
    },
  });

function ProductHero(props) {
    const { classes } = props;
    
    return (
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
                        RxNotify enables you to notify patients of the status of their prescription.
                    </Typography>
                    <Button type="submit" color="primary" variant="contained" className={classes.button} href="#contact">
                        Contact Us
                    </Button>
                    </form>
                </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.imagesWrapper}>
                <Hidden smDown>
                    <div className={classes.imageDots} />
                    <img
                    src={animation}
                    alt="call to action"
                    className={classes.image}
                    />
                </Hidden>
                </Grid>
            </Grid>
            </Container>
    );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);