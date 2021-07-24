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
import BMICalculator from '../views/BMICalculator'
import ReminderScreen1 from '../views/ReminderScreen1'
import SleepTracker from '../views/SleepTracker'
import SugarTracker from '../views/SugarTracker'
import WeightForLengthScreen from '../views/WeightForLengthScreen'
import NutritionTrackerScreen1 from '../views/NutritionTrackerScreen1'
import HFSCFDFinder from '../views/HFSCFDFinder'
import CommunitySupport from '../views/ChatScreen'
import Settings from '../views/Settings'




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
    BMICalculator: {
      screen: BMICalculator,
      navigationOptions: {
        drawerLabel: 'BMI Calculator',
        
      }
    },
    HFSCFDFinder: {
      screen: HFSCFDFinder,
      navigationOptions: {
        drawerLabel: 'All Trackers',
        
      }
    },
    NutritionTrackerScreen: {
      screen: NutritionTrackerScreen1,
      navigationOptions: {
        drawerLabel: 'Nutritution Tracker',
        
      }
    },
    SleepTracker: {
      screen: SleepTracker,
      navigationOptions: {
        drawerLabel: 'Sleep Tracker',
        
      }
    },
    SugarTracker: {
      screen: SugarTracker,
      navigationOptions: {
        drawerLabel: 'Sugar Tracker',
        
      }
    },
    WeightForLengthScreen: {
      screen: WeightForLengthScreen,
      navigationOptions: {
        drawerLabel: 'History',
        
      }
    },
    ReminderScreen:{
      screen: ReminderScreen1,
      navigationOptions: {
        drawerLabel: 'Reminder'
      }
    },
    CommunitySupport: {
      screen: CommunitySupport,
      navigationOptions: {
        drawerLabel: 'Community Support',
        
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        drawerLabel: 'Settings',
        
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
  },
  
  {
    contentOptions: {
      activeTintColor: Colors.textColor,
    }
  }
);

const Navigation =createAppContainer(TabNavigator);

export default Navigation;
