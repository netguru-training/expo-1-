import React from 'react';
import { View } from 'react-native';
import EventForm from '../../components/EventForm/Form';

const EventFormScreen = ({ navigation }) => {
    const id = navigation.getParam("id", 0);
    return (
        <View>
            <EventForm id={id} />
        </View>
    )
};



export default EventFormScreen;
