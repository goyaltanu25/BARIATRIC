import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

import CardItem from '../components/CardItem';
import IconImage from '../components/IconImage';
import Page from '../components/Page';

export default function AddReminder({ navigation }) {

  
  return (
      <Page>
       <CardItem color='#FAFAFA'
        height='550px'>
          <View style={styles.container}>
          <TouchableOpacity onPress={()=>console.log('Save data')}>
              <IconImage src={require('../assets/tablet.png')} title="" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>console.log('Save data')}>
          <IconImage src={require('../assets/injection.png')} title="" />
          </TouchableOpacity>    
          <TouchableOpacity onPress={()=>console.log('Save data')}>
          <IconImage src={require('../assets/syrup.png')} title="" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>console.log('Save data')}>           
          <IconImage src={require('../assets/pill.png')} title="" />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>console.log('Save data')}>
          <IconImage src={require('../assets/butter.png')} title="" />
          </TouchableOpacity>
           
          </View>
      </CardItem>
      <TouchableOpacity onPress={()=>console.log('Save data')}>
        <View style={styles.customBtn}>
        <Text style={{ color: 'black' }}>Save</Text>
        </View>
      </TouchableOpacity>
     
    </Page>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        marginTop:15
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
})