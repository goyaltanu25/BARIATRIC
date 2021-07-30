import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';



import HeaderButton from '../components/HeaderButton';

import CardItem from '../components/CardItem';
import Page from '../components/Page';
import styled from 'styled-components';

const BMICalculator = props => {

  const FlexItem=styled.View`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  margin-horizontal:5%;
  `
  const ImageItem=styled.View`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:baseline;
  margin:25%
  `
 
  const ValueText=styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  margin-top:20%
  `
  const DescText=styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  `
  return (
    <Page>
      <FlexItem>
      <CardItem
        color='#FDFDFD'
        height='150px'
        onSelect={() => console.log('no action')}>
       <ImageItem>
       <Image source={require('../assets/male.png')}/>
       </ImageItem>  
      
      </CardItem>
      <CardItem
        color='#FDFDFD'
        height='150px'
        onSelect={() => console.log('no action')}>
       <ImageItem>
       <Image source={require('../assets/female.png')}/>
       </ImageItem>  
      
      </CardItem>
      </FlexItem>  
     
      <CardItem
        color='#FFFFFF'
        height='110px'
        onSelect={() => console.log('no action')}>
        <FlexItem>
          <Image source={require('../assets/calendar.png')}/>
          <View>
          <DescText style={{marginHorizontal:20,textAlign:'center'}}>Age</DescText>
          <ValueText style={{marginHorizontal:20,textAlign:'center'}}>24</ValueText>
          </View>
        </FlexItem>

      </CardItem>
      <CardItem
        color='#FFFFFF'
        height='110px'
        onSelect={() => console.log('no action')}>
        <FlexItem>
          <Image source={require('../assets/human-male-height.png')}/>
          <View>
          <DescText style={{marginHorizontal:20,textAlign:'center'}}>Height in (cm)</DescText>
          <ValueText style={{marginHorizontal:20,textAlign:'center'}}>195</ValueText>
          </View>
        </FlexItem>

      </CardItem>
      <CardItem
        color='#FFFFFF'
        height='110px'
        onSelect={() => console.log('no action')}>
        <FlexItem>
          <Image source={require('../assets/weight.png')}/>
          <View>
          <DescText style={{marginHorizontal:20,textAlign:'center'}}>Weight in (cm)</DescText>
          <ValueText style={{marginHorizontal:20,textAlign:'center'}}>80</ValueText>
          </View>
        </FlexItem>

      </CardItem>
      <TouchableOpacity onPress={() => console.log('Submit')}>
          <View style={styles.customBtn}>
              <Text style={{ color: 'black' }}>Submit</Text>
          </View>
      </TouchableOpacity>
    </Page>
  );
};

BMICalculator.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'My Profile',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}/>
      </HeaderButtons>,
    headerRight:()=> null  
   
  };
}



const styles = StyleSheet.create({
  headerIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    margin: 20
  },
  Icon: {
    alignItems: 'baseline',
    marginHorizontal: 20
  },
  customBtn: {
    height: 40,
    width: 100,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#4FB6AD',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 130,
    marginVertical: 40,
    textTransform: 'capitalize',
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
},
});

export default BMICalculator;
