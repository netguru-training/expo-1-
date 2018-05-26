import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen, EventFormScreen, EventListScreen } from './app/screens';
import styles from './RootNavigator.styles';

const { container } = styles;

const Navigator = createStackNavigator({
  Home: HomeScreen,
  EventForm: EventFormScreen,
  EventList: EventListScreen
});

const RootNavigator = () => {
  return (
    <View style={container}>
      <Navigator />
    </View>
  );
};

export default RootNavigator;
