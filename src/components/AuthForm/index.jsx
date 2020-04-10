import React from 'react'
import classes from './AuthForm.module.css'
import { Form, Formik } from 'formik';
import FormikInput from '../FormikInput';
import * as Yup from 'yup'
import { Button, Typography } from '@material-ui/core';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required!')
    .email('Email must be valid!'),
  password: Yup.string()
    .required('This field is required!')
    .min(5, 'Password should have at least 5 character!')
})



const AuthForm = ({ emailState, loginHandler, error }) => {
  const initialValues = {
    email: emailState,
    password: ''
  }

  const errorMessage = error && error.split('_').join(' ')

  const submitHandler = values => {
    loginHandler(values.email, values.password)
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
                {
                  error && !dirty
                    ? <Typography color="error">
                      Error: {errorMessage}
                    </Typography>
                    : null
                }
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

export default AuthForm