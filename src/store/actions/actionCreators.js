import { START_POST_DATA, STOP_POST_DATA, SET_AS_AUTH, SET_EMAIL } from "./actionTypes";
import axios from 'axios'

const setLoader = () => ({ type: START_POST_DATA })

const removeLoader = () => ({ type: STOP_POST_DATA })

const setUserAsAuth = () => ({ type: SET_AS_AUTH })

const setEmail = email => {
  return {
    type: SET_EMAIL,
    payload: email
  }
}

export const checkAsAuth = (email, password) => {
  return async dispatch => {

    const postData = {
      email,
      password
    }

    try {
      dispatch(setLoader())
      const response = await axios
        .post('https://mysterious-reef-29460.herokuapp.com/api/v1/validate', postData)
      if (response.data.status === 'ok') {
        localStorage.setItem('auth', true)
        dispatch(setUserAsAuth())
      }
      dispatch(setEmail(email))
      dispatch(removeLoader())
    } catch (error) {
      console.log(error);
    }
  }
}