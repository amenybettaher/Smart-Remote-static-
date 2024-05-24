import React from 'react';
import { TextInput, Dimensions } from 'react-native';
import { darkGreen } from './Constants';

const { width } = Dimensions.get('window');

const Field = props => {
  const inputWidth = width * 0.58; // 58% of the screen width
  const paddingHorizontal = width * 0.02; // 2% of the screen width for padding
  const inputHeight = 35; // Height of the input field

  return (
    <TextInput
      {...props}
      style={{
        borderRadius: inputWidth / 7.8, // Maintain aspect ratio for borderRadius
        color: darkGreen,
        paddingHorizontal: paddingHorizontal,
        width: inputWidth, // Responsive width
        height: inputHeight, // Set height
        backgroundColor: '#e3f2fd',
        marginVertical: 10
      }}
      placeholderTextColor="#0a2463"
    />
  );
};

export default Field;

