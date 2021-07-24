import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
// import Video from 'react-native-video';

const {width,height}=Dimensions.get('window');

const CorouselItem = ({item}) =>{
    
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={item.url}/>
            {/* <Video source={{ uri: 'http://STREAM_URL/playlist.m3u8' }} /> */}
        </View>
    )
}



const styles = StyleSheet.create({
    cardView:{
        flex:1,
        width: width-1,
        height: height / 2,
        backgroundColor:'#CAE268',
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset:{width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius:3,
        elevation:5,
    },
    textView:{
        position:'absolute',
        bottom:10,
        margin:10,
        left:5
    },
    image:{
        width:width-1,
        height:height/2,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    },
    itemTitle:{
      color:'white',
      fontSize:22,
      shadowColor:'#000',
      shadowOffset:{width:0.8,height:0.8},
      shadowOpacity:1,
      shadowRadius:3,
      marginBottom:5,
      fontWeight:'bold',
      elevation:5,
    },
    itemDescription:{
        color:'white',
      fontSize:12,
      shadowColor:'#000',
      shadowOffset:{width:0.8,height:0.8},
      shadowOpacity:1,
      shadowRadius:3,
      elevation:5,
    }
})

export default CorouselItem;