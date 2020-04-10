import React from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HeaderButton from './HeaderButton';
import { connect } from 'react-redux';
import { setUserAsNotAuth } from '../../store/actions/authActionCreators';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));

const Header = ({authenticated, logoutHandler}) => {
	const classes = useStyles();

	return (
	<AppBar position="static">
		<Container max-width="lg">
		<Toolbar>			
		<Typography variant="h6" className={classes.title}>
      <HeaderButton
        exact={true}
        to="/"
        children="Home"
      />
      <HeaderButton
        exact={false}
        to="/profile"
        children="Profile"
      />
      <HeaderButton
        exact={false}
        to="/news"
        children="News"
      />
		</Typography>
    <HeaderButton
      clickHandler={authenticated ? logoutHandler : () => {}}
      exact={false}
      to={authenticated ? '/' : '/login'}
      children={authenticated ? 'Logout' : 'Login'}
    />
	</Toolbar>
	
			
	</Container>
	</AppBar>
	)
}

const mapStateToProps = ({auth}) => {
  return {
    authenticated: auth.authenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutHandler: () => dispatch(setUserAsNotAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)