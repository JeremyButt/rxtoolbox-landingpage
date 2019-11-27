import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

import animation from '../static/img/animation-crop.gif';

const styles = theme => ({
	root: {
		paddingTop: theme.spacing(15),
		paddingBottom: theme.spacing(10),
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
		top: '-10%',
		left: '-10%',
		maxWidth: 600,
	},
});

function ProductCTA(props) {
	const { classes } = props;
	const [open, setOpen] = React.useState(false);
	const [status, setStatus] = React.useState("");

	const handleSubmit = (ev) => {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = () => {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			form.reset();
			setStatus("SUCCESS");
			console.log("Message SENT!");
		} else {
			setStatus("ERROR");
			console.log("Message NOT SENT!");
		}
		};
		xhr.send(data);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Container id="contact" className={classes.root} component="section">
			<Grid container>
				<Grid item xs={12} md={6} className={classes.cardWrapper}>
					<div className={classes.card}>
						<form 
							onSubmit={handleSubmit} 
							className={classes.cardContent}
        					action="https://formspree.io/xnqnnboy"
        					method="POST"
						>
							<Typography variant="h2" component="h2" gutterBottom>
								Want more information?
							</Typography>
							<Typography variant="h5">
								Enter your email address and we will be in touch.
							</Typography>
							<TextField noBorder className={classes.textField} placeholder="Your email" type="email" name="email"/>
							<Button type="submit" color="primary" variant="contained" className={classes.button}>
								Submit
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
			<Snackbar
				open={open}
				onClose={handleClose}
				message="Thanks! We will be in contact regarding your interest."
			/>
		</Container>
	);
}

ProductCTA.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);