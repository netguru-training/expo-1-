import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CurrentWeatherInfo, WeatherEventListElement } from '../../components';
import { getWeather } from '../../redux/apiData/actions';
import styles from './HomeScreen.styles';

const { containerStyle, currentWeatherContainerStyle } = styles;

class HomeScreen extends React.Component {
    componentDidMount() {
      const { getWeather } = this.props;
      getWeather();
    }


    render() {
        const { navigation, data, loading, error } = this.props;
        if(loading || !data.weatherData) {

            return (<View><Text>Loading</Text></View>);
        }

        return (
            <View style={containerStyle}>
                <View>
                    <Text>
                        City: {data.weatherData.data.city_name}
                    </Text>
                </View>
                <View style={currentWeatherContainerStyle}>
                    <CurrentWeatherInfo
                        headerInfo="Monday"
                        imageUrl="https://www.freeiconspng.com/uploads/weather-icon-png-16.png"
                        footerInfo="25 *C"
                    />
                </View>
                <View style={containerStyle}>
                    <WeatherEventListElement
                        headerInfo="Tuesday"
                        imageUrl="https://www.freeiconspng.com/uploads/weather-icon-png-16.png"
                        footerInfo="25 *C"
                        navigation={navigation}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    loading: state.apiData.loading,
    data: state.apiData.data,
    error: state.apiData.error,
  };
};

export default connect(mapStateToProps, { getWeather })(HomeScreen);
