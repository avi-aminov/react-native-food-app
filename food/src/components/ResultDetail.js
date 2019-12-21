import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import DrawStars from './DrawStars';

const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: result.image_url}}
            />
            <Text style={styles.name} >{result.name.substring(0,32)}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>

            <DrawStars stars={result.rating} size={17}/>
        </View>
    );
}; 

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 4,
    },
    name:{
        fontWeight: 'bold',
    },
    iconStyle:{
        fontSize: 14,
        alignSelf: 'center',
        marginLeft: 10,
        color: '#DAA520',
    }

});

export default ResultDetail; 