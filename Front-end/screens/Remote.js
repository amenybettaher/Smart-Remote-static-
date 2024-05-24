import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const iconSize = width * 0.1; // 10% of the screen width
const buttonSize = width * 0.15; // 15% of the screen width

const ThermostatComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <View style={styles.iconRow}>
          <Image source={require('../assets/1 AUTO MODE.png')} style={styles.icon} />
          <Image source={require('../assets/2 COOLD MODE.png')} style={styles.icon} />
          <Image source={require('../assets/3 DRY MODE.png')} style={styles.icon} />
          <Image source={require('../assets/4 FAN .png')} style={[styles.icon, styles.highContrastIcon]} />
          <Image source={require('../assets/5 HEAT MODE.png')} style={styles.icon} />
        </View>

        <View style={styles.horizontalLine} />
        <View style={styles.temperatureRow}>
          <Text style={styles.temperatureText}>23</Text>
          <Text style={styles.tem}>C</Text>
          <View style={styles.verticalLine} />
          <View style={styles.autoColumn}>
            <Text style={styles.autoText}>AUTO</Text>
          <View style={styles.iconRow1}>

          <Image source={require('../assets/FAN.png')} style={styles.iconauto2} />
          <Image source={require('../assets/FAN.png')} style={styles.iconauto1} />
          <Image source={require('../assets/FAN.png')} style={styles.iconauto} />

          </View>

            <View style={styles.lineSeparator} />
            <Text style={styles.extraText}>00</Text>
            <Text style={styles.te}>C</Text>
            <View style={styles.iconRow2}>
            <Image
              source={require('../assets/SWING LOGO.png')}
              style={styles.temperatureImg}
            />
              <Image
              source={require('../assets/TURBO LOGO.png')}
              style={styles.temperatureImg}
            />
            </View>

            <Text style={styles.extraTextt}>000%</Text>
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.connectedRow}>
          <Text style={styles.connectedText}>CONNECTED</Text>
        </View>
      </View>
      <View style={styles.power}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#f50057', zIndex: 4 }]} >
          <Image
            source={require('../assets/OFF.png')}
            style={styles.powerButton}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.exit}>
      <TouchableOpacity style={[styles.button, { backgroundColor: 'grey', zIndex: 4 }]} 
             onPress={() => navigation.navigate('HomePage')}>
          <Image
            source={require('../assets/exit.png')}
            style={styles.exitButton}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ex}>
        <TouchableOpacity style={styles.blackButton}>
          <Text style={styles.buttonText}>Mode</Text>
        </TouchableOpacity>
        <View style={styles.directionalContainer}>
          <View style={styles.directionalWrapper}>
            <TouchableOpacity style={[styles.directionButton, styles.topLeftButton]} />
            <TouchableOpacity style={[styles.directionButton, styles.topRightButton]} />
            <TouchableOpacity style={[styles.directionButton1, styles.bottomLeftButton]} />
            <TouchableOpacity style={[styles.directionButton1, styles.bottomRightButton]} />
            <View style={styles.middleRow}>
              <TouchableOpacity style={styles.modeButton} />
              <View style={styles.grayButtonsContainer}>
                <TouchableOpacity style={styles.grayButton}>
                  <Image source={require('../assets/UP.png')} style={styles.ico} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton1}>
                  <Image source={require('../assets/SWING.png')} style={styles.ico1} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton2}>
                  <Image source={require('../assets/FAN.png')} style={styles.ico2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.grayButton3}>
                  <Image source={require('../assets/DOWN.png')} style={styles.ico3} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#59ac4a' }]} />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#eba440' }]} />
        <TouchableOpacity style={[styles.button, { backgroundColor: '#1982c4' }]} />
      </View>
      <Text style={styles.beko}>BEKO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blackButton: {
    width: 73,
    height: 73,
    borderRadius: 50,
    backgroundColor: '#93999f',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 144, // Adjust spacing if needed
    top: 187,
    zIndex: 5,
    borderWidth: 1
  },
  pageContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    backgroundColor: '#b7e4c7',
    borderRadius: 10,
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 5,
    borderColor: 'black',
    marginTop: 65,
    
  },
  ico: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 14
  },
  ico1: {
    width: 35,
    height: 35,
    marginTop: 9,
  },
  ico2: {
    width: 32,
    height: 32,
    marginTop: 7,
    marginLeft: 12
  },
  ico3: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 14
  },
  iconRow: {
    flexDirection: 'row',
    marginBottom: 0,
    padding: 2,
 
  },
  iconRow1: {
    flexDirection: 'row',
    top:-5,
    marginLeft:50,
    
  },
  iconauto: {
    width: 35,
    height:35,
    top:-10,
    marginLeft:5
  },
  iconauto1: {
    width: 25,
    height:25,
    opacity: 0.1,
    marginLeft:5

  },
  iconauto2: {
    width: 20,
    height:20,
    opacity: 0.1,
    top:5,

  },
  autoText: {
    marginLeft: -100,
    opacity: 0.2,
  },
  iconRow2:{
    flexDirection: 'row',
     top:22,
     marginLeft:65
 
  },
  temperatureImg: {
    width: 35,
    height: 35,
    marginTop: -27,
    marginLeft: -70,
   
  },
  icon: {
    width: iconSize,
    height: iconSize,
    marginLeft: 22,
    opacity: 0.1,
  },
  highContrastIcon: {
    opacity: 1,
  },
  horizontalLine: {
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    width: 307,
    marginLeft: -5
  },
  verticalLine: {
    borderLeftWidth: 3,
    borderLeftColor: 'black',
    height: 110,
    marginHorizontal: 0,
    marginLeft: 40,
  },
  temperatureRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  temperatureText: {
    fontSize: 60,
    marginLeft: 27,
    fontFamily: 'RobotoCondensed-Regular'
  },
  tem: {
    fontSize: 20,
    marginBottom: -29,
    marginLeft: 4
  },
  autoColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  lineSeparator: {
    height: 3,
    width: 150,
    backgroundColor: 'black',
    marginVertical: 0,
    marginTop:-10,
    marginLeft: 2,
  },
  extraText: {
    marginLeft: 65,
    fontSize: 23,
  },
  extraTextt: {
    marginLeft: 61,
    marginTop: -12,
    fontSize: 22,
  },
  connectedRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  connectedText: {
    marginLeft: -160,
    fontWeight: 'bold',
    fontSize: 20,
    padding:5
  },
  te: {
    marginRight: -100,
    marginTop: -22,
  },
  temperatureImage: {
    width: 40,
    height: 40,
    marginTop: -27,
    marginLeft: -70,
  },
  ex: {
    marginTop: -70,
  },
  modeButton: {
    width: 100,
    height: 100,
    borderRadius: 0,
    backgroundColor: '#93999f',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
    
  },
  grayButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  grayButton: {
    width: 48,
    height: 52,
    backgroundColor: '#93999f',
    borderRadius: 50,
    top: -51,
    left: 27.5,
    zIndex: 2
  },
  grayButton1: {
    width: 52,
    height: 47,
    backgroundColor: '#93999f',
    borderRadius: 50,
    top: 3,
    left: -76,
    zIndex: 2
  },
  grayButton2: {
    width: 52,
    height: 47,
    backgroundColor: '#93999f',
    borderRadius: 50,
    top: 3,
    left: -21,
    zIndex: 2
  },
  grayButton3: {
    width: 47,
    height: 52,
    backgroundColor: '#93999f',
    borderRadius: 50,
    top: 52,
    left: -124,
    zIndex: 2,
  },
  directionalButtons: {
    flexDirection: 'row',
    marginLeft: -150,
  


  },
  directionButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    pointerEvents: 'none',
  },
  directionButton1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    top: 75,
    pointerEvents: 'none',
  },
  powerButton: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 10,
   
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 6
  },
  power: {
    width: 5,
    height: 5,
    top: 100,
    marginLeft: 65,
    zIndex: 4,
   
  },
  exit: {
    width: 5,
    height: 5,
    marginLeft:205,
    top:95
  },
  exitButton: {
    width: 20,
    height: 20,
    marginTop: 15,
    marginLeft: 15
  },
  beko: {
    marginTop: 20,
    marginLeft: 145,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00509d',
    fontFamily: 'Papyrus, fantasy'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 130,
    marginLeft: 67,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 20,
  },
  arrowImage: {
    width: 30,
    height: 30,
    marginLeft: 30
  },
  arrowImage1: {
    width: 30,
    height: 30,
    marginLeft: -30,
    marginTop: 5
  },
  arrowImg: {
    width: 20,
    height: 20,
    marginTop: 20
  },
  arrowImg1: {
    width: 20,
    height: 20,
    marginTop: -25
  },
  ex: {
    marginTop: -40,
  },
  directionalContainer: {
    alignItems: 'center',
    marginTop: 90,
    marginBottom: -80
  },
  directionalWrapper: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    position: 'relative',
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  topLeftButton: {
    top: -13,
    left: -12.5,
    
  },
  topRightButton: {
    top: -13,
    right: -15.5,
  },
  bottomLeftButton: {
    position: 'absolute',
    top: 84,
    left: -12.5,
  },
  bottomRightButton: {
    position: 'absolute',
    top: 84,
    right: -15,
  },
});

export default ThermostatComponent;