import React from 'react'
import { View, Text } from 'react-native'
import styles from './Task.styles'

const {
    containerStyle,
    currentWeatherContainerStyle
} = styles


const Task = ({
    text
}) => {
    return (
        <View
            style={containerStyle}
        >
            <Text >
                {text}
            </Text>
        </View>
    )
}

export default Task
