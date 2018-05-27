import React, { Component } from 'react';
import { View } from 'react-native';
import EventForm from '../../components/EventForm/Form';


class EventFormScreen extends Component {
    render() {
        const { navigation } = this.props;
        const id = navigation.getParam("id", 0);
        return (
            <View style={styles.container}>
                <EventForm id={id} />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#F0F8FF',
    },
}



export default EventFormScreen;
