import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import background from '../static/img/productCurvyLines.png';
import progress from '../static/img/progress.PNG';
import bullhorn from '../static/img/bullhorn.PNG';
import personalized from '../static/img/personalized.PNG';

const styles = theme => ({
	root: {
		display: 'flex',
		overflow: 'hidden',
		backgroundColor: theme.palette.secondary.light,
		borderBottomStyle: 'solid',
		borderBottomColor: '#0082D9',
	},
	container: {
		marginTop: theme.spacing(15),
		marginBottom: theme.spacing(15),
		display: 'flex',
		position: 'relative',
	},
	item: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: theme.spacing(0, 5),
	},
	image: {
		height: 75,
	},
	title: {
		marginTop: theme.spacing(5),
		marginBottom: theme.spacing(5),
	},
	text: {
		textAlign: 'center',
	},
	curvyLines: {
		pointerEvents: 'none',
		position: 'absolute',
		top: -180,
	},
});

function ProductValues(props) {
	const { classes } = props;

	return (
		<section className={classes.root}>
			<Container className={classes.container}>
				<img
				src={background}
				className={classes.curvyLines}
				alt="curvy lines"
				/>
				<Grid container spacing={5}>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src={progress}
								alt="progress list"
							/>
							<Typography variant="h6" className={classes.title}>
								Prescription Notifications
							</Typography>
							<Typography variant="h5" className={classes.text}>
								Notify your patients of the progress and completion of their prescription.
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src={bullhorn}
								alt="bullhorn"
							/>
							<Typography variant="h6" className={classes.title}>
								Pharmacy Announcements
							</Typography>
							<Typography variant="h5" className={classes.text}>
								Blast out pharmacy related announcements to all patients.
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<img
								className={classes.image}
								src={personalized}
								alt="personalized"
							/>
							<Typography variant="h6" className={classes.title}>
								Personalized Reminders
							</Typography>
							<Typography variant="h5" className={classes.text}>
								Provide custom patient reminders.
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
}

ProductValues.propTypes = {
 	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);