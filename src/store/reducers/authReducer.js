import { SET_EMAIL, SET_PASSWORD, CHECK_AS_AUTH } from "../actions/actionTypes";

const initialState = {
  isAuth: false,
  email: '',
  password: '',
}

export default function authReducer(state = initialState, { type, payload }) {
  console.log(state);
  
  switch (type) {
    case SET_EMAIL: 
      return {
        ...state,
        email: payload
      }
    case SET_PASSWORD: 
      return {
        ...state,
        password: payload
      }
    case CHECK_AS_AUTH: 
      return {
        ...state,
        isAuth: state.currentEmail === state.requiredEmail && state.currentPassword === state.requiredPassword 
          ? true
          : false
      }
    default: 
      return state
  }
}