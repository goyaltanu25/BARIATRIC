import React,{useState} from 'react';
import { StyleSheet ,View } from 'react-native';


// import { StatusBar } from 'expo-status-bar';
import * as Fonts from 'expo-font';
// import {AppLoading} from 'expo';



import Navigation from './navigation/navigation';



// const fetchFonts =()=>{
//   return Fonts.loadAsync({
//     'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
//   })
// }


export default function App() {
  const [fontLoaded,setFontLoaded]=useState(false);

  // if(!fontLoaded){
  //   return (
  //   <AppLoading startSync={fetchFonts} 
  //   onFinish={()=>setFontLoaded(true)}/>
  //   )
  // }

  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 20,
    marginVertical:80,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})