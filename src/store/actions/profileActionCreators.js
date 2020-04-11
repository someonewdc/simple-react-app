import { START_FETCHING_DATA, STOP_FETCHING_DATA, SET_CITY, SET_LANGUAGES, SET_SOCIAL, SET_ERROR_PROFILE, SET_PROFILE_AS_LOADED } from "./actionTypes";
import { getData } from "../../axios/axios";

const setLoader = () => {
  return {
    type: START_FETCHING_DATA
  }
}

const removeLoader = () => {
  return {
    type: STOP_FETCHING_DATA
  }
}

const setCity = city => {
  return {
    type: SET_CITY,
    payload: city
  }
}

const setLanguages = languages => {
  return {
    type: SET_LANGUAGES,
    payload: languages
  }
}

const setSocial = social => {
  return {
    type: SET_SOCIAL,
    payload: social
  }
}

const setError = error => {
  return { 
    type: SET_ERROR_PROFILE,
    payload: error 
  }
}

const setAsLoaded = () => ({ type: SET_PROFILE_AS_LOADED })
 
export const fetchUserData = () => {
  const id = localStorage.getItem('id')
  return async dispatch => {
    dispatch(setLoader())
    try {
      const response = await getData(`user-info/${id}`) 
      if (response.data.status === 'ok') {
        const { city, languages, social } = response.data.data
        dispatch(setCity(city))
        dispatch(setLanguages(languages))
        dispatch(setSocial(social))
        dispatch(setAsLoaded())
      } else {
        dispatch(setError('Пользователь не найден'))
      }
    } catch (error) {
      console.log(error);
      dispatch(setError('Ошибка подключения, сервер не отвечает'))
    }
    dispatch(removeLoader())
  }
}