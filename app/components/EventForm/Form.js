import  * as React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';


class EventForm extends React.Component {
    state = {
        name: '',
        time: '',
        description: '',
        isDateTimePickerVisible: false
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };


    render() {
        console.log('state', this.state.name, this.state.description, this.state.time)
        return (
            <View>
                <Text>Name</Text>
                <TextInput onChangeText={(name) => this.setState({name: name})}/>
                <View style={{ width: 300 }}>
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                        <Text>Show DatePicker</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode={'time'}
                    />
                </View>
                <Text>Description</Text>
                <TextInput onChangeText={(description) => this.setState({description: description})}/>
            </View>
        )
    }
}

export default EventForm;
