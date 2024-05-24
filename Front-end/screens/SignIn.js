import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur'; // Import BlurView from expo-blur
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';

const { width, height } = Dimensions.get('window');

const Login = (props) => {
  // Define responsive styles
  const containerWidth = width * 0.9; // Reduced width to 90% of screen width
  const headerFontSize = width * 0.13;
  const subHeaderFontSize = width * 0.035;
  const welcomeBackFontSize = width * 0.09;
  const borderRadius = containerWidth * 0.28;

  return (
    <Background>
      <BlurView intensity={1} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', width: containerWidth }}>
          <Text
            style={{
              color: 'white',
              fontSize: headerFontSize,
              fontWeight: 'bold',
              marginVertical: height * 0.02,
              marginTop:140
            }}>
            Login
          </Text>
          <Text
              style={{
                color: 'white',
                fontSize: subHeaderFontSize,
                fontWeight: 'bold',
                marginBottom: height * 0.04,
                marginTop:-10
              }}>
              Login to your account
            </Text>
          <View
             style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)', // Increased opacity for better contrast
              height: height * 0.62,
              width: containerWidth,
              borderTopLeftRadius: borderRadius,
              paddingTop: height * 0.1,
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: welcomeBackFontSize, color: darkGreen, fontWeight: 'bold' ,marginTop:-20 , marginBottom:30}}>
              Welcome Back
            </Text>
          
            <Field
              placeholder="Email / Username"
              keyboardType={'email-address'}
            />
            <Field placeholder="Password" secureTextEntry={true} />
            <View
              style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: height * 0.07 }}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: subHeaderFontSize }}>
                Forgot Password ?
              </Text>
            </View>
            <View style={{ marginLeft: -50 }}> 
  <Btn
    textColor='white'
    bgColor={darkGreen}
    btnLabel="Login"
    Press={() => {
      alert('Logged In');
      props.navigation.navigate('HomePage');
    }}
  />
</View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
              <Text style={{ fontSize: subHeaderFontSize, fontWeight: "bold" }}>Don't have an account ? </Text>
              <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: subHeaderFontSize }}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BlurView>
    </Background>
  );
};

export default Login;
