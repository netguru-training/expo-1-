import React from 'react';
import {View} from 'react-native';

import WeatherEventListElement from '../WeatherEventListElement/WeatherEventListElement';

const weatherList = () => {
    const weatherList = props.days.map(day => {
        <WeatherEventListElement 
            headerInfo={day.headerInfo}
            imageUrl={day.imageUrl}
            footerInfo={day.footerInfo + ' *C'}
            navigation={day.navigation}
        />
    });

    return (
        <View >
            {weatherList}
        </View>
    )
};

export default weatherList;