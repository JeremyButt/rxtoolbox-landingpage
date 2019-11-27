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
                <span style={{color: '#0082D9'}}>RxNotify</span> empowers <span style={{color: 'red'}}>independent pharmacies</span> improve <span style={{color: '#0082D9'}}>patient engagement</span> and increase <span style={{color: '#0082D9'}}>productivity</span>.
			</Typography>
		</Container>
	);
}

ProductHero.propTypes = {
  	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
