import React from 'react';
import { View, Image, Text } from 'react-native';

export default RainSymbol = () => {

    return (
        <View>
            <Image
                source={require('../../assets/rain.png')}
                style={{width: 20, height: 20, resizeMode: Image.resizeMode.contain, margin: 3}}
            />
        </View>
    )
}
