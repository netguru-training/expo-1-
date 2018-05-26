import { combineReducers } from 'redux'
import { apiData } from './apiData/reducer'
import eventsReducer from './events/reducer'

export default combineReducers({
  apiData, events: eventsReducer
})
