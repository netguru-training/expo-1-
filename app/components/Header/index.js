import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';


const Header = ({text}) => (
  <View style={[styles.view]}>
    <Text style={[styles.text]}>
      {text}
    </Text>
  </View>
);

Header.propTypes = {
  text: PropTypes.string
};

const styles = StyleSheet.create({
  view: {
    width: '100%'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Header;
