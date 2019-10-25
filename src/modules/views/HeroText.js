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
        borderTopStyle: 'solid',
        borderTopColor: 'red',
        borderBottomStyle: 'solid',
        borderBottomColor: 'red',
    },
    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <Container maxWidth={false} className={classes.container}>
      <Typography color="inherit" align="center" variant="h4" marked="center">
        Lack of bandwidth stopping outbound patient communications?
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        RxNotify by RxToolbox enables independant pharmacists to have custom and personalized automated outbound patient communications.
      </Typography>
    </Container>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
