import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './EventList.styles'

const {
  containerStyle,
  currentWeatherContainerStyle,
  eventTopPart,
  eventTopLeftPart,
  eventTopRightPart,
  eventDescriptor,
  eventName,
  removeStyle
} = styles


class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDescriptorVisable: false
    }
  }
  render() {
    const { name, description, removeCb, dateToRemove } = this.props

    return (
      <View
        style={containerStyle}
      >
        <View style={eventTopPart}>
          <TouchableOpacity style={eventTopLeftPart} onPress={() => this.setState({ eventDescriptorVisable: !this.state.eventDescriptorVisable })}>
            <Text style={eventName}>
               {name}
            </Text>
          </TouchableOpacity>

          <View style={eventTopRightPart}>
            <TouchableOpacity onPress={() => {
              removeCb(name+dateToRemove)
              }}>
              <Text style={styles.removeStyle}> {`Remove`} </Text>
            </TouchableOpacity>
          </View>
        </View>

        {this.state.eventDescriptorVisable &&
          <View >
            <Text style={eventDescriptor}> {description} </Text>
          </View>
        }
      </View>
    )
  }
}

// const EventList = ({
//   text,
//   description,
//   removeCb
// }) => {
//   return null
// }

export default EventList
