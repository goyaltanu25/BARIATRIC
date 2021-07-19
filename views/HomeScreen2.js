import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,StatusBar } from 'react-native';

import Corousel from '../components/Corousel';

import {dummyData} from '../data/dummyData'

export default function Home({navigation}) {
  const register=()=>{
    navigation.navigate('Alarm')
  }
  const login=()=>{
  navigation.navigate('CalorieTracker')
  }
  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent"/>
      <View>
        <Corousel data={dummyData}/>
      </View>
      <View>
      <Text style={styles.subheading}>Major support in the treatment of Bariatric patients.</Text>
      </View>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  subheading:{
    margin: 80,
    textAlign:'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
 
})