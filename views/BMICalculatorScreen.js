import React,{useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import CardItem from '../components/CardItem';
import Page from '../components/Page';
import styled from 'styled-components';
import BulletComponent from '../components/BulletComponent';

const BMICalculatorScreen = props => {
  const YellowBorder=styled.View`
  width:70px;
  border:4px solid #DBDF00;
  `
  const GreenBorder=styled.View`
  width:70px;
  border:4px solid #3AE000;
  `
  const RedBorder=styled.View`
  width:70px;
  border:4px solid #EE6400;
  `
  const OrangeBorder=styled.View`
  width:70px;
  border:4px solid #DC0101;
  `
  const IndicatorBorder=styled.View`
  position:absolute;
  height: 43px;
  width:2px;
  background-color: #909090;
  left:38%;
  top:46%;
  `
  const LineView=styled.View`
  flex-direction:row;
  padding-horizontal:6%
  padding-vertical:12%
  `
  const BoldText=styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #000000;
  margin:10%;
  `
  const BoldText2=styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  `
  const DescView=styled.View`
  padding:5%;
  `
  const Pointers=styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  padding:10px;
  `

  return (
    <Page>
      <CardItem
        color='#FFFFFF'
        height='110px'
        onSelect={() => console.log('no action')}>
          <BoldText>Your BMI is {props.navigation.state.params ? props.navigation.state.params.BMI : 'Check Again'}</BoldText>
          {/* <LineView>
            <YellowBorder/>
            <GreenBorder/>
            <OrangeBorder/>
            <RedBorder/>
          </LineView>
          <IndicatorBorder/> */}
      </CardItem>
      <CardItem
        color='#FAFAFA'
        height='200px'
        onSelect={() => console.log('no action')}>
           <BoldText2>BMI Chart</BoldText2>
           <BulletComponent text="Underweight <18.5"/>
           <BulletComponent text="Normal weight 18.5- 25"/>
           <BulletComponent text="Overweight 25- 30"/>
           <BulletComponent text="Obese > 30"/>
         
      </CardItem>
      <CardItem
        color='#FAFAFA'
        height='110px'
        onSelect={() => console.log('no action')}>
        <BulletComponent text="For most adults, an ideal BMI is in the 18.5 to 24.9 range."/>
        <BulletComponent text="For children and young people aged 2 to 18."/>
      </CardItem>
    </Page>
  );
};


export default BMICalculatorScreen;
