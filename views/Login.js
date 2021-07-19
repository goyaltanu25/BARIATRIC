import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather'


export default function Login({navigation}) {
  const [text,onChangeText]=useState("janedoe@gmail.com");
  const [password,onChangePassword]=useState();
  return (
    <ScrollView>
      <View>
        <Image style={styles.logo} source={require('../assets/loginpage.png')} />
        <Text style={styles.title}>AI Emadi Hospital</Text>
      </View>
      <View>
      <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.viewSection}>
        <Icon style={styles.icon} name="mail" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          onChangeText={onChangeText}
          value={text}
          underlineColorAndroid="transparent"
        />
        <Icon style={styles.icon} name="arrowright" size={20} color="#000" />
      </View>

      <View style={styles.viewSection}>
        <FeatherIcon style={styles.icon} name="phone" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
          underlineColorAndroid="transparent"
        />
        <Icon style={styles.icon} name="arrowright" size={20} color="#000" />
      </View>
       
      <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
        <View style={styles.customBtn}>
        <Text style={{ color: 'black' }}>Next</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: 'center',
  },
  logo: {
    flex: 1,
    width:360,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    position:'absolute',
    color: '#FFFF',
    fontSize: 30,
    width:360,
    marginTop:100,
    lineHeight:40,
    textAlign:'center'
  },
  loginText:{
     display:'flex',
     color:'black',
     width:79,
     height:66,
     marginHorizontal:149,
     marginBottom:20,
     fontSize:30,
     fontWeight:"500",
  },
  subheading: {
    margin: 30,
    textAlign: 'center',
  }, 
  viewSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    backgroundColor: '#F0FFF8',
    color: '#4FB6AD',
    margin: 22,
    width: 288,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderWidth:2,
    borderColor:'#4FB6AD'
  },
  customBtn: {
    height: 40,
    width: 100,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#4FB6AD',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:129,
    marginBottom:40,
    textTransform: 'capitalize',
    shadowColor:'#000',
    shadowOffset:{width:0.5,height:0.5},
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation:2,
  },
  input:{
    height:46,
    width:188,
    paddingHorizontal:8
  }

})