import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import styled from 'styled-components';


const IconImage = props => {
    const ImageTitle=styled.Text`
    width:65px;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    color: #000000;
    flex-wrap:wrap;
    margin-top:10px
    `
    return (
           <View>
            <Image source={props.src} style={styles.imge} />
            <ImageTitle>{props.title}</ImageTitle>
           </View>

    );
};

const styles = StyleSheet.create({
    imge: { 
        marginHorizontal: 13
    }

});

export default IconImage;
