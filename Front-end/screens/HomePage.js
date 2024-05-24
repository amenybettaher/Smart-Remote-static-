import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch, Dimensions } from 'react-native';
import Sidebar from './SideBar';

const DashboardScreen = () => {
  const [isAcOn, setIsAcOn] = useState(false);
  const [temperature, setTemperature] = useState(16);

  return (
    <View style={styles.mainContainer}>
      <Sidebar />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.userProfileContainer}>
            <Text style={styles.username}>khalilbouanzi's h...</Text>
            <TouchableOpacity>
              <Image source={require('../assets/person.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeMessage}>Bienvenue chez GREE+ et explorez la vie intelligente</Text>
              <TouchableOpacity style={styles.visualizeButton}>
                <Text>Cliquer pour visualiser</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{ uri: 'https://images.ctfassets.net/8tpbxzn2rg50/4EaLU9tuyonS2rpEqYawnn/b13ac66cb7bef1b58f5ec3cc0e396fc1/consommation-climatiseur.jpg?w=1200&h=629&q=75&fit=thumb&f=center' }}
              style={styles.headerImage}
            />
          </View>
          <Text style={styles.welcomeMessage}>Scene</Text>

          <View style={styles.sceneContainer}>
            <TouchableOpacity style={styles.sceneButton}>
              <Image source={require('../assets/home.png')} style={styles.icon1} />
              <Text style={styles.buttonText}>Rentrer chez soi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sceneButton}>
              <Image source={require('../assets/briefcase.png')} style={styles.icon1} />
              <Text style={styles.buttonText}>Sortir de la maison</Text>
            </TouchableOpacity>
          </View>

          {/* Tab Bar */}
          <View style={styles.tabBar}>
            <Text style={styles.activeTab}>Tout</Text>
            <Text style={styles.tab}>Salle de séjour</Text>
            <Text style={styles.tab}>Chambre c</Text>
            <Image source={require('../assets/menu.png')} style={styles.icon3} />
          </View>

          <View style={styles.cardsContainer}>
            <View style={styles.acControlContainer}>
              <View style={styles.acInterface}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../assets/snow.webp')} style={styles.icon} />
                  <Text style={styles.acTitle}>Climatiseur virtuel</Text>
                </View>

                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isAcOn ? '#f5dd4b' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={(value) => setIsAcOn(value)}
                  value={isAcOn}
                />

                <Text style={styles.temperature}>{temperature}°C</Text>

                <View style={styles.tempAdjustment}>
                  <TouchableOpacity onPress={() => setTemperature(temperature - 1)} style={styles.tempButton}>
                    <Image source={require('../assets/remove.png')} style={styles.icon4} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setTemperature(temperature + 1)} style={styles.tempButton}>
                    <Image source={require('../assets/add1.png')} style={styles.icon4} />
                  </TouchableOpacity>
                </View>

                {isAcOn && (
                  <TouchableOpacity onPress={() => setIsAcOn(false)} style={{ position: 'absolute', right: Dimensions.get('window').width * 0.02, top: Dimensions.get('window').width * 0.02 }}>
                    <Image source={require('../assets/power1.png')} style={styles.iconpower} />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.anotherCardContainer}>
              <View style={styles.anotherCardInner}>
                <Text style={styles.anotherCardTitle}>+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row', // Adjusted to accommodate sidebar
  },
  container: {
    flex: 1,
    marginLeft: -350, // Adjust margin to prevent overlap by sidebar
    marginTop: 100,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Dimensions.get('window').width * 0.02,
    backgroundColor: '#FFF',
    marginBottom: Dimensions.get('window').width * 0.03,
    top: -40,
  },
  username: {
    flex: 1,
    marginLeft: Dimensions.get('window').width * 0.16,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').width * 0.04,
    backgroundColor: '#FFF',
    borderRadius: Dimensions.get('window').width * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  headerImage: {
    width: '50%',
    height: Dimensions.get('window').height * 0.2,
  },
  welcomeContainer: {
    width: '50%',
  },
  welcomeMessage: {
    fontSize: Dimensions.get('window').width * 0.04,
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width * 0.01,
  },
  visualizeButton: {
    backgroundColor: '#DDD',
    padding: Dimensions.get('window').width * 0.03,
    borderRadius: Dimensions.get('window').width * 0.01,
    marginTop: Dimensions.get('window').width * 0.01,
    marginRight: Dimensions.get('window').width * 0.01,
    marginHorizontal: Dimensions.get('window').width * 0.01,
  },
  sceneContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  sceneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: Dimensions.get('window').width * 0.025,
    borderRadius: Dimensions.get('window').width * 0.02,
    margin: Dimensions.get('window').width * 0.01,
  },
  buttonText: {
    marginLeft: Dimensions.get('window').width * 0.03,
    fontSize: Dimensions.get('window').width * 0.04,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Dimensions.get('window').width * 0.02,
    paddingHorizontal: Dimensions.get('window').width * 0.05,
    backgroundColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: Dimensions.get('window').width * 0.01,
    marginBottom: 15,
  },
  tab: {
    fontSize: Dimensions.get('window').width * 0.04,
    color: '#000',
    padding: Dimensions.get('window').width * 0.02,
  },
  activeTab: {
    fontSize: Dimensions.get('window').width * 0.04,
    color: '#000',
    padding: Dimensions.get('window').width * 0.02,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  menuIcon: {
    padding: Dimensions.get('window').width * 0.02,
  },
  icon: {
    width: 30,
    height: 30,
  },
  icon1: {
    width: 20,
    height: 20,
  },
  icon3: {
    width: 40,
    height: 40,
  },
  iconpower: {
    width: 50,
    height: 50,
    marginRight: -15,
    marginTop: -10,
  },
  icon4: {
    width: 10,
    height: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Dimensions.get('window').width * 0.04,
  },
  acControlContainer: {
    flex: 1,
    padding: Dimensions.get('window').width * 0.02,
    backgroundColor: '#f2f2f2',
    borderRadius: Dimensions.get('window').width * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginRight: Dimensions.get('window').width * 0.02, // Space between cards
  },
  acInterface: {
    backgroundColor: '#81b0ff',
    borderRadius: Dimensions.get('window').width * 0.02,
    padding: Dimensions.get('window').width * 0.02,
    alignItems: 'center',
  },
  anotherCardContainer: {
    flex: 1,
    padding: Dimensions.get('window').width * 0.02,
    backgroundColor: '#f2f2f2',
    borderRadius: Dimensions.get('window').width * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginLeft: Dimensions.get('window').width * 0.02, // Space between cards
  },
  anotherCardInner: {
    flex: 1,
    backgroundColor: '#81b0ff',
    borderRadius: Dimensions.get('window').width * 0.02,
    padding: Dimensions.get('window').width * 0.02,
    alignItems: 'center',
    justifyContent: 'center', // Center the "+" text
  },
  anotherCardTitle: {
    fontSize: Dimensions.get('window').width * 0.04,
    fontWeight: 'bold',
    color: '#fff',
  },
  acTitle: {
    fontSize: Dimensions.get('window').width * 0.04,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: Dimensions.get('window').width * 0.02,
    marginTop: 40,
    marginLeft: -30,
  },
  temperature: {
    fontSize: Dimensions.get('window').width * 0.06,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: Dimensions.get('window').width * 0.02,
  },
  tempAdjustment: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  tempButton: {
    backgroundColor: '#fff',
    padding: Dimensions.get('window').width * 0.02,
    borderRadius: Dimensions.get('window').width * 0.01,
  },
});

export default DashboardScreen;
