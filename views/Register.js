import React from 'react';
import { StyleSheet, Text, View, TextInput ,TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { FontAwesome } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

export default function Register({navigation}) {
  const [text, onChangeText] = React.useState("Email ID");
  const [number, onChangeNumber] = React.useState("Phone Number");

  const IconContainer=styled.View`
  display:flex;
  justify-content:center;
  margin:44px 0px;
  margin-bottom:104px;
  `
  const SocialIcon = styled.View`
  height:46px;
  width:91px;
  margin:10px 15px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius:10px;
  `;

  const IconName= styled.Text`
  text-Align:center;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  `

  return (
    <ScrollView >
    <View style={styles.headView}>
      <Text style={styles.text}>from</Text>

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

      <View style={styles.viewPhoneSection}>
        <FeatherIcon style={styles.icon} name="phone" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={onChangeNumber}
          value={number}
          underlineColorAndroid="transparent"
        />
        <Icon style={styles.icon} name="arrowright" size={20} color="#000" />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
       <View style={{flex: 1, height: 1, backgroundColor: '#979797'}} />
       <View>
         <Text style={styles.Ortext}>Or</Text>
       </View>
       <View style={{flex: 1, height: 1, backgroundColor: '#979797'}} />
      </View>

      <View  style={{display:'flex',flexDirection:'row'}}>
        {/* {Social ICons} */}
        <IconContainer>
          <SocialIcon style={styles.twitterIcon}>
            <Icon name="twitter" size={30} color="#FFFFFF"/>
          </SocialIcon>
          <IconName>Twitter</IconName>
        </IconContainer>
        <IconContainer>
          <SocialIcon style={styles.fbIcon}>
          <FontAwesome name="facebook" size={30} color="#FFFFFF"/>
          </SocialIcon>
          <IconName>Facebook</IconName>
        </IconContainer>
        <IconContainer>
          <SocialIcon style={styles.googleIcon}>
           <Icon name="google" size={30} color="#FFFFFF"/>
          </SocialIcon>    
          <IconName>Google</IconName>
        </IconContainer>
       
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
       <View style={{flex: 1, height: 1, backgroundColor: '#979797'}} />
       <View>
         <Text style={styles.text}>Already a member?</Text>
       </View>
       <View style={{flex: 1, height: 1, backgroundColor: '#979797'}} />
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('RegisterWithEmail')}>
        <View style={styles.customBtn}>
        <Text style={{ color: 'black' }}>Login</Text>
        </View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headView: {
    margin: 32,
    textAlign: 'center',
    alignItems:'center',
    justifyContent:'center'
  },
   text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
    color: '#979797',
  },
  Ortext:{
    width: 50, 
    textAlign: 'center',
    color: '#979797',
    fontSize: 18,
    lineHeight: 22,
  },
  btn: {
    flex: 1,
  },
  viewSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    backgroundColor: '#52CEC3',
    color: '#4FB6AD',
    margin: 22,
    height:60,
    width: 300,
    padding: 18,
    borderRadius: 8,
  },
  viewPhoneSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    backgroundColor: '#9DDFD3',
    color: '#4FB6AD',
    margin: 22,
    height:60,
    width: 300,
    padding: 18,
    borderRadius: 8,
  },
 
  icon: {
    padding: 10,
  },
  input: {
    height: 80,
    width: 200,
  },
  customBtn: {
    height:40,
    width:100,
    padding:8,
    borderRadius: 8,
    backgroundColor: '#4FB6AD',
    alignItems: 'center', 
    justifyContent: 'center',
    textTransform:'capitalize',
    margin:20,
    shadowColor:'#000',
    shadowOffset:{width:0.5,height:0.5},
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation:2,
  },
  twitterIcon:{
    backgroundColor:'#68ABFC'
  },
  fbIcon:{
    backgroundColor:'#3A559F'
  },
  googleIcon:{
    backgroundColor:'#EB0909'
  }
})