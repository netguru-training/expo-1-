import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './EventList.styles'

const {
  containerStyle,
  currentWeatherContainerStyle
} = styles


const EventList = ({
  text,
  description,
  removeCb
}) => {
  return (
    <View
      style={containerStyle}
    >
      <Text >
        {text}
        {description}
      </Text>
      <TouchableOpacity onPress={removeCb}>
      <Text> {`button`} </Text>
        {/* <Image
          style={styles.button}
          source={require('./myButton.png')}
        /> */}
      </TouchableOpacity>
    </View>
  )
}

export default EventList
