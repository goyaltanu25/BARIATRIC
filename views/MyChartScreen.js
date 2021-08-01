import React from 'react';
import { useTheme } from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import { ProgressChart } from 'react-native-chart-kit';

import Colors from '../constants/Colors'
import CardItem from '../components/CardItem';
import Page from '../components/Page';
import { useState } from 'react/cjs/react.development';


const MyChartScreen = props => {
  const [sugar, onChangeSugar] = useState(142.0)
  const [sleep, onChangeSleep] = useState(8)
  const [bmi, onChangeBMI] = useState(90)
  const { colors } = useTheme();
  const screenWidth = Dimensions.get("window").width;


  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.7, 0.6, 0.8],
    colors: [
      "rgba(255,35,91,1)",
      "rgba(79,182,173,1)",
      "rgba(114,166,221,1)",
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#FAFAFA",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FAFAFA",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(243, 245, 244, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
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
  const RedText = styled.Text`
  height: 19px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #FF103B;
  `
  const HeaderView = styled.View`
  flex-direction:row;
  justify-content:space-between;
  `
  const FlexView = styled.View`
  flex-direction:row;
  justify-content:space-around;
  width:80px
  `

  const CustomInput=styled.TextInput`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center; 
  color: black;
  `
  return (
    <Page>
      <CustomTabView>
        <RedText>Today's Energy</RedText>
      </CustomTabView>
      <CardItem
        color='#FAFAFA'
        height='277px'>
        <ProgressChart
          data={data}
          width={screenWidth - 50}
          height={260}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={true}
          withCustomBarColorFromData={true}

        />
      </CardItem>

      <CustomTabView>
        <SubText>Activity</SubText>
      </CustomTabView>
      <CardItem
        color='#FAFAFA'
        height='105px'>
        <HeaderView>
          <Text style={{color:'#FF235B',fontWeight:'bold'}}>Sugar Levels</Text>
          <Text>March 20, 12:30 pm</Text>
        </HeaderView>
        <FlexView>
          <CustomInput
            placeholder="142.0"
            onChangeText={onChangeSugar}
            value={sugar}
            underlineColorAndroid="transparent"
            style={{width:100,  paddingLeft:20}}
          />
          <Text style={{ paddingLeft: 2, paddingTop: 4 }}>mg/DL</Text>
        </FlexView>

        <Text>Regular entry to sugar levels to be added</Text>
      </CardItem>
      <CardItem
        color='#FAFAFA'
        height='105px'>
        <HeaderView>
          <Text style={{color:'#4FB6AD',fontWeight:'bold'}}>Average Sleep</Text>
          <Text>March 20, 12:30 pm</Text>
        </HeaderView>
        <FlexView>
          <CustomInput
            placeholder="8"
            onChangeText={onChangeSleep}
            value={sleep}
            underlineColorAndroid="transparent"
            style={{width:30}}
          />
          <Text style={{ paddingLeft: 0, paddingTop: 4 }}>hrs</Text>
        </FlexView>
      </CardItem>
      <CardItem
        color='#FAFAFA'
        height='105px'>
        <HeaderView>
          <Text style={{color:'#72A6DD',fontWeight:'bold'}}>BMI</Text>
          <Text>March 20, 12:30 pm</Text>
        </HeaderView>
        <FlexView>
          <CustomInput
            placeholder="90"
            onChangeText={onChangeBMI}
            value={bmi}
            underlineColorAndroid="transparent"
            style={{width:30}}
          />
          <Text style={{ paddingLeft: 0, paddingTop: 4 }}>kgs</Text>
        </FlexView>
      </CardItem>
    </Page>
  );
};





export default MyChartScreen;
