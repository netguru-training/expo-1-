import React from 'react';
import {View} from 'react-native';

import WeatherEventListElement from '../WeatherEventListElement/WeatherEventListElement';

const eventList = (props) => {
    const weatherList = props.days.map((day, i) => {
        <WeatherEventListElement 
            headerInfo={day.headerInfo}
            imageUrl={day.imageUrl}
            footerInfo={day.footerInfo + ' *C'}
            navigation={day.navigation}
            id={i}
        />
    });

    return (
        <View>
            {weatherList}
        </View>
    )
};

export default eventList;