import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import CurrentWeatherInfo from '../CurrentWeatherInfo/CurrentWeatherInfo';
import styles from './WeatherEventListElement.styles';

const {
  containerStyle,
  currentWeatherEventContainerStyle,
  currentEventsNumberStyle,
  addEventContainerStyle,
  plusStyle
} = styles;

const WeatherEventListElement = ({
  headerInfo,
  imageUrl,
  footerInfo,
  eventsNumber,
  navigation,
  id,
  isRaining
}) => {
  const eventsNumberInfo =
    eventsNumber > 0
      ? `You Have ${eventsNumber} events today`
      : 'You have no events today';

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        style={currentWeatherEventContainerStyle}
        onPress={() => navigation.navigate('EventList', {id})}
      >
        <CurrentWeatherInfo
          headerInfo={headerInfo}
          imageUrl={imageUrl}
          footerInfo={footerInfo}
          rowDirection
          isRaining={isRaining}
        />
        <Text style={currentEventsNumberStyle}>{eventsNumberInfo}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={addEventContainerStyle}
        onPress={() => navigation.navigate('EventForm', {id})}
      >
        <Text style={plusStyle}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

WeatherEventListElement.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  eventsNumber: PropTypes.number,
  headerInfo: PropTypes.string,
  footerInfo: PropTypes.string
};

WeatherEventListElement.defaultProps = {
  eventsNumber: 0,
  headerInfo: '',
  footerInfo: ''
};

export default WeatherEventListElement;
