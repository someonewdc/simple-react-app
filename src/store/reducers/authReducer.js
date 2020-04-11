import { START_POSTING_DATA, STOP_POSTING_DATA, SET_AS_AUTH, SET_EMAIL, SET_AS_NOT_AUTH, SET_ERROR_AUTH } from "../actions/actionTypes";

const initialState = {
  loading: false,
  authenticated: localStorage.getItem('auth'),
  email: '',
  id: localStorage.getItem('id'),
  error: ''
}

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_POSTING_DATA: 
      return {
        ...state,
        loading: true
      }
    case STOP_POSTING_DATA: 
      return {
        ...state,
        loading: false
      }
    case SET_AS_AUTH: 
      return {
        ...state,
        authenticated: true,
        id: payload
      }
    case SET_AS_NOT_AUTH: 
      return {
        ...state,
        authenticated: false,
        id: null
      }
    case SET_EMAIL:
      return {
        ...state,
        email: payload
      }
    case SET_ERROR_AUTH: 
      return {
        ...state,
        error: payload
      }
    default: 
      return state
  }
}