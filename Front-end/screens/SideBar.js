import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Text, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Get device window dimensions
const window = Dimensions.get('window');

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const toggleSidebar = () => {
    Animated.timing(animatedWidth, {
      toValue: isSidebarOpen ? 0 : 1,
      duration: 250,
      useNativeDriver: false
    }).start();
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarWidth = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: [0, window.width * 0.8] // Sidebar width when open
  });

  return (
    <View style={styles.container}>
     
      <Animated.View style={[styles.sidebar, { width: sidebarWidth }]}>
        <View style={styles.menu}>
        <Image
              source={require('../assets/img.webp')} 
              style={styles.img}
            />
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Setting')}>
            <Image
              source={require('../assets/info.png')} 
              style={styles.menuItemImage}
            />
            <Text style={styles.menuText}>Retour d'information</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('RemoteSearch')}>
          <Image
              source={require('../assets/cant.png')} 
              style={styles.menuItemImage}
            />
            <Text style={styles.menuText}>Can't Trouver ma télécomande</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Share')}>
          <Image
              source={require('../assets/partager.png')} 
              style={styles.menuItemImage}
            />
            <Text style={styles.menuText}>Partager</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Image
              source={require('../assets/politique.png')} 
              style={styles.menuItemImage}
            />
            <Text style={styles.menuText}>Politique de confidentialité</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MoreApps')}>
          <Image
              source={require('../assets/app.png')} 
              style={styles.menuItemImage}
            />
            <Text style={styles.menuText}>Plus nos application</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.menuItem1} onPress={() => navigation.navigate('Remote')}>
          <Image
              source={require('../assets/Remote.png')} 
              style={styles.menuItemImage1}
            />
            <Text style={styles.menuText}>Remote Control</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem2} onPress={() => navigation.navigate('Home')}>
          <Image
              source={require('../assets/exit.png')} 
              style={styles.menuItemImage2}
            />
            <Text style={styles.menuText}>Sign Out</Text>
          </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity style={styles.menuIcon} onPress={toggleSidebar}>
        <Image
          source={isSidebarOpen ? require('../assets/menu.png') : require('../assets/menu.png')}
          style={styles.menuIconImage}
        />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sidebar: {
    backgroundColor: '#e3f2fd',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 2,
    overflow: 'hidden',
    paddingTop: 100,
  },
  menuItem: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
   
  },
  menuItemImage: {
    width: 25, 
    height: 25, 
    marginRight: 7, 
  },
   menuItem1: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
   marginTop: 200
  },
  menuItemImage2: {
    width: 25, 
    height: 25, 
    marginRight: 7, 
  },
  menuItem2: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
   marginTop: 5
  },
  menuItemImage1: {
    width: 25, 
    height: 25, 
    marginRight: 7, 
  },
  menu: {
    marginTop: 50,
  },
  menuText: {

    fontFamily: 'Montserrat-Bold', // Use your custom font name here
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    
  },
  menuIcon: {
    zIndex: 3,
    marginTop: 75,
    marginLeft: 25,
  },
  menuIconImage: {
    width: window.width * 0.1, // Responsive width
    height: window.width * 0.1, // Responsive height
  },
  exitButton: {
    width: 60,
    height: 60,
    marginTop: 10,
    marginLeft: 10
  },
  remoteText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
    marginTop: 250,
  },
  img:{
    width:290,
    height:135,
    marginTop:-40,
    marginBottom:30
  }
});

export default Sidebar;
