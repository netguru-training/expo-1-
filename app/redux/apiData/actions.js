import axios from 'axios';
import {
    GET_WEATHER_REQUEST,
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAIL
} from '../types';
import apiKeys from '../../../api_config';

const WEATHER_KEY = apiKeys.weatherKey;


export const getWeatherRequest = () => {
  return {
    type: GET_WEATHER_REQUEST,
  };
};

export const getWeatherSuccess = (weatherData) => {
  return {
    type: GET_WEATHER_SUCCESS,
    payload: { weatherData },
  };
};

export const getWeatherFail = (error) => {
  return {
    type: GET_WEATHER_FAIL,
    payload: { error },
  };
};


function getWeather(cityName) {
    const reqParams = `?city${cityName}&key${WEATHER_KEY}`;
    const apiUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';
}
