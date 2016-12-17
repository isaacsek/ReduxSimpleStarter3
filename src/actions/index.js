import axios from "axios";

const API_KEY = "541af34c51e754d4666f9ea8d90af574";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url = ROOT_URL + "&q=" + city + ",us";
  const request = axios.get(url);

  //console.log("Request: " + request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
