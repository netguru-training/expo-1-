import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { CurrentWeatherInfo, WeatherEventListElement, Header } from '../../components';
import { getWeather } from '../../redux/apiData/actions';
import styles from './HomeScreen.styles';

const { containerStyle, currentWeatherContainerStyle } = styles;

class HomeScreen extends React.Component {
    componentDidMount() {
      const { getWeather } = this.props;
      getWeather();
    }

    prepareId(id){
        return id.toString();
    }

    renderDayItem(days) {
        let dayList = [];

        for (let i = 1; i<7; i++) {
            const element = <WeatherEventListElement
                headerInfo={days[i].datetime}
                imageUrl={`https://www.weatherbit.io/static/img/icons/${days[i].weather.icon}.png`}
                footerInfo={days[i].temp}
                navigation={this.props.navigation}
                id={this.prepareId(days[i].datetime)}
            />;
            dayList.push(element);
        }
        return dayList;
    }


    render() {
        const { navigation, data: { weatherData }, loading, error } = this.props;
        if(loading || !weatherData) {

            return (<View><Text>Loading</Text></View>);
        }

        const { city_name, data } = weatherData.data;
        console.log(weatherData);

        return (
            <View style={containerStyle}>
                <ScrollView>
                <Header text={city_name}/>
                    <View style={currentWeatherContainerStyle}>
                        <CurrentWeatherInfo
                            headerInfo="Monday"
                            imageUrl={`https://www.weatherbit.io/static/img/icons/${data[0].weather.icon}.png`}
                            footerInfo={`${data[0].temp}`}
                        />
                    </View>
                    <View style={containerStyle}>
                        {this.renderDayItem(data)}
                    </View>
                </ScrollView>
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
