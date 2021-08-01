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

const HealthDiagnoseScreen1 = props => {
  const CustomTabView = styled.View`
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  flex-direction:row;
  margin:20px;
  `
  const CardView=styled.View`
  flex-direction:row;
  margin:20px;
  `
  const TextView=styled.View`
  flex-direction:row;
  margin-horizontal:20px;
  `

  const SubText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: ${Colors.textColor};
  `
  const DescText=styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  text-align:center;
  color: ${Colors.textColor};
  max-width:160px;
  flex-wrap:wrap;
  `
  const HeadCardText=styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
  color: #191919;
  padding:10px;
  `
  return (
    <Page>
    <CardItem
    color='#DBF6E9'
    height='110px'>
        <HeadCardText>
        The process of determining the nature of a disease or disorder and distinguishing it from other possible conditions.
        </HeadCardText>
    </CardItem>
    
    <CustomTabView>
    <SubText>Tests for Bariatic Patients</SubText>
    </CustomTabView>

    <CardView>
      <CardItem
      color='#FAFAFA'
      height='160px'>
        <Image source={require('../assets/test1.png')} style={{ position: 'absolute'}} />
      </CardItem>
      
      <CardItem
      color='#FAFAFA'
      height='160px'>
        <Image source={require('../assets/test2.png')} style={{ position: 'absolute'}} />
  
      </CardItem>
    </CardView>
      <TextView>
      <DescText>Skinfold Thickness Test</DescText>
      <DescText>CT/MRI Scans Ultrasound</DescText>
      </TextView>
    <CardView>
      <CardItem
      color='#FAFAFA'
      height='160px'>
        <Image source={require('../assets/test3.png')} style={{ position: 'absolute'}} />
  
      </CardItem>
      <CardItem
      color='#FAFAFA'
      height='160px'>
        <Image source={require('../assets/test4.png')} style={{ position: 'absolute'}} />
  
      </CardItem>
    </CardView>
    <TextView>
      <DescText>Diabetes Screening</DescText>
      <DescText>Liver Function Test</DescText>
      </TextView>
  </Page>
  );
};





export default HealthDiagnoseScreen1;
