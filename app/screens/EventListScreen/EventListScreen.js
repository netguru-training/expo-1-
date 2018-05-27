import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {removeEvent} from '../../redux/events/actions';
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
      console.log(`in remove ${i}`);
      this.props.removeEvent(i);
    }

    if(!data.length)
      return (<Text style={styles.noDataYetStyle}>You haven't event yet</Text>)

    return data.map((val, index) =>
      <EventList style={styles.containerStyle} key={index} name={val.name} description={val.description} removeCb={remove} dateToRemove={val.date}/>)

    // return arr;
  }

  render() {
    
    return (
      <View style={containerStyle}>
        <CurrentWeatherInfo   
          // imageUrl: PropTypes.string.isRequired,
          // rowDirection: PropTypes.bool,
          // headerInfo: PropTypes.string,
          // footerInfo: PropTypes.string


          headerInfo={this.props.weather.datetime}
          imageUrl={`https://www.weatherbit.io/static/img/icons/${this.props.weather.weather.icon}.png`}
          footerInfo={this.props.weather.temp.toString()}
          // rowDirection
        />
        <ScrollView  style={containerStyle}>
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

console.log(`mapStateToProps ac`)
  const tempId = ownProps.navigation.getParam('id',0);

  const events = state.events.events.filter((element)=>(
     element.date == tempId
  ))

  console.log(`events: `, events)

  const weather = state.apiData.data.weatherData.data.data.find(d=>{
    return d.datetime == tempId
  });
  console.log(weather)


  return {
    // data: state.apiData.days[ownProps.navigation.state.params.id].events
    events,//state.eventss[ownProps.navigation.state.params.id] && state.apiData.days[ownProps.navigation.state.params.id].events || [],
    weather
  }
}

export default connect(mapStateToProps,{removeEvent})(EventListScreen)
