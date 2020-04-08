import { SET_PASSWORD, SET_EMAIL, CHECK_AS_AUTH } from "./actionTypes";

export const setEmail = email => {
  return {
    type: SET_EMAIL,
    payload: email
  }
}

export const setPassword = password => {
  return {
    type: SET_PASSWORD,
    payload: password
  }
}

export const checkAsAuth = () => ({ type: CHECK_AS_AUTH })