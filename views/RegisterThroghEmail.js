import React from 'react';
import { StyleSheet, Text, View, TextInput ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon  from '@expo/vector-icons/Entypo';


export default function RegisterThroghEmail({navigation}) {
  const [text, onChangeText] = React.useState("janedoe11@gmail.com");
  const [password, onChangePassword] = React.useState("Password");
  const [name, onChangeName] = React.useState("Jane Doe");

  return (
    <View style={styles.headView}>

      <View style={styles.viewSection}>
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          onChangeText={onChangeText}
          value={text}
          underlineColorAndroid="transparent"
        />
        <Icon style={styles.icon} name="check" size={20} color="#4FB6AD" />
      </View>

      <View style={styles.viewSection}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
          underlineColorAndroid="transparent"
        />
        <EntypoIcon style={styles.icon} name="eye-with-line" size={20} color="#4FB6AD" />
      </View>

      <View style={styles.viewSection}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={onChangeName}
          value={name}
          underlineColorAndroid="transparent"
        />
      </View>

      <Text style={styles.text}>Password should be a minimum of 8 characters and should contain letters and numbers</Text>


      <TouchableOpacity onPress={()=>navigation.navigate('RegisterWithPhone')}>
        <View style={styles.customBtn}>
        <Text style={{ color: 'black' }}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headView: {
    margin: 12,
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
  viewSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    backgroundColor: '#F0FFF8',
    color: '#4FB6AD',
    margin: 22,
    width: 329,
    height:101,
    padding: 18,
    borderRadius: 8,
    borderWidth:1,
    borderColor:'#4FB6AD'
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
  }
})