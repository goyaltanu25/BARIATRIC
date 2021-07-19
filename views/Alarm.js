import React from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, Image,TextInput } from 'react-native';
import styled from 'styled-components';
import { useState } from 'react/cjs/react.development';

export default function Alarm({ navigation }) {
  const [bedtime,onChangebedtime]=useState();
  const [wakeuptime,onChangewakeuptime]=useState();
  
  const GoodMorningText=styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  color: #262323;
  `
  const UserName = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 42px;
  color: #262323;
  `
  const LabelText=styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #000000;
  `

  return (
      <>
        <Image style={styles.logo} source={require('../assets/alarmscreen.png')} />
        
        <View>
            <GoodMorningText>Good Morning!</GoodMorningText>
            <UserName>Jane Doe</UserName>
        </View>
        <View  style={styles.labelContainer}>
        <View>
            <LabelText>BedTime</LabelText>
        </View>
        <View>
        <LabelText>Wakeup</LabelText>
        </View>
        </View>
        
        
        <View style={styles.InputContainer}>
          <View style={styles.viewSection}>
            <TextInput
              placeholder="9:30pm"
              onChangeText={onChangebedtime}
              value={bedtime}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.viewSection}>
          <TextInput
              placeholder="8:30am"
              onChangeText={onChangewakeuptime}
              value={wakeuptime}
              underlineColorAndroid="transparent"
            />
  
        </View>
        </View>
        

      
       
      <TouchableOpacity onPress={()=>navigation.navigate('CalorieTracker')}>
        <View style={styles.customBtn}>
        <Text style={{ color: 'black' }}>Wakeup</Text>
        </View>
      </TouchableOpacity>
      
     
    </>
    );
}

const styles = StyleSheet.create({
  logo: {
    width:360,
    resizeMode: 'contain',
  },
  labelContainer:{
    width:330,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'baseline',
    marginVertical:20
  },
  InputContainer:{
    flex:1,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },
  customBtn: {
    height: 48,
    width: 131,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#4FB6AD',
    marginHorizontal:119,
    marginBottom:40,
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
    shadowColor:'#000',
    shadowOffset:{width:0.5,height:0.5},
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation:2,
  }, 
  viewSection: {
    backgroundColor: 'rgba(157, 223, 211, 0.3);',
    padding: 18,
    width:145,
    height:51,
    borderRadius: 8,
  },
})