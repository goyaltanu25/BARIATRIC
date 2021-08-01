import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

import Colors from '../constants/Colors'
import CardItem from '../components/CardItem';
import Page from '../components/Page';

const MealPlannerScreen1 = props => {
  const CustomTabView = styled.View`
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  flex-direction:row;
  margin-vertical:20px;
  margin-horizontal:10px;
  `
  const SubText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: ${Colors.textColor};
  `
  const BoldText=styled.Text`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: #333333;
  `
  const HeadText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: #505050;
  margin-left:38%;
  `
  const Description = styled.Text`
  width: 160px;
  height: 60px;
  margin:5%;
  margin-left:38%;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #505050;
  `
  const Icon = styled.TouchableOpacity`
  position:absolute;
  margin-left:90%;
  margin-top:10%;
  `
  return (
    <Page>
    <CustomTabView>
     <BoldText>Download Available Meal Plans</BoldText>
    </CustomTabView>
    <CardItem
    color='#FAFAFA'
    height='150px'>
        <Image source={require('../assets/mealPlannerIcon.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText>Bariatric 1 week Meal Plan</HeadText>
        
        <Description>Well defined meal plan with a set of grocery list</Description>
    </CardItem>
    
    <CustomTabView>
    <SubText>Weekly Meal Plan</SubText>
    </CustomTabView>
    <CardItem
    color='#FAFAFA'
    height='150px'>
        <Image source={require('../assets/day1.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText>Day 1</HeadText>
        
        <Description>Well defined meal plan with a set of grocery list</Description>
    </CardItem>
    <CardItem
    color='#FAFAFA'
    height='150px'>
        <Image source={require('../assets/day2.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText>Day 2</HeadText>
        
        <Description>Well defined meal plan with a set of grocery list</Description>
    </CardItem>
    <CardItem
    color='#FAFAFA'
    height='150px'>
        <Image source={require('../assets/day3.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText>Day 3</HeadText>
        
        <Description>Well defined meal plan with a set of grocery list</Description>
    </CardItem>
    <TouchableOpacity onPress={() => console.log('Logout')}>
          <View style={styles.customBtn}>
              <Text style={{ color: 'black' }}>Save</Text>
          </View>
      </TouchableOpacity>
  </Page>
  );
};


const styles = StyleSheet.create({
  customBtn: {
    height: 40,
    width:327,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#4FB6AD',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 70,
    textTransform: 'capitalize',
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
},
})


export default MealPlannerScreen1;
