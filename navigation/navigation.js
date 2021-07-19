import React from 'react';
import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import Register from '../views/Register';
import Login from '../views/Login';
import Home from '../views/Home';
import HomeScreen2 from '../views/HomeScreen2'
import Alarm from '../views/Alarm'
import RegisterWithEmail from '../views/RegisterThroghEmail'
import RegisterWithPhone from '../views/RegisterThroughPhone'
import OTPScreen from '../views/OTP'
import CalorieTracker from '../views/CalorieTracker'
import { createStackNavigator } from 'react-navigation-stack';

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
});

const Navigation =createAppContainer(StackNavigator);

export default Navigation;


// const Drawer = createDrawerNavigator();

// export default function Navigation() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Register" component={Register} />
//       <Drawer.Screen name="Login" component={Login} />
//     </Drawer.Navigator>
//   );
// }