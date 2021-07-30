import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text,View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import styled from 'styled-components';



import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import Page from '../components/Page';
import CardItem from '../components/CardItem';
import { Ionicons } from '@expo/vector-icons';

export default function Settings({ navigation }) {

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

  const RowView = styled.View`
  display:flex;
  align-items:baseline;
  flex-direction:row;
  justify-content:space-between;
  padding:10px;
  text-align:center;
  `
  const BackupView=styled.View`
  display:flex;
  align-items:baseline;
  flex-direction:row;
  justify-content:space-between;
  text-align:center;
  padding-horizontal:3%
  padding-vertical:1%;
  `

    return (
        <Page>
            <CustomTabView>
                <SubText1>Privacy</SubText1>
            </CustomTabView>
            <CardItem
                color='#DBF6E9'
                height='240px'
            >
                <RowView style={styles.borderBottom}>
                  <Text>Language</Text>
                  <Text>English</Text>
                </RowView>
                <RowView style={styles.borderBottom}>
                  <Text>Location</Text>
                  <Text>Bangalore</Text>
                </RowView>
                <RowView style={styles.borderBottom}>
                  <Text>Notification</Text>
                  <Ionicons name="toggle" size={30} color="grey"/>
                </RowView>
                <RowView style={styles.borderBottom}>
                <Text>About</Text>
                  <Ionicons name="chevron-forward" size={20} color="grey"/>
                </RowView>
                <RowView>
                <Text>FAQ</Text>
                  <Ionicons name="chevron-forward" size={20} color="grey"/>
                </RowView>
                

            </CardItem>
            <CustomTabView>
                <SubText1>Back Up</SubText1>
            </CustomTabView>
            <CardItem
                color='#FFFFFF'
                height='52px'
            >
                <BackupView>
                  <Text style={{color:'#0070FF'}}>Back Up Health Data</Text>
                  <Ionicons name="cloud-upload-outline" size={20} color="#0070FF"/>
                </BackupView>
            </CardItem>
        </Page>
    );
}

// Header Navigation
Settings.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Settings',
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
            <TouchableOpacity activeOpacity={0.7} style={styles.Icon} onPress={() => navigation.navigate('AddReminder')}>
                <Image source={require('../assets/success 2.png')} />
            </TouchableOpacity >
        </View>    

    };
}

const styles = StyleSheet.create({
  borderBottom:{
    borderBottomWidth: 1,
    borderBottomColor: "grey"},
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
})