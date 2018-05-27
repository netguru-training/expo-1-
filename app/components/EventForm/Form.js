import  * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {connect} from 'react-redux';
import {addEvent} from '../../redux/events/actions';



class EventForm extends React.Component {
    state = {
        name: '',
        time: '',
        description: '',
        date: this.props.id,
        isDateTimePickerVisible: false
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const time = `${hours}:${minutes}`;
        this.setState({time});
        this._hideDateTimePicker();
    };

    saveEventsData = () => {
       const eventsData = {
           name: this.state.name,
           time: this.state.time,
           description: this.state.description,
           date: this.state.date
       }

       this.props.addEvent(eventsData);

        this.setState({
            name: "",
            time: "",
            description: "",
            date: ""
        });
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Name</Text>
                <TextInput style={styles.input} value={this.state.name} onChangeText={(name) => this.setState({name: name})} underlineColorAndroid='transparent' />
                <View style={{ width: 300, marginBottom: 25 }}>
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                        <Text >Show DatePicker</Text>
                    </TouchableOpacity>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        mode={'time'}
                    />
                </View>
                <Text style={styles.text}>Description</Text>
                <TextInput style={styles.input} value={this.state.description} onChangeText={(description) => this.setState({description: description})} underlineColorAndroid='transparent' />
                <View><Button title="Save" onPress={this.saveEventsData} /></View>
            </View>
        )
    }
}


const mapStateToProps = ({events}) => ({
    events
});

const styles = {
    container: {
        padding: 50
    },
    input: {
        marginBottom: 20,
        borderWidth: 2,
        borderColor: 'lightblue',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 20,
    }
}


export default connect(mapStateToProps, {addEvent})(EventForm);
