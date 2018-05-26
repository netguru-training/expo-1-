import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
import rootReducer from './app/redux/index';



const store = composeWithDevTools(applyMiddleware(ReduxThunk))(createStore)(rootReducer);

export default store;
