import { START_POST_DATA, STOP_POST_DATA, SET_AS_AUTH, SET_EMAIL, SET_AS_NOT_AUTH, SET_ERROR } from "../actions/actionTypes";

const initialState = {
  loading: false,
  authenticated: localStorage.getItem('auth'),
  email: '',
  id: localStorage.getItem('id'),
  error: null
}

export default function profileReducer(state = initialState, { type, payload }) {
  switch (type) {
    case START_POST_DATA: 
      return {
        ...state,
        loading: true
      }
    case STOP_POST_DATA: 
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
    case SET_ERROR: 
      return {
        ...state,
        error: payload
      }
    default: 
      return state
  }
}