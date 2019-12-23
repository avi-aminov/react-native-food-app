import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DrawStars = ({stars, size, extraStyle}) => {

    var starCount = [
        //star, star-o, star-half-o
        'star-o',
        'star-o',
        'star-o',
        'star-o',
        'star-o'
    ];

    for(var i = 0; i <= 4; i++){
        if(stars > i){
            starCount[i] = 'star';
        }
        if(stars > i && stars < i+1){
            starCount[i] = 'star-half-o';
        }
    }

    return (
        <View style={extraStyle}>
            <Text>
                <FontAwesome style={styles.iconStyle} size={size} name={starCount[0]} />
                <FontAwesome style={styles.iconStyle} size={size} name={starCount[1]} />
                <FontAwesome style={styles.iconStyle} size={size} name={starCount[2]} />
                <FontAwesome style={styles.iconStyle} size={size} name={starCount[3]} />
                <FontAwesome style={styles.iconStyle} size={size} name={starCount[4]} />
            </Text>   
        </View>
    );
}; 

const styles = StyleSheet.create({
    iconStyle:{
        alignSelf: 'center',
        color: '#DAA520',
    }
});

export default DrawStars; 