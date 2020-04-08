import React from 'react'
import AuthForm from '../../components/AuthForm';
import classes from './Login.module.css'

const Login = () => {
	
	return (
		<div className={classes.Login}>
			<AuthForm />
		</div>
	)
}

export default Login