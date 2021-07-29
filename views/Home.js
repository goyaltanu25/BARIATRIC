import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {

  const register = () => {
    navigation.navigate('Register')
  }

  const login = () => {
    navigation.navigate('DashboardScreen')
  }
  return (
      <LinearGradient colors={['#f5f5f5','#f5faf9','#f0faf9','#a7dbd7']} style={styles.contentContainer}>
      <View style={styles.headView}>
        <Text style={styles.boldText}>BARIATRIC HEALTHCARE TRACKING SYSTEM</Text>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.title}>AI Emadi Hospital</Text>
      </View>
      
      <Text style={styles.subheading}>Major support in the treatment of Bariatric patients.</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={register}>
          <View style={styles.customRegBtn}>
            <Text style={{ color: 'black' }}>Register</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={login}>
          <View style={styles.customLoginBtn}>
            <Text style={{ color: 'black' }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>

      </LinearGradient> 
    );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex : 1,
    height:'100%'
  },
  headView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'25%'
  },
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20
  },
  title: {
    padding: 8,
    color: '#3a98db',
    fontSize: 20,
    textAlign: 'center',
  },
  subheading: {
    margin: 30,
    textAlign: 'center',
  },
  customLoginBtn:{
    height: 40,
    width: 100,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#4FB6AD',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
    shadowColor:'#000',
    shadowOffset:{width:0.5,height:0.5},
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation:2,
  },
  customRegBtn: {
    height: 40,
    width: 100,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#9DDFD3',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
    shadowColor:'#000',
    shadowOffset:{width:0.5,height:0.5},
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation:2,
  }, 
  logo: {
    height: 173,
    width: 173,
    marginTop: 20,
  },
})