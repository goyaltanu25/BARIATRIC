import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import styled from 'styled-components';

import HeaderButton from '../components/HeaderButton';
import Page from '../components/Page'
import Colors from '../constants/Colors';


const ClearView=styled.View`
display:flex;
align-items:baseline;
justify-content:space-around;
width: 55px;
height: 23px;
background: ${Colors.background};
border-radius: 5px;
padding:10px;
margin:10px;
`
export default function NotificationsScreen({ navigation }) {
 
  
  return (
    <Page>
    </Page>
    );
}

// Header Navigation
NotificationsScreen.navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Notification',
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
        <ClearView>
          {/* clear btn */}
          <TouchableOpacity activeOpacity={0.7} 
            onPress={()=>console.log('clear')}>
            <Text>Clear</Text>
          </TouchableOpacity >
        </ClearView >,
  
    };
  }
