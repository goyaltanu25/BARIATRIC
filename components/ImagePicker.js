import React, { useEffect, useState,useRef } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import NutritionTrackerScreen from '../views/NutritionTrackerScreen'

import Colors from '../constants/Colors';


const CameraScreen = props => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [pickedImage, setPickedImage] = useState();
  const [preview,setIsPreview]=useState(false);

  const cam = useRef();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const _takeImageHandler = async () => {
    const option={quality:0.5,base64:true,skipProcessing:false}
    
    const image = await cam.current.takePictureAsync(option);

    if(image.base64){
      let params ={
        method:'POST',
        mode:'no-cors',
        headers:{
          'Content-Type': 'application/json'
        },
        data:{
        label:"Orange",
        user_id:"1",
        image:image.base64
      }
      }
      fetch('http://pressbroadcasters.com/SmartNutrition/admin/index.php/SearchItem',params)
      .then((res)=>
      {
      console.log('check',res)
      setPickedImage(image.uri);
      setIsPreview(true);
      }
      )
      .catch((err)=>console.log(err))
     
    }
    
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {!preview ? <Camera style={styles.camera} type={type} ref={cam}>
        <View style={styles.headerContainer}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Nutrition Tracker</Text></View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <Text
              style={{ color: "#fff", fontSize: 20 }}
            >Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={()=>_takeImageHandler()}
            >
            <FontAwesome
              name="camera"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <MaterialIcons
              name="flip-camera-ios"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      
      </Camera>
      : <NutritionTrackerScreen image={pickedImage}/>}
    </View>
  );
}

// Header Navigation
// ImagePicker.navigationOptions = ({ navigation }) => {
//   return navigation.setOptions({ tabBarVisible: false })
  
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  headerContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    margin:10,
    backgroundColor:'#0000'
  },
  buttonContainer: {
    flex:1, 
    flexDirection:"row",
    justifyContent:"space-between",
    margin:20
  },
  button: {
    flex: 0.2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});
export default CameraScreen;
