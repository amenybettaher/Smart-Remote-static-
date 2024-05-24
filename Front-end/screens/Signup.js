import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import { BlurView } from 'expo-blur'; // Import BlurView from expo-blur

const { width, height } = Dimensions.get('window');

const Signup = (props) => {
  // Define responsive styles
  const containerWidth = width * 0.9; // 90% of the screen width
  const headerFontSize = width * 0.15; // Adjust font size based on screen width
  const subHeaderFontSize = width * 0.03; // Adjust font size based on screen width
  const borderRadius = containerWidth * 0.28; // Maintain aspect ratio for borderRadius

  return (
    <Background>
      <BlurView intensity={5} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', width: containerWidth }}>
          <Text
            style={{
              color: 'white',
              fontSize: headerFontSize,
              fontWeight: 'bold',
              marginTop: height * 0.18, // 15% of screen height
              marginLeft: 20,
            }}>
            Register
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: subHeaderFontSize,
              fontWeight: 'bold',
              marginBottom: height * 0.02, // 2% of screen height
              marginLeft: 20,
            }}>
            Create a new account
          </Text>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              height: height * 0.7,
              width: containerWidth,
              borderTopLeftRadius: borderRadius,
              paddingTop: height * 0.05,
              alignItems: 'center',
              marginLeft: 1,
              marginTop: 10,
            }}>
            <Field placeholder="First Name" />
            <Field placeholder="Last Name" />
            <Field placeholder="Email / Username" keyboardType={'email-address'} />
            <Field placeholder="Contact Number" keyboardType={'number-pad'} />
            <Field placeholder="Password" secureTextEntry={true} />
            <Field placeholder="Confirm Password" secureTextEntry={true} />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '38%',
                paddingRight: 16,
              }}>
              <Text style={{ color: 'black', fontSize: subHeaderFontSize , marginLeft:-50 , fontWeight: 'bold'}}>
                By signing in, you agree to our 
              </Text>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: subHeaderFontSize }}>
                Terms & Conditions ,
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '78%',
                paddingRight: 16,
                marginBottom: height * 0.03,
              }}>
              <Text style={{ color: 'black', fontSize: subHeaderFontSize , marginRight:3 , fontWeight: 'bold'}}>
                and  
              </Text>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: subHeaderFontSize }}>
                Privacy Policy
              </Text>
            </View>
            <View style={{ marginLeft: -50 }}>
  <Btn
    textColor="white"
    bgColor={darkGreen}
    btnLabel="Signup"
    Press={() => {
      alert('Account created');
      props.navigation.navigate('SignIn');
    }}
  />
</View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={{ fontSize: subHeaderFontSize, fontWeight: 'bold' }}>
                Already have an account ?{' '}
              </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: subHeaderFontSize }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BlurView>
    </Background>
  );
};

export default Signup;
