import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = theme => ({
    container: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        flexDirection: 'column',
        alignItems: 'center',
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        backgroundColor: '#1f211f', 
        backgroundPosition: 'center',
        borderBottomStyle: 'solid',
        borderBottomColor: '#0082D9',
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

function ProductHero(props) {
	const { classes } = props;

	return (
		<Container maxWidth={false} className={classes.container}>
			<Typography color="inherit" align="center" variant="h5" className={classes.h5}>
				RxNotify empowers independant pharmacists to improve patient engagment and 
				increase workflow efficiency by opening and automating communication channels.
			</Typography>
		</Container>
	);
}

ProductHero.propTypes = {
  	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
