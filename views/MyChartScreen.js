import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';



import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';
import CardItem from '../components/CardItem';

const MenuScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CardItem
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CalorieTracker',
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={1}
    />
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
  headerIcons:{
    flex:1, 
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'baseline',
    margin:20
   },
  Icon:{
    alignItems:'baseline',
    marginHorizontal:20
  }
});

export default MenuScreen;
