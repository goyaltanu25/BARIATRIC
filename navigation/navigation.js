import React from 'react';
import { Platform, Text } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import Register from '../views/Register';
import Login from '../views/Login';
import Home from '../views/Home';
import HomeScreen2 from '../views/HomeScreen2'
import Alarm from '../views/Alarm'
import RegisterWithEmail from '../views/RegisterThroghEmail'
import RegisterWithPhone from '../views/RegisterThroughPhone'
import OTPScreen from '../views/OTP'
import CalorieTracker from '../views/CalorieTracker'
import MenuScreen from '../views/MenuScreen';



const defaultStackNavOptions = {
   headerStyle: {
     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
   },

   headerTintColor:  Platform.OS === 'android' ? Colors.textColor : ''
 };

const StackNavigator = createStackNavigator({
    Home:{
      screen:Home,
      navigationOptions:{
         title:'',
         headerShown: false,
      },
   },
    Register:{
      screen:Register,
      navigationOptions:{
         title:'Create Account'
      } 
  },
    Login:{
       screen:Login,
       navigationOptions:{
         title:'',
         headerShown: false,
      }
      
    },
    HomeScreen:{
        screen:HomeScreen2,
        navigationOptions:{
           title:'',
           headerShown: false,
        } 
    },
    MenuScreen:{
      screen:MenuScreen,
      navigationOptions:{
         title:'',
         headerShown: true,
      } 
    },
    Alarm:{
      screen:Alarm,
      navigationOptions:{
         title:'',
         headerShown: false,
      } 
   },
    CalorieTracker:{
      screen:CalorieTracker,
      navigationOptions:{
         title:'',
         headerShown: false,
      } 
   },
    OTP:{
      screen:OTPScreen,
      navigationOptions:{
         title:'Verify Phone'
      } 
   },
    RegisterWithPhone:{
      screen:RegisterWithPhone,
      navigationOptions:{
         title:'Create Account'
      } 
   },
    RegisterWithEmail:{
      screen:RegisterWithEmail,
      navigationOptions:{
         title:'Create Account'
      } 
   },
},{
    defaultNavigationOptions: defaultStackNavOptions
}

);

const tabScreenConfig = {
   Home: {
     screen: StackNavigator,
     navigationOptions: {
       tabBarIcon: tabInfo => {
         return (
           <Ionicons name="home" size={25} color={tabInfo.tintColor} />
         );
       },
       tabBarColor: Colors.primaryColor,
       title:'',
     }
   },
   Camera: {
     screen: Login,
     navigationOptions: {
       tabBarIcon: tabInfo => {
         return <Ionicons name="camera" size={25} color={tabInfo.tintColor} />;
       },
       tabBarColor: Colors.accentColor,
       title:'',
     }
   },
   User: {
    screen: Register,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="person-circle" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      // title:'',
    }
  }
 };
const TabNavigator = createBottomTabNavigator(
   tabScreenConfig, {
   tabBarOptions: {
     activeTintColor: Colors.accentColor
   }
 })



const DrawerNavigator = createDrawerNavigator(
  {
    StackNavigator: {
      screen: StackNavigator,
      navigationOptions: {
        drawerLabel: 'Stack',
        
      }
    },
    TabNavigator:{
      screen: StackNavigator,
      navigationOptions: {
        drawerLabel: 'Tabs'
      }
    },
  },
  
  {
    contentOptions: {
      activeTintColor: Colors.textColor,
    }
  }
);

const Navigation =createAppContainer(DrawerNavigator);

export default Navigation;
