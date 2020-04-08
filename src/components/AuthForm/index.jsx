import React from 'react'
import classes from './AuthForm.module.css'
import { Form, Formik } from 'formik';
import FormikInput from '../FormikInput';
import * as Yup from 'yup'
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import { setEmail, setPassword, checkAsAuth } from '../../store/actions/actionCreators';
import { useHistory } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required!')
    .email('Email must be valid!'),
  password: Yup.string()
    .required('This field is required!')
    .min(8, 'Password should have at least 8 character!')
})

const AuthForm = ({ currentPassword, currentEmail, authHandler, email, password }) => {  

  const history = useHistory()  

  const initialValues = {
    email: currentEmail,
    password: currentPassword
  }

  const submitHandler = values => {
    if (values.email === 'Admin@mail.ru'  && values.password === '12345678') {
      authHandler()
      history.replace('/profile')
    }
  }

  return (
    <div className={classes.AuthForm}>
      <h3>Login</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={LoginSchema}
      >
        {
          ({ dirty, isValid }) => {
            return (
              <Form>
                <FormikInput
                  name="email"
                  required
                  type="email"
                  label="Email"
                />
                <FormikInput
                  name="password"
                  required
                  type="password"
                  label="Password"
                />
                <Button
                  disabled={!isValid || !dirty}
                  variant="contained"
                  color="primary"
                  type="submit"
                >Sign in</Button>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

const mapStateToProps = ({ authForm }) => {
  return {
    email: authForm.currentEmail,
    password: authForm.currentPassword,
    isAuth: authForm.isAuth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    emailHandler: email =>  dispatch(setEmail(email)),
    passwordHandler: password =>  dispatch(setPassword(password)),
    authHandler: () => dispatch(checkAsAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)