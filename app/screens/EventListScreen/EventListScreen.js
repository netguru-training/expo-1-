import React from 'react'
import { View, ScrollView } from 'react-native'
import {
    CurrentWeatherInfo,
    WeatherEventListElement
} from '../../components'
import { EventList } from '../../components/EventList/EventList'
import styles from './EventListScreen.style'

const {
    containerStyle,
    currentWeatherContainerStyle
} = styles

class EventListScreen extends React.Component {

    state = {};
    componentWillMount(props) {
        this.setState()
    }

    buildList(data) {
        let arr = [];
        data.forEach(element => {
            arr.push(<EventList text={element} />)
        });

        return arr;
    }

    render() {

        return (
            <View>
                <ScrollView>
                    <View>
                        {
                            this.buildList(this.props.data)
                        }
                    </View>
                </ScrollView>

            </View>
        )
    }
}


export default EventListScreen