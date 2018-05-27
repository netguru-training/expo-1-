import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { CurrentWeatherInfo, WeatherEventListElement, Header } from '../../components';
import { getWeather } from '../../redux/apiData/actions';
import styles from './HomeScreen.styles';

const { containerStyle, currentWeatherContainerStyle, loaderStyle } = styles;

class HomeScreen extends React.Component {
    componentDidMount() {
        const { getWeather } = this.props;
        getWeather();
    }

    prepareId(id) {
        return id.toString();
    }

    renderDayItem(days, events) {
        let dayList = [];

        for (let i = 1; i < 7; i++) {
            const weekday = moment(new Date(days[i].datetime)).format('dddd');
            const element = <WeatherEventListElement
                key={days[i].datetime}
                headerInfo={`${weekday}`}
                imageUrl={`https://www.weatherbit.io/static/img/icons/${days[i].weather.icon}.png`}
                footerInfo={`${days[i].temp}`}
                navigation={this.props.navigation}
                id={this.prepareId(days[i].datetime)}
   			      	eventsNumber={events.filter((value)=>(value.date==days[i].datetime)).length}
                isRaining={days[i].pop > 50}
            />;
            dayList.push(element);
        }

        return dayList;
    }


render() {
    const { navigation, data: { weatherData }, loading, events, error } = this.props;
         if(loading || !weatherData) {

            return (
                <View style={loaderStyle}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text>Getting your weather ;)</Text>
                </View>
            );
        }

    const { city_name, data } = weatherData.data;
    console.log(weatherData);

    return (
        <View style={containerStyle}>
            <ScrollView>
                <Header text={city_name} />
                <View style={currentWeatherContainerStyle}>
                    <CurrentWeatherInfo
                        headerInfo={moment(new Date(data[0].datetime)).format('dddd')}
                        imageUrl={`https://www.weatherbit.io/static/img/icons/${data[0].weather.icon}.png`}
                        footerInfo={`${data[0].temp}`}
                        isRaining={data[0].pop > 50}
                    />
                </View>
                <View style={containerStyle}>
                    {this.renderDayItem(data, events)}
                </View>
            </ScrollView>
        </View>
    );
}
}

const mapStateToProps = (state) => {

    console.log(`ac test events in homescrren`)
    console.log(state.events.events)
    return {
        loading: state.apiData.loading,
        data: state.apiData.data,
        error: state.apiData.error,
        events: state.events.events|| [],
    };
};

export default connect(mapStateToProps, { getWeather })(HomeScreen);
