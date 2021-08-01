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

const MealPlannerScreen2 = props => {
  const CustomTabView = styled.View`
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  flex-direction:row;
  margin:20px;
  `
  const SubText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: ${Colors.textColor};
  `
  const RedText=styled.Text`
  height: 19px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #FF103B;
  `
  return (
    <Page>
    <CustomTabView>
     <RedText>Today's Energy</RedText>
    </CustomTabView>
    <CardItem
    color='#FAFAFA'
    height='277px'>

    </CardItem>
    
    <CustomTabView>
    <SubText>Activity</SubText>
    </CustomTabView>
    <CardItem
    color='#FAFAFA'
    height='105px'>

    </CardItem>
    <CardItem
    color='#FAFAFA'
    height='105px'>

    </CardItem>
    <CardItem
    color='#FAFAFA'
    height='105px'>

    </CardItem>
  </Page>
  );
};





export default MealPlannerScreen2;
