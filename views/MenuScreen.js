import React from 'react';
import {
  View,
  StyleSheet,
  // TouchableOpacity,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {LineChart} from "react-native-chart-kit";
import styled from 'styled-components';


// import HeaderButton from '../components/HeaderButton';
import CardItem from '../components/CardItem';
import CircleImage from '../components/CircleImage';
import Page from '../components/Page'

const screenWidth = Dimensions.get("window").width;

const MenuScreen = props => {

  const HeadText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #262323;
  margin-left:38%
  `
  const Description = styled.Text`
  width: 160px;
  height: 51px;
  margin-left:38%
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #505050;
  `
  const SubText=styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  color: #262323;
  margin-left:38%
  `
  const SubDescription=styled.Text`
  margin-left:38%
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #505050;
  `
  const Icon = styled.TouchableOpacity`
  position:absolute;
  margin-left:90%;
  margin-top:10%;
  `
  const ChartHeaderView=styled.View`
  display:flex;
  justify-content:space-around;
  flex-direction:row;
  flex:1
  `
  const RedText=styled.Text`
  height: 19px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #FF103B;
  `
  const DetailsView=styled.View`
  display:flex;
  align-items:baseline;
  justify-content:space-around;
  width: 75px;
  height: 23px;
  background: #DBF6E9;
  border-radius: 12px;
  padding:10px;
  `

  const DetailsText=styled.Text`
  display:flex;
  justify-content:space-between;
  align-items:baseline;
  flex-direction:row;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: #4FB6AD;
  padding:2px
  `
  const FooterCards=styled.View`
   display:flex;
   flex:1;
   flex-direction:row;
   justify-content:space-around;
  `

  // Chart Configurations
  const data = {
    labels: ["06:00", "12:00", "18:00", "24:00"],
    datasets: [
      {
        data: [20,10,8,15,25,60,80, 40,60,20,10,8,15,],
        color: (opacity = 1) => `rgba(255, 16, 59, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  };

  const chartConfig = {
    backgroundColor:'white',
    backgroundGradientFrom: "#FAFAFA",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FAFAFA",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(216, 216, 216, ${opacity})`,
    barPercentage: 0.5,
    style: {
      borderRadius: 12,
      width: 335,
      height: 237,
      background: '#FAFAFA',
    },
    propsForDots: {
      r: "0",
      strokeWidth: "",
      stroke: "#fff"
  },
  propsForBackgroundLines:{
    strokeDasharray: "",
  }
   
  };

  return (
    <Page>
      <StatusBar color="black"/>
      {/* Nutrition Tracker Card */}
      <CardItem
        color='#DBF6E9'
        height='100px'
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'NutritionTrackerScreen',
          });
        }}
      >
        <Image source={require('../assets/item.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        
        <HeadText>Nutrition Tracker</HeadText>
        
        <Description>AI based scanner to suggest nutrient values of food items</Description>
        
        <Icon activeOpacity={0.7} onPress={() => { console.log('abc') }}>
          <Image source={require('../assets/salad.png')} />
        </Icon >

      </CardItem>
      
      {/* Circular Images */}
      <View style={styles.container}>
        <CircleImage src={require('../assets/mychart.png')} title="My Chart" 
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'ChartScreen',
          })}}
          />
        <CircleImage src={require('../assets/mealplanner.png')} 
        title="Meal Planner" 
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealPlanner',
          })}}
        />
        <CircleImage src={require('../assets/healthdiagnose.png')} 
        title="Health Diagnose" 
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'HealthDiagnose',
          })}}
        />
        <CircleImage src={require('../assets/infantcare.png')} 
        title="Infant HealthCare" 
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'InfantHealthCare',
          })}}
        />
      </View>

     {/* Chart Header  */}
     <ChartHeaderView>
       <RedText>Today's Energy</RedText>
       <DetailsView>
         <DetailsText>
           Details 
           <MaterialCommunityIcons name="greater-than" size={10} color="#4FB6AD"/>
         </DetailsText>
         
      </DetailsView>
     </ChartHeaderView>
    
     {/* Chart View */}
     <CardItem
        color='#FAFAFA'
        height='237'>
       <LineChart
        data={data}
        width={screenWidth-100}
        height={200}
        chartConfig={chartConfig}
        bezier
        withInnerLines={false}
        withVerticalLines={false}
       />
     </CardItem>

     <FooterCards>
       <CardItem color='#DBF6E9'
        height='60px'
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'NutritionTrackerScreen',
          });
        }}>
        <Image source={require('../assets/points.png')} style={{ position: 'absolute', height: 60, width: 52 }} />
        
        <SubText>Points & Rewards</SubText>
        
        <SubDescription>Redeem Offers</SubDescription>
        
        <Icon activeOpacity={0.7} onPress={() => { console.log('abc') }}>
          <Image source={require('../assets/success.png')} />
        </Icon >

        </CardItem>
       <CardItem color='#DBF6E9'
        height='60px'
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'NutritionTrackerScreen',
          });
        }}>
          <Image source={require('../assets/planner.png')} style={{ position: 'absolute', height: 60, width: 52 }} />
          <SubText>Health Planner</SubText>
        </CardItem>
     </FooterCards>
     
    </Page>
  );
};

// Header Navigation
MenuScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Home',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>,
    headerRight: () =>
      <View style={styles.headerIcons}>
        {/* Reminder Screen */}
        <TouchableOpacity style={styles.Icon} activeOpacity={0.7} 
          onPress={()=>navigation.navigate('ReminderScreen')}>
          <Image source={require('../assets/handIcon.png')} />
        </TouchableOpacity >
        {/* Notification Screen */}
        <TouchableOpacity style={styles.Icon} activeOpacity={0.7} 
        onPress={()=>navigation.navigate('NotificationsScreen')}>
          <Image source={require('../assets/bellIcon.png')} />
        </TouchableOpacity >

      </View >,

  };
}



const styles = StyleSheet.create({
  headerIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    margin: 10
  },
  Icon: {
    alignItems: 'baseline',
    marginHorizontal: 10
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    margin: 20
  },
});

export default MenuScreen;
