import { START_FETCHING_DATA, STOP_FETCHING_DATA, SET_CITY, SET_LANGUAGES, SET_SOCIAL, SET_ERROR_PROFILE, SET_PROFILE_AS_LOADED } from "../actions/actionTypes";

const initialState = {
  city: '',
  languages: [],
  social: [],
  loading: false,
  loaded: false,
  error: ''
}

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_FETCHING_DATA:
      return {
        ...state,
        loading: true
      }
    case STOP_FETCHING_DATA:
      return {
        ...state,
        loading: false
      }
    case SET_CITY:
      return {
        ...state,
        city: payload
      }
    case SET_LANGUAGES:
      return {
        ...state,
        languages: payload
      }
    case SET_SOCIAL:
      return {
        ...state,
        social: payload
      }
    case SET_ERROR_PROFILE: 
      return {
        ...state,
        error: payload
      }
    case SET_PROFILE_AS_LOADED: 
      return {
        ...state,
        loaded: true
      }
    default: 
      return state
  }
}