import {ADD_EVENT} from '../types';

export const addEvent = (eventData) => ({
        type: ADD_EVENT,
        payload:  eventData 
});


export const removeEvent = (eventData) => ({
        type: ADD_EVENT,
        idToRemove:  eventData 
});
