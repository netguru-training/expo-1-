import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './EventList.styles'

const {
  containerStyle,
  currentWeatherContainerStyle,
  eventTopPart,
  eventTopLeftPart,
  eventTopRightPart,
  eventDescriptor
} = styles


class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDescriptorVisable: false
    }
  }
  render() {
    const { text, description, removeCb } = this.props
    return (
      <View
        style={containerStyle}
      >
        <View style={eventTopPart}>
          <TouchableOpacity style={eventTopLeftPart} onPress={() => this.setState({ eventDescriptorVisable: !this.state.eventDescriptorVisable })}>
            <Text >
              {text}
            </Text>
          </TouchableOpacity>

          <View style={eventTopRightPart}>
            <Text> {`Remove`} </Text>
          </View>
        </View>

        {this.state.eventDescriptorVisable &&
          <View >
            <Text> {description} </Text>
          </View>
        }


        <TouchableOpacity onPress={removeCb}>

          {/* <Image
          style={styles.button}
          source={require('./myButton.png')}
        /> */}
        </TouchableOpacity>
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
