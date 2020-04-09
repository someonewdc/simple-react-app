import { START_POST_DATA, STOP_POST_DATA, SET_AS_AUTH, SET_EMAIL } from "../actions/actionTypes";

const initialState = {
  loading: false,
  authenticated: false,
  email: ''
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
        authenticated: true
      }
    case SET_EMAIL: {
      return {
        ...state,
        email: payload
      }
    }
    default: 
      return state
  }
}