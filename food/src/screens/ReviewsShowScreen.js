import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

import DrawStars from '../components/DrawStars';

const ResultShowScreen = ({navigation}) => {
 
    const [reviews, setReviews] = useState(null);
    const id = navigation.getParam('id');
    let row = true;
    const getReviews = async ()=>{
      try{
          const response = await yelp.get(`/${id}/reviews`);
          //console.log(response.data);
          setReviews(response.data);
      } catch(err) {
          console.log(err);
      }
    };

    useEffect(()=>{
        getReviews(id)
    }, []);

    if(!reviews){
        return null;
    }
    return (
        <View style={css.reviewsContainer}> 
            <Text style={css.title}>Last Reviews: </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={reviews.reviews}
                renderItem={({item})=>{
                    row = !row; 
                    return (
                        <View style={ (row) ? css.item : css.item2}>
                            <View style={css.flexRow}>
                                <Text style={css.rating}>Rating: </Text>
                                <DrawStars 
                                    stars={item.rating}
                                    size={24}
                                    extraStyle={{
                                    marginLeft:10,
                                    }}
                                />
                            </View>

                            

                            <Text style={css.text}>{item.text}</Text>
                            <Text style={css.timeCreated}>{item.time_created}</Text>
                        </View>
                    );
                }}
            />

        </View>
    );
}; 

const css = StyleSheet.create({
    reviewsContainer:{
        flex:1,
    },
    flexRow: {
        display: 'flex',
        flexDirection: "row",
        marginBottom:10,
    },
    image:{
        height:120,
        width:220,
        margin:5,
        borderRadius: 10,
    },
    item:{
        margin: 10,
        padding: 10,
    },
    item2:{
        margin: 10,
        padding: 10,
        backgroundColor: '#e8e8e8',
    },
    text:{
        padding: 5,
        paddingLeft: 1,
        fontSize: 16,
    },
    timeCreated:{
        marginTop: 10,
        color: '#ff6dec',
    },
    rating:{
        fontSize: 18,
    },
    title:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f2f2f2',
        fontSize: 16,
    }
});

export default ResultShowScreen; 