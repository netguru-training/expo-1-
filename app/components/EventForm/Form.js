import  * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import {addEvent} from '../../redux/events/actions'


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
        const dateFormatted = date.toLocaleDateString();
        this.setState({time: dateFormatted})
        this._hideDateTimePicker();
    };

    saveEventsData = () => {
       const eventsData = {
           name: this.state.name,
           time: this.state.time,
           description: this.state.description
       }

       this.props.addEvent(eventsData)
    }

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
                <Button title="Save" onPress={this.saveEventsData}/>
            </View>
        )
    }
}


const mapStateToProps = ({events}) => ({
    events
});

export default connect(mapStateToProps, {addEvent})(EventForm);
