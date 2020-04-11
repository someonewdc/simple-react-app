import React from 'react'
import classes from './AuthForm.module.css'
import { Form, Formik } from 'formik';
import FormikInput from '../FormikInput';
import * as Yup from 'yup'
import { Button, Typography } from '@material-ui/core';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Это обязательное поле!')
    .email('Email должен быть корректным!'),
  password: Yup.string()
    .required('Это обязательное поле!')
    .min(5, 'Пароль должен содержать хотя бы 5 символов!')
})



const AuthForm = ({ emailState, loginHandler, error }) => {  
  const initialValues = {
    email: emailState,
    password: ''
  }

  let errorMessage = error && error.split('_').join(' ')
  if( errorMessage.match(/wrong/) ) errorMessage = 'неверные Email или пароль'

  const submitHandler = values => {
    loginHandler(values.email, values.password)
  }

  return ( 
    <div className={classes.AuthForm}>
      <h3>Войти</h3>
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
                        Ошибка: {errorMessage}
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
                  label="Пароль"
                />
                <Button
                  disabled={!isValid || !dirty}
                  variant="contained"
                  color="primary"
                  type="submit"
                >Войти</Button>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default AuthForm