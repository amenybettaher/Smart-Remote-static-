import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';

const { width } = Dimensions.get('window');

export default function Btn({bgColor, btnLabel, textColor, Press}) {
  const buttonWidth = width * 0.6; // 80% of the screen width
  const fontSize = width * 0.055; // Adjust font size based on screen width

  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: buttonWidth / 7, // Maintain aspect ratio for borderRadius
        alignItems: 'center',
        width: buttonWidth,
        paddingVertical: 10,
        marginVertical: 15,
        marginLeft:50,
        marginTop:-10
      }}>
      <Text style={{
        color: textColor,
        fontSize: fontSize,
        fontWeight: 'bold'
      }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
