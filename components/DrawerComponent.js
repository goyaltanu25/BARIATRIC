import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, StatusBar, Text, Alert, Dimensions, TouchableOpacity, View, FlatList,Image } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';



const arrMenu = [
    { 'id': 0, name: 'BMI Calculator', 'icon': require("../assets/bmiIcon.png"), 'navScreen': 'BMICalculator' },
    { 'id': 1, name: 'All Trackers', 'icon': require("../assets/alltrackerIcon.png"), 'navScreen': 'NutritionTrackerScreen' },
    { 'id': 2, name: 'Nutrition Tracker', 'icon':require("../assets/salad.png"), 'navScreen': 'NutritionTrackerScreen' },
    { 'id': 3, name: 'Sleep Tracker', 'icon': require("../assets/moonsleepIcon.png"), 'navScreen': 'SleepTracker' },
    { 'id': 4, name: 'Sugar Tracker', 'icon': require("../assets/sugarcubesIcon.png"), 'navScreen': 'SugarTracker' },
    { 'id': 5, name: 'History', 'icon': require("../assets/historyIcon.png"), 'navScreen': 'History' },
    { 'id': 6, name: 'Reminder', 'icon':require("../assets/reminderIcon.png"), 'navScreen': 'ReminderScreen' },
    { 'id': 7, name: 'Community Support', 'icon': require("../assets/settingsIcon.png"), 'navScreen': 'CommunitySupport' },
    { 'id': 8, name: 'Settings', 'icon': require("../assets/settingsIcon.png"), 'navScreen': 'Settings' },
]

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


class DrawerMenu extends React.Component {

    constructor(props) {
        super(props)
        this.navigateToScreen = this.navigateToScreen.bind(this);
    }


    render() {

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#FAFAFA" barStyle="light-content" />
                 <LinearGradient colors={['#FFFFFF','#A7E9E2','#8ED6CF','#8ED6CF']} style={styles.headerContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => this.navigateToScreen('User')}>
                            <Image source={require('../assets/user.png')}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', paddingLeft: 10 }}>Jane Doe</Text>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>+91 8378764190</Text>
                 </LinearGradient>
                <View style={styles.menuContainer}>
                    {this.renderFlatList()}
                </View>
            </SafeAreaView>
        );
    }

    // renderIcon() {
    //     return (
    //         <Icon name='menu' style={{ color: '#fff' }} />
    //     );
    // }

    renderFlatList() {
        return (
            <FlatList
                scrollEnabled={(screenHeight >= 667) ? false : true}
                data={arrMenu}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => this.navigateToScreen(item.navScreen)}>
                        <View style={{ height: 55, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' ,marginLeft:20}}>
                            <Image source={item.icon} size={35}/>
                            <Text style={styles.menuText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        );
    }

    navigateToScreen(navScreen) {
        this.props.navigation.navigate(navScreen)
    }
}

export default DrawerMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63B7AF',
    },
    headerContainer: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuContainer: {
        flex: 3,
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    menuText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        marginLeft: 20
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        height: 30,
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0
    },
    footerText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10
    },
});