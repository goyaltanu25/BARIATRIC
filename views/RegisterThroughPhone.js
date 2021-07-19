import React from 'react';
import { StyleSheet, Text, View, TextInput ,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default function RegisterThroghPhone({navigation}) {
  const [name, onChangeName] = React.useState("Jane Doe ");
  const [number, onChangeNumber] = React.useState("Phone Number");

  return (
    <View style={styles.headView}>

      <View style={styles.viewSection}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={onChangeNumber}
          value={number}
          underlineColorAndroid="transparent"
        />
        <Icon style={styles.icon} name="check" size={20} color="#4FB6AD" />
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


      <Text style={styles.text}>You will receive a 4 digit code to verify next.</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('OTP')}>
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
    height: 51,
    width: 260,
  },
  customBtn: {
    height:51,
    width:162,
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