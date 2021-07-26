import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function AddReminder({ navigation }) {

  
  return (
      <>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        
        <View>
            {/* dropdown calender */}
            {/* upload icon */}
        </View>
        <View>
            <Text>Pancakes</Text>
            <Text>Breakfast</Text>
        </View>
        <View>
            {/* dropdown calories amt */}
            {/* calories */}
        </View>
        <View>
            <Text>Calorie Details</Text>
            <Text>
                  Total Fat          10g
                  Cholesterol        59mg
                  Sodium             349mg
                  Potassium          439mg
                  Total Carbohydrate 39g
                  Protein             6g
            </Text>
        </View>
        <View>
            <Text>Ingredients</Text>
            {/* Icons */}
        </View>
      
     
    </>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 180,
        width: 180,
        marginTop: 20,
      },
})