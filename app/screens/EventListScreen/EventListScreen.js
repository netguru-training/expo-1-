import React from 'react'
import { View, ScrollView, Text} from 'react-native'
import { connect } from 'react-redux'

import {
  CurrentWeatherInfo,
  WeatherEventListElement
} from '../../components'
import EventList  from '../../components/EventList/EventList'
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


    const remove = (i)=>{
      console.log(`remove ${i}`)
    }

    return data.map((val, index) =>
      <EventList key={index} text={val.text} description={val.description}  />)

    // return arr;
  }

  render() {

    return (
      <View>
        <Text > {`from weather data`} </Text>
        <ScrollView>
          {
            this.buildList(this.props.data)
          }
        </ScrollView>

      </View>
    )
  }
}
function mapStateToProps(state, ownProps) {


  console.log(`mapStateToProps state ${JSON.stringify(state)} `)
  console.log(`ownprops ${JSON.stringify(ownProps)}`)
  return {
    data: state.apiData.days[ownProps.navigation.state.params.id].events
  }
}

export default connect(mapStateToProps)(EventListScreen)
