import React from 'react'
import { View, ScrollView } from 'react-native'
import {
    CurrentWeatherInfo,
    WeatherEventListElement
} from '../../components'
import { Task } from './Task.view'
import styles from './HomeScreen.styles'

const {
    containerStyle,
    currentWeatherContainerStyle
} = styles

class TaskListScreen extends React.Component {

    state = {};
    componentWillMount(props) {
        this.setState()
    }

    buildList(data) {
        let arr = [];
        data.forEach(element => {
            arr.push(<Task text={element} />)
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


export default TaskListScreen
