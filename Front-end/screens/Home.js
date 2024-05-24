import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, Animated, Easing } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';

const { width, height } = Dimensions.get('window');

const Home = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000, // Adjust the duration as needed
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start();
    
    // Move the text up and down continuously
    Animated.loop(
      Animated.sequence([
        Animated.timing(
          translateYAnim,
          {
            toValue: -3,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        ),
        Animated.timing(
          translateYAnim,
          {
            toValue: 3,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        )
      ])
    ).start();
  }, [fadeAnim, translateYAnim]);

  return (
    <Background>
      <View style={styles.container}>
        <Animated.Text style={[styles.header, styles.marginBottom, { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }]}>Welcome</Animated.Text>
        <Btn bgColor={darkGreen} textColor='white' btnLabel="SignIn" Press={() => props.navigation.navigate("SignIn")} />
        <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.1, // 10% of screen width
    marginVertical: height * 0.1, // 10% of screen height
    marginLeft: 25
  },
  header: {
    color: 'white',
    fontSize: width * 0.1,
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 10,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  marginBottom: {
    marginBottom: height * 0.05, // Dynamic bottom margin based on screen height
  },
});

export default Home;
