import { START_FETCHING_NEWS, STOP_FETCHING_NEWS, SET_NEWS, SET_NEWS_AS_LOADED, SET_ERROR_NEWS } from "../actions/actionTypes";

const initialState = {
  news: [],
  loaded: false,
  loading: false,
  error: ''
}

export const newsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case START_FETCHING_NEWS:
      return {
        ...state, 
        loading: true
      }
    case STOP_FETCHING_NEWS: 
      return {
        ...state,
        loading: false
      }
    case SET_NEWS_AS_LOADED: 
      return {
        ...state,
        loaded: true
      }
    case SET_NEWS: 
      return {
        ...state,
        news: payload
      }
    case SET_ERROR_NEWS:
      return {
        ...state,
        error: payload
      }
    default: 
      return state
  }
} 