import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components';

import Page from '../components/Page';
import CardItem from '../components/CardItem';
import CircleImage from '../components/CircleImage';
import Colors from '../constants/Colors';

export default function HealthPlanner({ navigation }) {

    const CardView = styled.View`
 flex-direction:row;
 `
    const HeadCardText = styled.Text`
 font-style: normal;
 font-weight: normal;
 font-size: 16px;
 line-height: 19px;
 text-align: justify;
 color: #191919;
 padding:10px;
 `
    const CustomTabView = styled.View`
 display:flex;
 align-items:baseline;
 justify-content:space-between;
 flex-direction:row;
 margin:20px;
 `
    const SubText = styled.Text`
 font-style: normal;
 font-weight: bold;
 font-size: 20px;
 line-height: 26px;
 letter-spacing: 0.5px;
 color: ${Colors.textColor};
 `

    return (
        <Page>


            <CardItem
                color="#FAFAFA"
                height="215px"
            >
                <CardView>
                    <CircleImage src={require('../assets/workout.png')} title="Workout"
                        onSelect={() => {
                            props.navigation.navigate({
                                routeName: 'ChartScreen',
                            })
                        }}
                    />
                    <CircleImage src={require('../assets/hobbies.png')}
                        title="Hobbies"
                        onSelect={() => {
                            props.navigation.navigate({
                                routeName: 'MealPlanner',
                            })
                        }}
                    />
                    <CircleImage src={require('../assets/lifestyle.png')}
                        title="Lifestyle"
                        onSelect={() => {
                            props.navigation.navigate({
                                routeName: 'HealthDiagnose',
                            })
                        }}
                    />
                    <CircleImage src={require('../assets/guidelines.png')}
                        title="Guidelines"
                        onSelect={() => {
                            props.navigation.navigate({
                                routeName: 'InfantHealthCare',
                            })
                        }}
                    />
                </CardView>
                <CardView>
                    <CircleImage src={require('../assets/goodsleep.png')}
                        title="Good Sleep"
                        onSelect={() => {
                            props.navigation.navigate({
                                routeName: 'InfantHealthCare',
                            })
                        }}
                    />
                    <CircleImage src={require('../assets/foodbudget.png')}
                        title="Food Budget"
                        onSelect={() => {
                            props.navigation.navigate({
                                routeName: 'InfantHealthCare',
                            })
                        }}
                    />
                    <CircleImage src={require('../assets/communitysuport.png')}
                        title="Community Support"
                        onSelect={() => {
                            props.navigation.navigate({
                                routeName: 'InfantHealthCare',
                            })
                        }}
                    />
                </CardView>
            </CardItem>
            <CardItem
                color='#DBF6E9'
                height='110px'>
                <HeadCardText>
                    A practice or exercise to test or improve one's fitness for athletic
                    competition, ability, or performance.
                </HeadCardText>
            </CardItem>
            <CustomTabView>
                <SubText>Videos</SubText>
            </CustomTabView>
           <View style={{flexDirection:'row'}}>
           <CardItem
            color="#FAFAFA"
            height="217px"
            >   
             <CardItem  
             color="#E0E0E0"
             height="68px"
            >

             </CardItem>
            <Text style={{fontSize:12,fontWeight:'bold',paddingHorizontal:10}}>
            Fun Activities to do at home
            </Text>
            <Text  style={{fontSize:12,fontWeight:'normal',paddingHorizontal:10}}>
            Yoga
            Aerobics
            Jogging
            Zumba
            Pilates
            </Text>
           </CardItem>
           <CardItem
            color="#FAFAFA"
            height="217px"
            >   
             <CardItem  
             color="#E0E0E0"
             height="68px"
            >

             </CardItem>
             <Text style={{fontSize:12,fontWeight:'bold',paddingHorizontal:10}}>
             Exercises to do
            </Text>
            <Text style={{fontSize:12,fontWeight:'normal',paddingHorizontal:10}}>
            Cardio
             Weight- training
             Stretching
             Zumba
             Pilates
            </Text>
           </CardItem>
           </View>
           
        
        </Page>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        margin: 20
    },
})
