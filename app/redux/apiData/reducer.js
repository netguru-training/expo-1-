import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL
} from '../types';

const initialState = {
  data: []
}

function apiData(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export { apiData }
