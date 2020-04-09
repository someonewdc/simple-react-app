import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthForm from '../../components/AuthForm';
import { checkAsAuth } from '../../store/actions/actionCreators';

class AuthFormContainer extends Component {

  componentWillMount() {
    const history = this.props.history
    const location = this.props.location

    if (localStorage.getItem('auth')) {
      history.replace(location.state.from.pathname)
    }
  }

  render() {
    return (
      <AuthForm 
        emailState={this.props.emailState}
        authHandler={this.props.authHandler}
      />
    )
  }
}

const mapStateToProps = ({ loginPage }) => {
  return {
    emailState: loginPage.email
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authHandler: (email, password) => dispatch(checkAsAuth(email, password))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer))