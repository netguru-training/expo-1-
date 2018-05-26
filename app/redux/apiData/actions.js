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

export function getWeather() {
    return (dispatch) => {
        const apiUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';
        dispatch(getWeatherRequest());
        navigator.geolocation.getCurrentPosition((loc) => {
            const { latitude, longitude } = loc.coords;
            const reqParams = `lat=${latitude}&lon=${longitude}&key=${WEATHER_KEY}`;
            axios.get(`${apiUrl}?${reqParams}`).then((res) => {
                dispatch(getWeatherSuccess(res));
            }).catch((err) => {
                dispatch(getWeatherFail(err));
            });
        });
    }
}
