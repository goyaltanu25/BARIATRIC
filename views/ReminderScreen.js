import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, useWindowDimensions, Image,TouchableOpacity,StyleSheet ,Text} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import styled from 'styled-components';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import Page from '../components/Page';
import CardItem from '../components/CardItem';

const AddButtonView=styled.View`
display:flex;
align-items:baseline;
justify-content:space-around;
margin:10px;
`
const DateView=styled.View`
display:flex;
align-items:baseline;
justify-content:space-around;
flex-direction:row;
margin:20px;
margin-bottom:50px;
`
const BoldText=styled.Text`
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 26px;
letter-spacing: 0.5px;
color: ${Colors.textColor};
`
const CustomTabView=styled.View`
display:flex;
align-items:baseline;
justify-content:space-between;
flex-direction:row;
margin:20px;
margin-bottom:50px;
`
const SubText=styled.Text`
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.5px;
color: ${Colors.textColor};
`

const Taken = () => (
  <View>
    <CustomTabView>
      <SubText>Morning</SubText>
      <Ionicons name="add" size={20} color={Colors.textColor}/>
    </CustomTabView>
    <CardItem
        color='#DBF6E9'
        height='82px'
      ></CardItem>
      <CardItem
        color='#DBF6E9'
        height='82px'
      ></CardItem>
      <CustomTabView>
      <SubText>Night</SubText>
      <Ionicons name="add" size={20} color={Colors.textColor}/>
    </CustomTabView>
    <CardItem
        color='#DBF6E9'
        height='82px'
      ></CardItem>
      <CardItem
        color='#DBF6E9'
        height='82px'
      ></CardItem>
  </View>
);

const Missed = () => (
  <View>
    <CustomTabView>
      <SubText>Morning</SubText>
      <Ionicons name="add" size={20} color={Colors.textColor}/>
    </CustomTabView>
    <CardItem
      color='#DBF6E9'
      height='82px'   
    ></CardItem>
    <CardItem
        color='#DBF6E9'
        height='82px'
      ></CardItem>
</View>
);

export default function ReminderScreen({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Taken(3)' },
    { key: 'second', title: 'Missed(0)' },
  ]);

  const renderScene = SceneMap({
    first: Taken,
    second: Missed,
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
        <BoldText>Tue, April 20</BoldText>
        <Image source={require('../assets/calenderIcon.png')}/>
        </DateView> 
        
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={layout}
        renderTabBar={props => <TabBar 
          {...props}
          renderLabel={renderLabel}
          indicatorStyle ={{backgroundColor:Colors.textColor}} 
          style={{
            backgroundColor: Colors.greyColor,
          }}
        />}
        />
    </Page>
    );
}

// Header Navigation
ReminderScreen.navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Reminder',
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
          {/* Add Reminder Screen */}
          <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate('AddReminder')}>
            <Ionicons name='add' size={26} color={Colors.textColor}/>
          </TouchableOpacity >
        </AddButtonView>,
  
    };
  }
  
const styles=StyleSheet.create({
  activeTabTextColor:{
    color:'black'
  },
  tabTextColor:{
    color:'black'
  }
})