import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  _Text
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';



import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';
import CardItem from '../components/CardItem';
import styled from 'styled-components';
import { ScrollView } from 'react-native-gesture-handler';
import CircleImage from '../components/CircleImage';

const MenuScreen = props => {
  const HeadText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #262323;
  margin-left:110px
  `
  const Description = styled.Text`
  width: 160px;
  height: 51px;
  margin-left:110px
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #505050;
  `
  const Icon = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  position:absolute;
  margin-left:280px;
  margin-top:30px;
  `
  // const renderGridItem = itemData => {
  //   return (

  //   );
  // };

  return (
    // <FlatList
    //   keyExtractor={(item, index) => item.id}
    //   data={CATEGORIES}
    //   renderItem={renderGridItem}
    //   numColumns={1}
    // />
    <ScrollView>
      <CardItem
        color='#DBF6E9'
        height='100px'
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CalorieTracker',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      >
        <Image source={require('../assets/item.png')} style={{ position: 'absolute', height: 150, width: 120 }} />
        <HeadText>Nutrition Tracker</HeadText>
        <Description>AI based scanner to suggest nutrient values of food items</Description>
        <Icon activeOpacity={0.7} onPress={() => { console.log('abc') }}>
          <Image source={require('../assets/salad.png')} />
        </Icon >
      </CardItem>
      <View style={styles.container}>
        <CircleImage src={require('../assets/mychart.png')} title="My Chart" />
        <CircleImage src={require('../assets/mealplanner.png')} title="Meal Planner" />
        <CircleImage src={require('../assets/healthdiagnose.png')} title="Health Diagnose" />
        <CircleImage src={require('../assets/infantcare.png')} title="Infant HealthCare" />
      </View>
    </ScrollView>
  );
};

MenuScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Home',
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
        <TouchableOpacity style={styles.Icon} activeOpacity={0.7} onPress={() => { console.log('abc') }}>
          <Image source={require('../assets/handIcon.png')} />
        </TouchableOpacity >
        <TouchableOpacity style={styles.Icon} activeOpacity={0.7} onPress={() => { console.log('abc') }}>
          <Image source={require('../assets/bellIcon.png')} />
        </TouchableOpacity >

      </View >,

  };
}



const styles = StyleSheet.create({
  headerIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    margin: 20
  },
  Icon: {
    alignItems: 'baseline',
    marginHorizontal: 20
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    margin: 20
  },
});

export default MenuScreen;
