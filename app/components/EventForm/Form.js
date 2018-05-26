import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import TimePicker from 'react-native-time-picker';

class EventForm extends React.Component {
   state = {
       name: '',
       time: '',
       description: ''
   }



    render() {
       console.log('state', this.state.name, this.state.description, this.state.time)
        return (
            <View>
                <Text>Name</Text>
                <TextInput onChangeText={(name) => this.setState({name: name})}/>
                <Text>Time</Text>
                <TextInput />
                <Text>Description</Text>
                <TextInput onChangeText={(description) => this.setState({description: description})}/>
                <TimePicker
                    selectedHour={0}
                    selectedMinute={30}
                    minuteInterval={5}
                    loop={true} />
            </View>
        )
    }
}

export default EventForm;
