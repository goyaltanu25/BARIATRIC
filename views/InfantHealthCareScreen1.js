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

const InfantHealthCareScreen1 = props => {
  const CustomTabView = styled.View`
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  flex-direction:row;
  margin:20px;
  `
  const CardView = styled.View`
  flex-direction:row;
  margin:20px;
  `
  const TextView = styled.View`
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
  const DescText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  text-align:center;
  color: ${Colors.textColor};
  max-width:160px;
  flex-wrap:wrap;
  `

  return (
    <Page>

      <CustomTabView>
        <SubText>Tests for Infants/Toddlers </SubText>
      </CustomTabView>

      <CardView>
        <CardItem
          color='#FAFAFA'
          height='110px'>
          <Image source={require('../assets/WeightforLengthIcon.png')} style={{ position: 'absolute' }} />
        </CardItem>

        <CardItem
          color='#FAFAFA'
          height='110px'>
          <Image source={require('../assets/BMICalci.png')} style={{ position: 'absolute' }} />

        </CardItem>
      </CardView>
      <TextView>
        <DescText>Skinfold Thickness Test</DescText>
        <DescText>CT/MRI Scans Ultrasound</DescText>
      </TextView>

      <CustomTabView>
        <SubText>Early Awareness</SubText>
      </CustomTabView>
      <CardView>
        <CardItem
          color='#FAFAFA'
          height='110px'>
          <Image source={require('../assets/HFSCSDFinderIcon.png')} style={{ position: 'absolute' }} />

        </CardItem>
      </CardView>
      <TextView>
        <DescText>HFS/CSD finder</DescText>
      </TextView>
      <CardView>
        <CustomTabView>
          <SubText>Points and Rewards</SubText>
        </CustomTabView>
        <CardItem
          color='#FAFAFA'
          height='110px'>
          <Image source={require('../assets/PhysicalActivity.png')} style={{ position: 'absolute' }} />

        </CardItem>
      </CardView>
      <TextView>
        <DescText>Physical activities</DescText>
      </TextView>
    </Page>
  );
};





export default InfantHealthCareScreen1;
