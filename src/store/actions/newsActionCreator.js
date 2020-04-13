import { START_FETCHING_NEWS, STOP_FETCHING_NEWS, SET_NEWS, SET_NEWS_AS_LOADED, SET_ERROR_NEWS } from "./actionTypes";
import { getData } from "../../axios/axios";

const setLoader = () => ({ type: START_FETCHING_NEWS })

const removeLoader = () => ({ type: STOP_FETCHING_NEWS })

const setAsLoaded = () => ({ type: SET_NEWS_AS_LOADED })

const setNews = news => {
  return {
    type: SET_NEWS,
    payload: news
  }
}

const setError = error => {
  return { 
    type: SET_ERROR_NEWS,
    payload: error 
  }
}

export const fetchNews = () => {
  return async dispatch => {
    dispatch(setLoader())
    try {
      const response = await getData('news')
      await dispatch(setNews(response.data.data))      
      dispatch(setAsLoaded())
    } catch (error) {
      console.log(error);
      dispatch(setError('Ошибка подключения, сервер не отвечает'))
    }
    dispatch(removeLoader())
  }
}