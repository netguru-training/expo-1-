import {ADD_EVENT} from '../types';

export const addEvent = (eventData) => ({
        type: ADD_EVENT,
        payload: { eventData }
});
