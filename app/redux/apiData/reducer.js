import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL
} from '../types';

const fakeDay = {
  events: [
    { text: 'Task1 ', description: 'description' },
    { text: 'Task 2', description: 'description' }
  ]
}

const fakeDays = [
  fakeDay
]

const initialState = {
  loading: false,
  error: {},
  data: {},
  days: fakeDays
}

function apiData(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
        error: {}
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        errorMsg: '',
        loading: false
      };
    case GET_WEATHER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state
  }
}

export { apiData }
