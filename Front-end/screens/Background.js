import React from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Background = ({ children }) => {
  return (
    <View style={{ width: width, height: height }}>
      <ImageBackground source={require("../assets/OIG3.jpg")} style={{ width: '100%', height: '103%' }} />
      <View style={{ position: "absolute", width: '100%', height: '100%' }}>
        {children}
      </View>
    </View>
  );
}

export default Background;

