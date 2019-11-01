import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import facebook from '../static/img/facebook.PNG';
import twitter from '../static/img/twitter.PNG';

function Copyright() {
	return (
		<React.Fragment>
		{'© '}
		<Link color="inherit" href="https://material-ui.com/">
			RxToolbox
		</Link>{' '}
		{new Date().getFullYear()}
		</React.Fragment>
	);
}

const styles = theme => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.secondary.light,
		borderBottomStyle: 'solid',
		borderBottomColor: 'red',
		borderTopStyle: 'solid',
		borderTopColor: 'red',
	},
	container: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(8),
		display: 'flex',
	},
	iconsWrapper: {
		height: 120,
	},
	icons: {
		display: 'flex',
	},
	icon: {
		width: 48,
		height: 48,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6f6f6f',
		marginRight: theme.spacing(1),
		'&:hover': {
		backgroundColor: '#6f6f6f',
		},
	},
	list: {
		margin: 0,
		listStyle: 'none',
		paddingLeft: 0,
	},
	listItem: {
		paddingTop: theme.spacing(0.5),
		paddingBottom: theme.spacing(0.5),
	},
	language: {
		marginTop: theme.spacing(1),
		width: 150,
	},
});

function AppFooter(props) {
	const { classes } = props;

	return (
		<Typography component="footer" className={classes.root}>
			<Container className={classes.container}>
				<Grid container spacing={5}>
					<Grid item xs={6} sm={4} md={3}>
						<Grid
							container
							direction="column"
							justify="flex-end"
							className={classes.iconsWrapper}
							spacing={2}
						>
							<Grid item className={classes.icons}>
								<a href="https://www.facebook.com/RxToolboxSolutions" className={classes.icon}>
									<img src={facebook} alt="Facebook" height='35' width='35' />
								</a>
								<a href="https://twitter.com" className={classes.icon}>
									<img src={twitter} alt="Twitter" height='35' width='35' />
								</a>
							</Grid>
							<Grid item>
								<Copyright />
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Typography>
	);
}

AppFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFooter);
