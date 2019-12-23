import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

import { FontAwesome } from '@expo/vector-icons';
import DrawStars from '../components/DrawStars';


const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async ()=>{
        try{
            const response = await yelp.get(`/${id}`);
            //console.log(response.data);
            setResult(response.data);
        } catch(err) { 
            console.log(err);
        }
    };

    useEffect(()=>{
        getResult(id); 
    }, []);

    if(!result){
        return null;
    }
    return (
        <View style={css.container}> 
            <Text style={css.title}>{result.name}</Text>

            <View style={css.flexRow}>
              <DrawStars 
                stars={result.rating}
                size={24}
                extraStyle={{
                  marginLeft:10,
                }}
              />

              <Text style={css.retingText}> {result.review_count} Reviews </Text>

              <FontAwesome 
                  style={css.reviewIcon}
                  size={30} 
                  name="eye" 
                  onPress={()=>{
                    navigation.navigate('Reviews', {id:id})
                  }}
               />


            </View>

            <View style={css.flexRow}>
              <Text style={css.retingText}>{result.price},</Text>
              <Text style={css.retingText}> Categories: {result.categories[0].title}</Text>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{ 
                    return (
                        <Image source={{uri: item}} style={css.image}/>
                    );
                }}
            />

        </View>
    );
}; 

const css = StyleSheet.create({
  container:{
    flex:1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: "row",
    marginBottom:10,
  },
  retingText:{
    fontSize: 20,
    marginLeft:10,
  },
  image:{
      height:120,
      width:220,
      margin:5,
      borderRadius: 10,
  },
  title: {
    marginVertical:10,
    marginHorizontal:10,
    fontSize:20,
    fontWeight: 'bold',
  },
  stars:{
    marginLeft:15,
  },
  reviewIcon:{
      marginLeft: 20,
      color: '#DAA520',
  }

});

export default ResultShowScreen;