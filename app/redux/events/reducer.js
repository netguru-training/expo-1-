import {ADD_EVENT} from '../types';

const initialState = {
    events: []
}

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENT:
            console.log('events', action.payload);
            console.log('state', state);
            return {
                events: [...state.events, action.payload]
            };
        default:
            return state
    }
}


export default eventsReducer;
