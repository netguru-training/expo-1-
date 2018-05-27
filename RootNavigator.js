import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen, EventFormScreen, EventListScreen } from './app/screens';
import styles from './RootNavigator.styles';

const { container } = styles;

const Navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${'Forecast'}`,
    }),
  },
  EventForm: {
    screen: EventFormScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Add event for`,
    }),
  },
  EventList: {
    screen: EventListScreen,
    navigationOptions: ({ navigation }) => ({
      title: `Events`,
    }),
  }
});

const RootNavigator = () => {
  return (
    <View style={container}>
      <Navigator />
    </View>
  );
};

export default RootNavigator;
