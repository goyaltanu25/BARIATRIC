import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import styled from 'styled-components';


import HeaderButton from '../components/HeaderButton';
import CardItem from '../components/CardItem';
import Page from '../components/Page'


const AllTrackers = props => {

    const HeadText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #262323;
  margin-left:38%
  `
    const Description = styled.Text`
  width: 160px;
  height: 51px;
  margin-left:38%
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #505050;
  `
    const Icon = styled.Image`
  `

    const RowView = styled.View`
  flex-direction:row;
  `

    return (
        <Page>
            <StatusBar color="black" />
            {/* Nutrition Tracker Card */}
            <CardItem
                color='#DBF6E9'
                height='100px'
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'NutritionTrackerScreen',
                    });
                }}
            >
                <Image source={require('../assets/item.png')} style={{ position: 'absolute', height: 150, width: 120 }} />

                <HeadText>Nutrition Tracker</HeadText>
                <RowView>
                    <Description>AI based scanner to suggest nutrient values of food items.</Description>

                    <Icon source={require('../assets/salad.png')} />

                </RowView>

            </CardItem>

            {/* Sugar Tracker Card */}
            <CardItem
                color='#DBF6E9'
                height='100px'
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'SugarTracker',
                    });
                }}
            >
                <Image source={require('../assets/sugarTracker.png')} style={{ position: 'absolute', height: 150, width: 120 }} />

                <HeadText>Sugar Tracker</HeadText>
                <RowView>
                    <Description>To Keep a Track of your Diabetes.</Description>

                    <Icon source={require('../assets/sugar-cubes.png')} />

                </RowView>

            </CardItem>

            {/* Sleep Tracker Card */}
            <CardItem
                color='#DBF6E9'
                height='100px'
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'SleepTracker',
                    });
                }}
            >
                <Image source={require('../assets/sleepTracker.png')} style={{ position: 'absolute', height: 150, width: 120 }} />

                <HeadText>Sleep Tracker</HeadText>
                <RowView>
                    <Description>Tracker to keep an eye on your sleeping Habits.</Description>

                    <Icon source={require('../assets/moonsleepIcon.png')} />
                </RowView>


            </CardItem>

        </Page>
    );
};

// Header Navigation
AllTrackers.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'All Trackers',
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
                {/* Reminder Screen */}
                <TouchableOpacity style={styles.Icon} activeOpacity={0.7}
                    onPress={() => navigation.navigate('ReminderScreen')}>
                    <Image source={require('../assets/handIcon.png')} />
                </TouchableOpacity >
                {/* Notification Screen */}
                <TouchableOpacity style={styles.Icon} activeOpacity={0.7}
                    onPress={() => navigation.navigate('NotificationsScreen')}>
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
        margin: 10
    },
    Icon: {
        alignItems: 'baseline',
        marginHorizontal: 10
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        margin: 20
    },
});

export default AllTrackers;
