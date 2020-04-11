import React from 'react'
import classes from './Profile.module.css'
import { connect } from 'react-redux'
import Loader from '../../components/Loader';
import ProfileItem from '../../components/ProfileItem';


const Profile = ({ loading, city, languages, social, error }) => {
	return (
		<div className={classes.Profile}>
			{
				loading 
					? <Loader />
					: <ProfileItem 
							error={error}
							city={city}
							languages={languages}
							social={social}
						/>
			}
		</div>
	)
}

const mapStateToProps = ({ profile }) => {
	return {
		loading: profile.loading,
		city: profile.city,
		languages: profile.languages,
		social: profile.social,
		error: profile.error
	}
}

export default connect(mapStateToProps, null)(Profile)