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

import CardItem from '../components/CardItem';
import Page from '../components/Page';
import styled from 'styled-components';

const ProfilePage = props => {

  const FlexItem=styled.View`
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  margin-horizontal:5%;
  `
  const TextFlex=styled.View`
  display:flex;
  justify-content:center;
  margin-horizontal:5%;
  `
  const UserText=styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  `
  const PhoneText=styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  `
  return (
    <Page>
      <CardItem
        color='#FDFDFD'
        height='150px'
        onSelect={() => console.log('no action')}>
       <FlexItem>
       <Image source={require('../assets/user.png')}/>
        <TextFlex>
          <UserText>Jane Doe</UserText>
          <PhoneText>+91 8378764190</PhoneText>
        </TextFlex>
       </FlexItem>  
      
      </CardItem>
      <CardItem
        color='#DBF6E9'
        height='50px'
        onSelect={() => console.log('no action')}>
        <FlexItem>
          <Image source={require('../assets/userIcon.png')}/>
          <PhoneText style={{marginHorizontal:20,textAlign:'center'}}> Personal Information</PhoneText>
        </FlexItem>

      </CardItem>
      <CardItem
        color='#DBF6E9'
        height='50px'
        onSelect={() => console.log('no action')}>
        
        <FlexItem>
          <Image source={require('../assets/chartIcon.png')}/>
          <PhoneText style={{marginHorizontal:20,textAlign:'center'}}>My Chart</PhoneText>
        </FlexItem>
      </CardItem>
      <CardItem
        color='#DBF6E9'
        height='50px'
        onSelect={() => console.log('no action')}>
        <FlexItem>
          <Image source={require('../assets/stethoIcon.png')}/>
          <PhoneText style={{marginHorizontal:20,textAlign:'center'}}>Doctor Board</PhoneText>
        </FlexItem>

      </CardItem>
      <CardItem
        color='#DBF6E9'
        height='50px'
        onSelect={() => console.log('no action')}>
        <FlexItem>
          <Image source={require('../assets/success1.png')}/>
          <PhoneText style={{marginHorizontal:20,textAlign:'center'}}>Points & Rewards</PhoneText>
        </FlexItem>

      </CardItem>
      <TouchableOpacity onPress={() => console.log('Logout')}>
          <View style={styles.customBtn}>
              <Text style={{ color: 'black' }}>Logout</Text>
          </View>
      </TouchableOpacity>
    </Page>
  );
};

ProfilePage.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'My Profile',
    headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          iconName="chevron-back-outline"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </HeaderButtons>,
    headerRight: () =>
      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.Icon} activeOpacity={0.7} onPress={() => { console.log('abc') }}>
          <Image source={require('../assets/settingsIcon.png')} />
        </TouchableOpacity >
      </View >

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
  customBtn: {
    height: 40,
    width: 100,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 125,
    marginVertical: 70,
    textTransform: 'capitalize',
    shadowColor: '#000',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
},
});

export default ProfilePage;
