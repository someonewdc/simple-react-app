import React from 'react'
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderButton from './HeaderButton';
import classes from './Header.module.css'
import { connect } from 'react-redux';
import { setUserAsNotAuth } from '../../store/actions/authActionCreators';

const Header = ({authenticated, logoutHandler}) => {
	return (
	<AppBar position="static">
		<Container max-width="lg">
      <Toolbar className={classes.Toolbar}>
        <div>
          <HeaderButton
            exact={true}
            to="/"
            children="Информация"
          />
          <HeaderButton
            exact={false}
            to="/profile"
            children="Профиль"
          />
          <HeaderButton
            exact={false}
            to="/news"
            children="Новости"
          />
        </div>
        <HeaderButton
          activeBlocked={authenticated ? true : false}
          clickHandler={authenticated ? logoutHandler : () => {}}
          exact={true}
          to={authenticated ? '/' : '/login'}
          children={authenticated ? 'Выйти' : 'Войти'}
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