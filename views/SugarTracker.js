import React from 'react';
import { View, useWindowDimensions, Dimensions, Image,TextInput,TouchableOpacity, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import styled from 'styled-components';
import { BarChart } from 'react-native-chart-kit';


import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import Page from '../components/Page';
import CardItem from '../components/CardItem';

const screenWidth = Dimensions.get("window").width;

const data = {
    labels: ["Tu", "We", "Th", "Fr", "Sa","Su","Mo"],
    datasets: [
        {
            data: [0, 50, 100, 260,300,500,460]
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
    propsForBackgroundLines: {
        strokeDasharray: "",
        strokeWidth: 0
    },
};
export default function SugarTracker({ navigation }) {

    const BoldText1 = styled.TextInput`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.5px;
color: ${Colors.textColor};
text-align:center;
padding-vertical:5px
`
const BoldText = styled.TextInput`
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
  justify-content:space-between;
  margin:5%
  `
 const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);

    return (
        <Page>
            <DateView>
                <BoldText>20 April 2021, Tuesday</BoldText>
            </DateView>
            <CardItem
                color='#FAFAFA'
                height='280px'
            >
                <BarChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    contentInset={{ top: 30, bottom: 30 }}
                />
            </CardItem>
            <CustomTabView>
                <SubText1>Glucose Level</SubText1>
            </CustomTabView>
            <CardItem
                color='#DBF6E9'
                height='110px'
            >
                <WrapView>
                    <Image source={require('../assets/diabetes.png')} />
                    <BoldText1>142.0</BoldText1>
                    <SubText>mg/DL</SubText>
                </WrapView>

            </CardItem>
            <TouchableOpacity onPress={() => console.log('Submit')}>
             <View style={styles.customBtn}>
                 <Text style={{ color: 'black' }}>Save</Text>
             </View>
            </TouchableOpacity>
        </Page>
    );
}

// // Header Navigation
// SugarTracker.navigationOptions = ({ navigation }) => {
//     return {
//         headerTitle: 'Sugar Tracker',
//         headerLeft: () =>
//             <HeaderButtons HeaderButtonComponent={HeaderButton}>
//                 <Item
//                     iconName="chevron-back-outline"
//                     onPress={() => {
//                         navigation.goBack();
//                     }}
//                 />
//             </HeaderButtons>,
//         headerRight: () =>
//             <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('AddReminder')}>
//                 <Image source={require('../assets/success 2.png')} />
//             </TouchableOpacity >

//     };
// }

const styles = StyleSheet.create({
    customBtn: {
        height: 40,
        width: 100,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#4FB6AD',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 130,
        marginVertical: 40,
        textTransform: 'capitalize',
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 2,
    },
})