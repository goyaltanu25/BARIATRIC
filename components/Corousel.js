import React , {useEffect,useState}from 'react';
import { StyleSheet, View, Dimensions, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import CorouselItem from './CorouselItem';
const {width,height}=Dimensions.get('window');

let flatList;

function infiniteScroll(dataList){
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData)
        scrollValue = scrollValue + width

        else{
            scrollValue = 0
            scrolled = 0
        }

        // flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
    }, 3000)
}
const Corousel = ({data}) =>{
  const scrollX = new Animated.Value(0)
  let position = Animated.divide(scrollX, width)
  const [dataList, setDataList] = useState(data)

  useEffect(()=> {
      setDataList(data)
      infiniteScroll(dataList)
  })

  if(data && data.length){
      return(
        <View>
            <FlatList 
            ref = {(flatList) => {flatList = flatList}}
            data={data} 
            keyExtractor={(item,index)=>'key'+ index}
            horizontal
            pagingEnabled
            scrollEnabled
            // snapToAlignment='center'
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>{return <CorouselItem item={item}/>}}
          //   onScroll={Animated.event(
          //     [{ nativeEvent: { contentOffset: { x: scrollX } } }]
          // )}
            />
            <View style={styles.dotview}>
                 {data.map((_,i)=>{
                    // let opacity =position.interpolate({
                    //     inputRange:[i-1,i,i+1],
                    //     outputRange:[0.3,1,0.3],
                    //     extrapolate:'clamp'
                    // })
                    return <Animated.View 
                    key={i}
                    style={{opacity:0.3,height:10,width:10,backgroundColor:'#595959',margin:8,borderRadius:5}}/>
                 })}
            </View>
        </View>
      )
  }
  console.log('Provide Images');
  return null;
}

const styles = StyleSheet.create({
  dotview:{
    flexDirection:'row',
    justifyContent:'center',
    
  }
})


export default Corousel;