import React from 'react';
import {StyleSheet,View,Text} from 'react-native'

const BulletComponent=({text})=>{
    return <>
    <View style={ styles.row }>
          <View style={ styles.bullet }>
            <Text>{'\u2022' + " "}</Text>
          </View>
          <View style={ styles.bulletText }>
            <Text>{text}</Text>
          </View>
        </View>
    </>
}


const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      flex: 1,
      marginVertical: 8,
      marginHorizontal:8
    },
    bullet: {
      width: 20
    },
    bulletText: {
      flex: 1
    }
  });
  

export default BulletComponent