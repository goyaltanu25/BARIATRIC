import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import styled from 'styled-components';

import HeaderButton from '../components/HeaderButton';
import Page from '../components/Page'
import Colors from '../constants/Colors';
import CardItem from '../components/CardItem';
import { flex } from 'styled-system';

const ClearView = styled.View`
display:flex;
align-items:baseline;
justify-content:space-around;
width: 55px;
height: 23px;
background: ${Colors.background};
border-radius: 5px;
padding:10px;
margin:10px;
`
const TimeText = styled.Text`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
text-align: justify;
color: #CF0000;
margin-left:20%;
`
const HeadText = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 22px;
color: #262323;
margin-left:5%
`
const Description = styled.Text`
margin-top:10%
margin-left:25%
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #505050;
`
const WrapText = styled.View`
color: #505050;
margin-left:5%;
display:flex;
align-items:baseline;
justify-content:space-around;
flex-direction:row;

`
export default function NotificationsScreen({ navigation }) {


  return (
    <Page>
      <Text>Today</Text>
      <CardItem
        color='#DBF6E9'
        height='82px'
      >
        <View>
        <View style={{ flex: 1, flexDirection: 'row',display:'flex' }}>
          <Image source={require('../assets/sanjana.png')}  style={{alignSelf:'flex-start'}}/>
          <WrapText>
            <HeadText >Sanajana R</HeadText>
            <TimeText>9:00 am</TimeText>
          </WrapText>
        </View>
        <Description>Invitation to join Hobbies group chat</Description>
        </View>
        

      </CardItem>
      <CardItem
        color='#DBF6E9'
        height='82px'
      >
        <View>
        <View style={{ flex: 1, flexDirection: 'row',display:'flex' }}>
          <Image source={require('../assets/salad.png')}  style={{alignSelf:'flex-start'}}/>
          <WrapText>
            <HeadText >Sugar Tracker</HeadText>
            <TimeText>9:00 am</TimeText>
          </WrapText>
        </View>
        <Description>Low sugar level detected, check your sugar</Description>
        </View>

      </CardItem>
      <CardItem
        color='#DBF6E9'
        height='82px'
      >
       <View>
        <View style={{ flex: 1, flexDirection: 'row',display:'flex' }}>
          <Image source={require('../assets/workout.png')}  style={{alignSelf:'flex-start'}}/>
          <WrapText>
            <HeadText >Meal Planner</HeadText>
            <TimeText>9:00 am</TimeText>
          </WrapText>
        </View>
        <Description>Weekly meal plan has ended, please update</Description>
        </View>
      </CardItem>
      <Text>Old Notifications</Text>
      <CardItem
        color='#FAFAFA'
        height='82px'
      >
        <View>
        <View style={{ flex: 1, flexDirection: 'row',display:'flex' }}>
          <Image source={require('../assets/teamHealth.png')}  style={{alignSelf:'flex-start'}}/>
          <WrapText>
            <HeadText >Team healthcare</HeadText>
            <TimeText>9:00 am</TimeText>
          </WrapText>
        </View>
        <Description>Update your personal information</Description>
        </View>
      </CardItem>
    </Page>
  );
}

// Header Navigation
NotificationsScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Notification',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="chevron-back-outline"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </HeaderButtons>,
    headerRight: () =>
      <ClearView>
        {/* clear btn */}
        <TouchableOpacity activeOpacity={0.7}
          onPress={() => console.log('clear')}>
          <Text>Clear</Text>
        </TouchableOpacity >
      </ClearView >,

  };
}
