import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const ResultDetail = ({result}) => {
    
    const getStars = (rank)=>{


        if(rank == 1 || rank < 1){

        }else if(rank > 1 && rank < 2){

        }else if(rank == 2){

        }


        return (
            <view>

            </view>
        );
    };

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: result.image_url}}
            />
            <Text style={styles.name} >{result.name.substring(0,32)}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>


            <AntDesign  
                style={styles.iconStyle} 
                size={10} 
                name="star" 
            />
            

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