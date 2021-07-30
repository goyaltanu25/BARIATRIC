import React from 'react';
import { View, useWindowDimensions, Dimensions, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import styled from 'styled-components';
import { BarChart } from 'react-native-chart-kit';


import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import Page from '../components/Page';
import CardItem from '../components/CardItem';

const screenWidth = Dimensions.get("window").width;

const data = {
    labels: ["Week1", "Week2", "Week3", "Week4"],
    datasets: [
        {
            data: [20, 40, 5, 60]
        }
    ]
};
const chartConfig = {
    backgroundColor: '#297C75',
    backgroundGradientFrom: "#297C75",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#297C75",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(41, 124, 117,  ${opacity})`,
    barPercentage: 0.5,
    style: {
        borderRadius: 12,
        height: 237,
        background: 'rgba(41, 124, 117, 1)',
    },
    propsForDots: {
        r: "0",
        strokeWidth: "",
        stroke: ""
    },
    propsForBackgroundLines: {
        strokeDasharray: "",
        strokeWidth: 0
    },
};
export default function SleepTracker({ navigation }) {

    const BoldText = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.5px;
color: ${Colors.textColor};
text-align:center;
padding-vertical:5px
`
    const DateView = styled.View`
display:flex;
align-items:baseline;
justify-content:flex-start;
flex-direction:row;
margin:20px;
margin-bottom:50px;
`

    const CustomTabView = styled.View`
display:flex;
align-items:baseline;
justify-content:space-between;
flex-direction:row;
margin:20px;
margin-bottom:50px;
`
    const SubText1 = styled.Text`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.5px;
color: ${Colors.textColor};
`
    const SubText = styled.Text`
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.5px;
   color: ${Colors.textColor};
   text-align:center;
   padding-vertical:5px
 `

    const WrapView = styled.View`
  display:flex;
  align-items:baseline;
  flex-direction:row;
  margin-horizontal:10px
  `
    const GraphView = styled.View`
  display:flex;
  flex-direction:row;
  `
    const UserName = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin:10px
  `
    const ColView = styled.View`
  display:flex;
  justify-content:center;
  margin-horizontal:20%;
  
  `
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    return (
        <Page>
            <DateView>
                <BoldText>13 April 2021, Tuesday</BoldText>
            </DateView>
            <CustomTabView>
                <SubText1>Sleep Information</SubText1>
                <View style={{
                    flexDirection: 'row',
                    margin: 10,
                    width: 87,
                    height: 35,
                    backgroundColor: '#CFEFE9',
                    borderRadius: 12,
                }}>
                    <Text style={{ marginHorizontal: 20, marginVertical: 6, fontSize: 14, color: '#4FB6AD' }}>
                        Change
                    </Text>
                </View>
            </CustomTabView>
            <CardItem
                color='#DBF6E9'
                height='110px'
            >
                <UserName>Jane Doe</UserName>
                <WrapView>
                    <Image source={require('../assets/moonsleepIcon.png')} />
                    <Text style={{ paddingHorizontal: 10 }}>Bedtime + 7 Hrs = Wakeup</Text>
                </WrapView>

            </CardItem>
            <GraphView>
                <CardItem
                    color='#FCFCFC'
                    height='169px'
                >
                    <ColView>
                        <SubText>Quality</SubText>
                        <Image source={require('../assets/Circle.png')} />
                        <SubText>90%</SubText>
                    </ColView>
                </CardItem>
                <CardItem
                    color='#FCFCFC'
                    height='169px'
                >
                    <ColView>
                        <SubText>Duration</SubText>
                        <Image source={require('../assets/Circle.png')} />
                        <SubText>7 hrs</SubText>
                    </ColView>
                </CardItem>
            </GraphView>
            <CustomTabView>
                <SubText1>Average Sleep - 45 hrs a Week</SubText1>
            </CustomTabView>
            <CardItem
                color='#DBF6E9'
                height='280px'
            >
                <BarChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}

                />
            </CardItem>
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
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('AddReminder')}>
                <Image source={require('../assets/success 2.png')} />
            </TouchableOpacity >

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