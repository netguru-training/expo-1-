import { ADD_EVENT, REMOVE_EVENT } from '../types';

const initialState = {
    events: []
}

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload]
            };

        case REMOVE_EVENT: {
            let indexToRemove = -1;
            state.events.find((element, index) => {
                if (element.date === action.idToRemove)
                    indexToRemove = index
            })

            if (indexToRemove > -1) {
                return {
                    ...state,
                    events: [...state.events.slice(indexToRemove, 1)]
                }
            }
            else
                return state
        }

        default:
            return state
    }
}


export default eventsReducer;
