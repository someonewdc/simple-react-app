import { START_POST_DATA, STOP_POST_DATA, SET_AS_AUTH, SET_EMAIL, SET_AS_NOT_AUTH, SET_ERROR } from "./actionTypes";
import axios from 'axios'

const setLoader = () => ({ type: START_POST_DATA })

const removeLoader = () => ({ type: STOP_POST_DATA })

const setUserAsAuth = id => ({ type: SET_AS_AUTH, payload: id })

export const setUserAsNotAuth = () => {
  localStorage.removeItem('id')
  localStorage.removeItem('auth')
  return  { 
    type: SET_AS_NOT_AUTH
  }
}

const setEmail = email => {
  return {
    type: SET_EMAIL,
    payload: email
  }
}

const setError = error => {
  return {
    type: SET_ERROR,
    payload: error
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
      const { status, data, message } = response.data
      
      if (status === 'ok') {
        localStorage.setItem('auth', true)
        localStorage.setItem('id', data.id)
        dispatch(setUserAsAuth(data.id))
      } else {
        dispatch(setError(message))
      }

      dispatch(setEmail(email))
      dispatch(removeLoader())
    } catch (error) {
      console.log(error);
      dispatch(setEmail(email))
      dispatch(setError(error))
      dispatch(removeLoader())
    }
  }
}