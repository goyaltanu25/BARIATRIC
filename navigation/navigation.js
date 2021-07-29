import React from 'react';
import { Platform, Text ,Image} from 'react-native';

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
import ReminderScreen from '../views/ReminderScreen'
import SleepTracker from '../views/SleepTracker'
import SugarTracker from '../views/SugarTracker'
import WeightForLengthScreen from '../views/WeightForLengthScreen'
import NutritionTrackerScreen from '../views/NutritionTrackerScreen'
import ImagePicker from '../components/ImagePicker'
import HFSCFDFinder from '../views/HFSCFDFinder'
import CommunitySupport from '../views/ChatScreen'
import Settings from '../views/Settings'
import NotificationsScreen from '../views/NotificationsScreen'
import AddReminder from '../views/AddReminder'



const defaultStackNavOptions = {
   headerStyle: {
     backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
   },
   headerTitleStyle:{
    textAlign: "center",
    lineHeight: 22,
   },
   headerBackTitleStyle:{
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center"
   },
   headerTintColor:  Platform.OS === 'android' ? Colors.textColor : ''
 };

const AuthNavigator = createStackNavigator({
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
   OTP:{
    screen:OTPScreen,
    navigationOptions:{
       title:'Verify Phone'
    } 
 },
   MenuScreen:{
    screen:MenuScreen,
    navigationOptions:{
       title:'',
       headerShown: true,
    } 
  },
  },
   {
    defaultNavigationOptions: defaultStackNavOptions
   }
);

const DashboardNavigator =createStackNavigator({
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
      screen: NutritionTrackerScreen,
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
      screen: ReminderScreen,
      navigationOptions: {
        title: 'Reminder'
      }
    },
    AddReminder:{
      screen: AddReminder,
      navigationOptions: {
        title: 'Add Reminder'
      }
    },
    NotificationsScreen:{
      screen: NotificationsScreen,
      navigationOptions: {
        title: 'Notification'
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
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
)

const DashboardDrawer = createDrawerNavigator({
  BMICalculator: {
    screen: BMICalculator,
    navigationOptions: {
      drawerLabel: 'BMI Calculator',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/bmiIcon.png")}
        />
      ),
    }
  },
  HFSCFDFinder: {
    screen: HFSCFDFinder,
    navigationOptions: {
      drawerLabel: 'All Trackers',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/alltrackerIcon.png")}
        />
      ),
    }
  },
  NutritionTrackerScreen: {
    screen: NutritionTrackerScreen,
    navigationOptions: {
      drawerLabel: 'Nutritution Tracker',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/salad.png")}
        />
      ),
    }
  },
  SleepTracker: {
    screen: SleepTracker,
    navigationOptions: {
      drawerLabel: 'Sleep Tracker',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/moonsleepIcon.png")}
        />
      ),
    }
  },
  SugarTracker: {
    screen: SugarTracker,
    navigationOptions: {
      drawerLabel: 'Sugar Tracker',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/sugarcubesIcon.png")}
        />
      ),
    }
  },
  WeightForLengthScreen: {
    screen: WeightForLengthScreen,
    navigationOptions: {
      drawerLabel: 'History',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/historyIcon.png")}
        />
      ),
    }
  },
  ReminderScreen:{
    screen: ReminderScreen,
    navigationOptions: {
      drawerLabel: 'Reminder',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/reminderIcon.png")}
        />
      ),
    }
  },
  CommunitySupport: {
    screen: CommunitySupport,
    navigationOptions: {
      drawerLabel: 'Community Support',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/settingsIcon.png")}
        />
      ),
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: (
        <Image
          style={{ width: 24, height: 24 }}
          source={require("../assets/settingsIcon.png")}
        />
      ),
    }
  },
})

const tabScreenConfig = {
   Dashboard: {
     screen: MenuScreen,
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
     screen: ImagePicker,
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
    AuthNavigator:{
      screen:AuthNavigator,
      navigationOptions: {
        title:'',
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
