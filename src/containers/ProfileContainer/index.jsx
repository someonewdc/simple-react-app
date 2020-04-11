import React from 'react'
import { connect } from 'react-redux';
import Profile from '../../pages/Profile';
import { fetchUserData } from '../../store/actions/profileActionCreators';

const ProfileContainer = ({ loaded, fetchUserData, error }) => {
  if(!loaded && !error) fetchUserData()

  return (
    <Profile />
  )
}

const mapStateToProps = ({ profile }) => {
  return {
    loaded: profile.loaded,
    error: profile.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: () => dispatch(fetchUserData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
