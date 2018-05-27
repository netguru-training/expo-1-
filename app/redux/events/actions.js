import {ADD_EVENT,REMOVE_EVENT} from '../types';

export const addEvent = (eventData) => ({
        type: ADD_EVENT,
        payload:  eventData 
});


export const removeEvent = (eventData) => ({
        type: REMOVE_EVENT,
        idToRemove:  eventData 
});
