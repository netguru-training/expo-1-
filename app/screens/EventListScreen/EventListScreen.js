import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import {
  CurrentWeatherInfo,
  WeatherEventListElement
} from '../../components'
import EventList from '../../components/EventList/EventList'
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
    // let arr = [];
    // data.forEach(element => {
    //     arr.push(<EventList text={element} />)
    // });
    console.log(data)


    const remove = (i) => {
      console.log(`remove ${i}`)
    }

    return data.map((val, index) =>
      <EventList key={index} text={val.text} description={val.description} />)

    // return arr;
  }

  render() {

    return (
      <View style={containerStyle}>
             <CurrentWeatherInfo
                        headerInfo="Monday"
                        imageUrl="https://www.freeiconspng.com/uploads/weather-icon-png-16.png"
                        footerInfo="25 *C"
                    />
        <ScrollView>
          {
            this.buildList(this.props.events)
          }
        </ScrollView>

      </View>
    )
  }
}

// EventListScreen.propTypes = {
//   events: PropTypes.array,
//   weather: PropTypes.object,
// }

// EventListScreen.defaultProps = {

// }

function mapStateToProps(state, ownProps) {

  return {
    // data: state.apiData.days[ownProps.navigation.state.params.id].events
    events: state.apiData.days[ownProps.navigation.state.params.id].events || [],

  }
}

export default connect(mapStateToProps)(EventListScreen)
