import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, } from 'react-native';
import { Formik } from 'formik';
import styled from 'styled-components'

import CardItem from '../components/CardItem';
import IconImage from '../components/IconImage';
import Page from '../components/Page';

export default function AddReminder({ navigation }) {


    const ColView = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:baseline;
    `
    const CustomInput = styled.TextInput`
    background: #ECECEC;
    border-radius: 5px;
    display:flex;
    padding:10px
    margin:10px
    `

    return (
        <Page>
            <CardItem color='#FAFAFA'
                height='550px'>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => console.log('Save data')}>
                        <IconImage src={require('../assets/tablet.png')} title="" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Save data')}>
                        <IconImage src={require('../assets/injection.png')} title="" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Save data')}>
                        <IconImage src={require('../assets/syrup.png')} title="" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Save data')}>
                        <IconImage src={require('../assets/pill.png')} title="" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Save data')}>
                        <IconImage src={require('../assets/butter.png')} title="" />
                    </TouchableOpacity>

                </View>
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <CustomInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="Medicine Name"
                            />
                            <ColView>
                                <CustomInput
                                    onChangeText={() => handleChange('email')}
                                    onBlur={() => handleBlur('email')}
                                    value={values.email}
                                    keyboardType="numeric"
                                    placeholder="Days"
                                    style={{ width: 142 }}
                                />
                                <CustomInput
                                    onChangeText={() => handleChange('email')}
                                    onBlur={() => handleBlur('email')}
                                    value={values.email}
                                    keyboardType="numeric"
                                    placeholder="Dose"
                                    style={{ width: 142 }}
                                />
                            </ColView>
                            <ColView>
                                <CustomInput
                                    onChangeText={() => handleChange('email')}
                                    onBlur={() => handleBlur('email')}
                                    value={values.email}
                                    keyboardType="numeric"
                                    placeholder="Time"
                                    style={{ width: 142 }}
                                />
                                <CustomInput
                                    onChangeText={() => handleChange('email')}
                                    onBlur={() => handleBlur('email')}
                                    value={values.email}
                                    keyboardType="numeric"
                                    placeholder="Food Time"
                                    style={{ width: 142 }}
                                />
                            </ColView>
                            <ColView>
                                <CustomInput
                                    onChangeText={() => handleChange('email')}
                                    onBlur={() => handleBlur('email')}
                                    value={values.email}
                                    keyboardType="numeric"
                                    placeholder="Alarm"
                                    style={{ width: 142 }}
                                />
                                <CustomInput
                                    onChangeText={() => handleChange('email')}
                                    onBlur={() => handleBlur('email')}
                                    value={values.email}
                                    keyboardType="numeric"
                                    placeholder="Snooze"
                                    style={{ width: 142 }}
                                />
                            </ColView>
                            <TouchableOpacity onPress={() => console.log('Save data')}>
                                <View style={styles.customBtn}>
                                    <Text style={{ color: 'black' }}>Save</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}


                </Formik>

            </CardItem>


        </Page>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 15
    },
    customBtn: {
        height: 40,
        width: 100,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#4FB6AD',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 100,
        marginVertical: 40,
        textTransform: 'capitalize',
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 2,
    },
})