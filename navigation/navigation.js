import React from 'react';
import { Platform, Text ,Image,View,TouchableOpacity,StyleSheet} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

import HeaderButton from '../components/HeaderButton';
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
import MyChartScreen from '../views/MyChartScreen'
import MealPlanner from '../views/MealPlannerScreen1'
import InfantHealthCareScreen from '../views/InfantHealthCareScreen1'
import HealthDiagnose from '../views/HealthDiagonosisScreen1'
import DrawerComponent from '../components/DrawerComponent'
import ProfilePage from '../views/ProfilePage';

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
  },
   {
    defaultNavigationOptions: defaultStackNavOptions
   }
);



const DashboardTabNavigator = createBottomTabNavigator({
  Home: {
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
   screen: ProfilePage,
   navigationOptions: {
     tabBarIcon: tabInfo => {
       return <Ionicons name="person-circle" size={25} color={tabInfo.tintColor} />;
     },
     tabBarColor: Colors.accentColor,
     title:'',
     headerTitle:'My Profile'
   }
  },
  }, 
  {
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  },
  navigationOptions:({navigation})=>{
    const {routeName}=navigation.state.routes[navigation.state.index]
    return {headerTitle:routeName}
  }
})

const DashboardStackNavigator =createStackNavigator({
  DashboardTabNavigator:{
    screen: DashboardTabNavigator,
    navigationOptions: {
      title: 'Home', 
    }
  },
  BMICalculator: {
    screen: BMICalculator,
    navigationOptions: {
      title: 'BMI Calculator',
      
    }
  },
  HFSCFDFinder: {
    screen: Alarm,
    navigationOptions: {
      title: 'All Trackers',
      
    }
  },
  NutritionTrackerScreen: {
    screen: NutritionTrackerScreen,
    navigationOptions: {
      title: 'Nutritution Tracker',
      
    }
  },
  SleepTracker: {
    screen: SleepTracker,
    navigationOptions: {
      title: 'Sleep Tracker',
      
    }
  },
  SugarTracker: {
    screen: SugarTracker,
    navigationOptions: {
      title: 'Sugar Tracker',
      
    }
  },
  WeightForLengthScreen: {
    screen: WeightForLengthScreen,
    navigationOptions: {
      title: 'History',
      
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
      title: 'Community Support',
      
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    }
  },
  Alarm:{
    screen:Alarm,
    navigationOptions:{
       title:'Alarm',
    } 
 },
  CalorieTracker:{
    screen:CalorieTracker,
    navigationOptions:{
       title:'Calorie Tracker',
    } 
 },
 ChartScreen:{
   screen:MyChartScreen,
   navigationOptions:{
    title:'My Chart',
 } 
 },
 InfantHealthCare:{
   screen:InfantHealthCareScreen,
   navigationOptions:{
    title:'Infant HealthCare',
 } 
 },
 HealthDiagnose:{
  screen:HealthDiagnose,
  navigationOptions:{
   title:'Health Diagnose',
} 
},
 MealPlanner:{
   screen:MealPlanner,
   navigationOptions:{
    title:'Meal Planner',
 } 
},
User:{
  screen:Register, 
  navigationOptions:{
    title:'My Profile'
  }
 } 


},
{
  defaultNavigationOptions: ({navigation})=>{
    return{
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

    }
  }
}
)

const DashboardDrawer = createDrawerNavigator({
  DashboardScreen:{
    screen: DashboardStackNavigator,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: (
        <Ionicons
          name="home"
          size={24}
        />
      ),
    }
  },
},{
  drawerBackgroundColor:'#4FB6AD',
  drawerType:'slide',
  drawerWidth:300,
  hideStatusBar:true,
  unmountInactiveRoutes:true,
  contentComponent:DrawerComponent,
  initialRouteName:'DashboardScreen',
  backBehavior:true,
  contentOptions:{
    drawerLockMode: "locked-closed",
    disableGestures: true,
    edgeWidth: 0,
    layout: {
        orientation: ["portrait"],
    },
  }
}
)

const SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:AuthNavigator},
  DashboardScreen:{screen:DashboardDrawer}
})
const Navigation =createAppContainer(SwitchNavigator);

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

export default Navigation;
