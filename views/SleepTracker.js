import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, useWindowDimensions, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styled from 'styled-components';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import Page from '../components/Page';
import CardItem from '../components/CardItem';

const AddButtonView = styled.View`
display:flex;
align-items:baseline;
justify-content:space-around;
margin:10px;
`
const DateView = styled.View`
display:flex;
align-items:baseline;
justify-content:flex-start;
flex-direction:row;
margin:20px;
margin-bottom:50px;
`
const BoldText = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.5px;
color: ${Colors.textColor};
`
const CustomTabView = styled.View`
display:flex;
align-items:baseline;
justify-content:space-between;
flex-direction:row;
margin:20px;
margin-bottom:50px;
`
const SubText = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.5px;
color: ${Colors.textColor};
`

const TimeText = styled.Text`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
text-align: justify;
color: #CF0000;
`
const HeadText = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 22px;
color: #262323;
margin-left:5%
`
const WrapText=styled.Text`
color: #505050;
margin-left:5%
width:240px
`

export default function SleepTracker({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
 
  return (
    <Page>
      <DateView>
        <BoldText>13 April 2021, Tuesday</BoldText>
      </DateView>

      <View>
    <CustomTabView>
      <SubText>Sleep Information</SubText>
      <View style={{
            flexDirection: 'row',
            margin: 10,
            width: 97,
            height: 35,
            backgroundColor: '#CFEFE9',
            borderRadius: 12,
          }}>
            <Text style={{ margin: 8, fontSize: 14, color: '#4FB6AD' }}>
              Calories 227
            </Text>
          </View>
    </CustomTabView>
    <CardItem
      color='#DBF6E9'
      height='82px'
    >
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image source={require('../assets/tablet.png')}/>
      <WrapText style={{height:200}}>
       <HeadText style={{flexWrap:'wrap'}}>Bupropion-naltrexone(Contrave)</HeadText>
       <Text>
         (5 days) 1 Tablet
       </Text>
      </WrapText>  
      </View>
      <View style={{ flex: 1, flexDirection: 'row',alignItems:'baseline',marginLeft:60,marginTop:20 ,justifyContent:'space-between'}}>
        <Text>(Before food)</Text>
        <TimeText>9:00 am</TimeText>
      </View>
    </CardItem>
    <CardItem
      color='#DBF6E9'
      height='82px'
    >
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image source={require('../assets/tablet.png')}/>
      <WrapText style={{height:200}}>
       <HeadText style={{flexWrap:'wrap'}}>Bupropion-naltrexone(Contrave)</HeadText>
       <Text>
         (5 days) 1 Tablet
       </Text>
      </WrapText>  
      </View>
      <View style={{ flex: 1, flexDirection: 'row',alignItems:'baseline',marginLeft:60,marginTop:20 ,justifyContent:'space-between'}}>
        <Text>(Before food)</Text>
        <TimeText>9:00 am</TimeText>
      </View>
    </CardItem>
    <CustomTabView>
      <SubText>Night</SubText>
      <Ionicons name="add" size={20} color={Colors.textColor} />
    </CustomTabView>
    <CardItem
      color='#FAFAFA'
      height='82px'
    >
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image source={require('../assets/tablet.png')}/>
      <WrapText style={{height:200}}>
       <HeadText style={{flexWrap:'wrap'}}>Bupropion-naltrexone(Contrave)</HeadText>
       <Text>
         (5 days) 1 Tablet
       </Text>
      </WrapText>  
      </View>
      <View style={{ flex: 1, flexDirection: 'row',alignItems:'baseline',marginLeft:60,marginTop:20 ,justifyContent:'space-between'}}>
        <Text>(Before food)</Text>
        <TimeText>9:00 am</TimeText>
      </View>
    </CardItem>
    <CardItem
      color='#FAFAFA'
      height='82px'
    >
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image source={require('../assets/tablet.png')}/>
      <WrapText style={{height:200}}>
       <HeadText style={{flexWrap:'wrap'}}>Bupropion-naltrexone(Contrave)</HeadText>
       <Text>
         (5 days) 1 Tablet
       </Text>
      </WrapText>  
      </View>
      <View style={{ flex: 1, flexDirection: 'row',alignItems:'baseline',marginLeft:60,marginTop:20 ,justifyContent:'space-between'}}>
        <Text>(Before food)</Text>
        <TimeText>9:00 am</TimeText>
      </View>
    </CardItem>
  </View>
    </Page>
  );
}

// Header Navigation
SleepTracker.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Sleep Tracker',
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
      <AddButtonView>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('AddReminder')}>
          <Image source={require('../assets/success 2.png')}/>
        </TouchableOpacity >
      </AddButtonView>,

  };
}

const styles = StyleSheet.create({
  activeTabTextColor: {
    color: 'black'
  },
  tabTextColor: {
    color: 'black'
  }
})