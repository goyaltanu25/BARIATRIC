import React,{useState} from 'react';
import { StyleSheet ,View ,LogBox} from 'react-native';

// import * as Fonts from 'expo-font';

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

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();
