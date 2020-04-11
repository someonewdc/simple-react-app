import { START_POSTING_DATA, STOP_POSTING_DATA, SET_AS_AUTH, SET_EMAIL, SET_AS_NOT_AUTH, SET_ERROR_AUTH } from "./actionTypes";
import { postData } from '../../axios/axios'

const setLoader = () => ({ type: START_POSTING_DATA })

const removeLoader = () => ({ type: STOP_POSTING_DATA })

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
    type: SET_ERROR_AUTH,
    payload: error
  }
}

export const checkAsAuth = (email, password) => {
  return async dispatch => {
    const userData = {
      email,
      password
    }
    dispatch(setLoader())
    try {

      const response = await postData('validate', userData)
      const { status, data, message } = response.data
      if (status === 'ok') {
        localStorage.setItem('auth', true)
        localStorage.setItem('id', data.id)
        dispatch(setUserAsAuth(data.id))
      } else {
        dispatch(setError(message))
      }
      dispatch(setEmail(email))

    } catch (error) {

      console.log(error);
      dispatch(setEmail(email))
      dispatch(setError('ошибка подключения, сервер не отвечает'))

    }
    dispatch(removeLoader())
  }
}