import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, useWindowDimensions, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styled from 'styled-components';


import Colors from '../constants/Colors';
import Page from '../components/Page';
import CardItem from '../components/CardItem';


const DateView = styled.View`
align-items:baseline;
justify-content:center;
margin-horizontal:110px;
margin-vertical:50px;
`
const BoldText = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 26px;
letter-spacing: 0.5px;
color: ${Colors.textColor};
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
const HeadText = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 19px;
letter-spacing: 0.5px;
color: #505050;
margin-left:38%;
`

const Rewards = ({...navigation}) => (
  <View>
    <CardItem
    color='#FAFAFA'
    height='150'>
        <Image source={require('../assets/prize.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText style={{flexWrap:'wrap'}}>10% off on pills (120 pts)</HeadText>
        
        <Description>Copy the code to Redeem</Description>
    </CardItem>
    <CardItem
    color='#FAFAFA'
    height='150'>
        <Image source={require('../assets/prize.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText style={{flexWrap:'wrap'}}>10% off on pills (120 pts)</HeadText>
        
        <Description>Copy the code to Redeem</Description>
    </CardItem>
    <CardItem
    color='#FAFAFA'
    height='150'>
        <Image source={require('../assets/prize.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText style={{flexWrap:'wrap'}}>10% off on pills (120 pts)</HeadText>
        
        <Description>Copy the code to Redeem</Description>
    </CardItem>
    <CardItem
    color='#FAFAFA'
    height='150'>
        <Image source={require('../assets/prize.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText style={{flexWrap:'wrap'}}>10% off on pills (120 pts)</HeadText>
        
        <Description>Copy the code to Redeem</Description>
    </CardItem>
  </View>
);

const Challenges = ({...navigation}) => (
  <View>
    <CardItem
    color='#FAFAFA'
    height='150'>
        <Image source={require('../assets/prize.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText style={{flexWrap:'wrap'}}>10% off on pills (120 pts)</HeadText>
        
        <Description>Copy the code to Redeem</Description>
    </CardItem>
    <CardItem
    color='#FAFAFA'
    height='150'>
        <Image source={require('../assets/prize.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText style={{flexWrap:'wrap'}}>10% off on pills (120 pts)</HeadText>
        
        <Description>Copy the code to Redeem</Description>
    </CardItem>
  </View>
);

export default function ReminderScreen({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Rewards' },
    { key: 'second', title: 'Challenges' },
  ]);

  const renderScene = SceneMap({
    first: ()=><Rewards {...navigation}/>,
    second:()=> <Challenges {...navigation}/>,
  });

  const renderLabel = ({ route, focused, color }) => {
    return (
      <View>
        <Text
          style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}
        >
          {route.title}
        </Text>
      </View>
    )
  }

  return (
    <Page>
      <DateView>
        <Text>Your Total Rewards </Text>
        <BoldText>120 points</BoldText>
      </DateView>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={layout}
        renderTabBar={props => <TabBar
          {...props}
          renderLabel={renderLabel}
          indicatorStyle={{ backgroundColor: Colors.textColor }}
          style={{
            backgroundColor: Colors.greyColor,
          }}
        />}
      />
    </Page>
  );
}


const styles = StyleSheet.create({
  activeTabTextColor: {
    color: 'black'
  },
  tabTextColor: {
    color: 'black'
  }
})