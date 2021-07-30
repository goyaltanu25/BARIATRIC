import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';


import HeaderButton from '../components/HeaderButton';

import CardItem from '../components/CardItem';
import Page from '../components/Page';
import styled from 'styled-components';
import { alignItems } from 'styled-system';

const CommunitySupport = props => {

  const FlexItem1=styled.View`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  justify-content:flex-start;
  `
  const FlexItem2=styled.View`
  display:flex;
  flex-direction:row;
  align-items:flex-end;
  justify-content:flex-end;
  `
  const PhoneText=styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  `
  const CustomTabView = styled.View`
  display:flex;
  align-items:baseline;
  justify-content:space-between;
  flex-direction:row;
  margin:20px;
  margin-bottom:50px;
  `
      const SubText1 = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.5px;
  color: ${Colors.textColor};
  `
  return (
    <Page>
      <CustomTabView>
          <View style={{
            flexDirection: 'row',
            justifyContent:'space-around',
            alignItems:'baseline'
          }}>
          <SubText1>Hobbies</SubText1>
          <Ionicons name="chevron-down" size={20} color="grey"/>
          </View>
          
          
          <View style={{
            flexDirection: 'row',
            width: 67,
            height: 35,
            backgroundColor: '#CFEFE9',
            borderRadius: 12,
          }}>
            <Text style={{ marginHorizontal: 14, marginVertical:8,fontSize: 14, color: '#4FB6AD' }}>
              Invite
            </Text>
          </View>
      </CustomTabView>
      <CardItem
        color='#F3F3F3'
        height='80px'
        onSelect={() => console.log('no action')}>
        <FlexItem1>
        <PhoneText>Hi my daughted has finally completed the 1 week Zumba challenge on the app!</PhoneText>

        </FlexItem1>
      </CardItem>
      <Image source={require('../assets/user.png')} style={{height:30,width:30}}/>

      <CardItem
        color='#D7F4EF'
        height='70px'
        onSelect={() => console.log('no action')}>
        
        <FlexItem2>
        <PhoneText>Congratulation! I will try the 1
week cardio challenge today.</PhoneText>
        </FlexItem2>
      </CardItem>
      <Image source={require('../assets/user.png')} style={{height:30,width:30,marginLeft:310}}/>
      
    </Page>
  );
};

CommunitySupport.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'Message Board',
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
      <View style={styles.headerIcons}/>

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

export default CommunitySupport;
