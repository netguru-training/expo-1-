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
            console.log(`action.idToRemove ${action.idToRemove}`)

            let newArray = state.events.filter((el) => {
                if ((el.name+el.date) == action.idToRemove)
                    return false;
                else
                    return true;
            })

            // state.events.find((element, index) => {
            //     console.log(`in find`)
            //     console.log(element)
            //     if (element.date && element.date === action.idToRemove)
            //         indexToRemove = index

            // })

            // console.log(`index to remove ${indexToRemove}`)


            console.log(newArray)
            console.log(state.events)

            // if (indexToRemove > -1) {
                return {
                    ...state,
                    events: newArray
                }
            // }
            // else
            //     return state
        }

        default:
            return state
    }
}


export default eventsReducer;
