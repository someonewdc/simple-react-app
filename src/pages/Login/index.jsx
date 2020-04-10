import React from 'react'
import classes from './Login.module.css'
import { connect } from 'react-redux';
import Loader from '../../components/Loader';
import AuthFormContainer from '../../containers/AuthFormContainer';

const Login = ({loading}) => {
	return (
		<div className={classes.Login}>
			{
				loading 
					? <Loader />
					: <AuthFormContainer />
			}
		</div>
	)
}

const mapStateToProps = ({ auth }) => {
	return {
		loading: auth.loading
	}
}

export default connect(mapStateToProps, null)(Login)