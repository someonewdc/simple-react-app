import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthForm from '../../components/AuthForm';
import { checkAsAuth } from '../../store/actions/authActionCreators';

class AuthFormContainer extends Component {
  constructor(props) {
    super(props)

    const { history, location } = this.props
    const replaceUrl = location.state 
      ? location.state.from.pathname 
      : '/'

    if (localStorage.getItem('auth')) {
      history.replace(replaceUrl)
    }
  }

  render() {
    const { error, emailState, loginHandler } = this.props
    return (
      <AuthForm 
        error={error}
        emailState={emailState}
        loginHandler={loginHandler}
      />
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    emailState: auth.email,
    error: auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginHandler: (email, password) => dispatch(checkAsAuth(email, password))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer))