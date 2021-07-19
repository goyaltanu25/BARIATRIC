import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';



export default function OTP({ navigation }) {
  const [text, onChangeText] = React.useState();


  return (
    <View style={styles.headView}>
      <Text style={styles.text}>The code is sent to {'837*****90'}</Text>

      <View style={styles.otpInputView}>
      {[0, 1, 2, 3].map((item, index) => (
      <TextInput
          key={index}
          style={styles.otpInput}
          onChangeText={onChangeText}
          value={text}
          underlineColorAndroid="transparent"
        />))}
      </View>




      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.customBtn}>
          <Text style={{ color: 'black' }}>Submit</Text>
        </View>
      </TouchableOpacity>

      <Text>Didn’t receive the code?</Text>
      <Text>Re-send code</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headView: {
    margin: 12,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 22,
    color: '#262323',
    marginTop:60,
    marginBottom:10
  },
  otpInputView: {
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    margin:25,
    height: 76,
    width: 72,
  },
  otpInput: {
    backgroundColor: '#F0FFF8',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#4FB6AD',
    margin:10,
    padding:15,
  },
  customBtn: {
    height: 51,
    width: 162,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#4FB6AD',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize',
    margin: 20,
    shadowColor:'#000',
    shadowOffset:{width:0.5,height:0.5},
    shadowOpacity:0.5,
    shadowRadius:3,
    elevation:2,
  }
})