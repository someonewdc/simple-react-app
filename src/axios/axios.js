import * as axios from "axios";

const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1'

export const getData = urlParams => axios.get(`${url}/${urlParams}`)

export const postData = (urlParams, data) => axios.post(`${url}/${urlParams}`, data) 