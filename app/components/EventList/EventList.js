import React from 'react'
import { View, Text } from 'react-native'
import styles from './EventList.styles'

const {
    containerStyle,
    currentWeatherContainerStyle
} = styles


const EventList = ({
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

export default EventList
