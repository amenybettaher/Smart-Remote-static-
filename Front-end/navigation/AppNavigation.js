
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Signup from '../screens/Signup';
import SignIn from '../screens/SignIn';
import Remote from '../screens/Remote';
import SideBar from '../screens/SideBar';
import Setting from '../screens/Setting';
import HomePage from '../screens/HomePage';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} /> 
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Remote" component={Remote} />
        <Stack.Screen name="SideBar" component={SideBar} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="HomePage" component={HomePage} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

