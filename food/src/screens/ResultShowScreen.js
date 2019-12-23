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

/*
Object {
    "alias": "pasta-fresca-san-jose",
    "categories": Array [
      Object {
        "alias": "italian",
        "title": "Italian",
      },
    ],
    "coordinates": Object {
      "latitude": 37.336514,
      "longitude": -121.894318,
    },
    "display_phone": "(408) 320-1975",
    "hours": Array [
      Object {
        "hours_type": "REGULAR",
        "is_open_now": false,
        "open": Array [
          Object {
            "day": 0,
            "end": "2100",
            "is_overnight": false,
            "start": "1100",
          },
          Object {
            "day": 1,
            "end": "2100",
            "is_overnight": false,
            "start": "1100",
          },
          Object {
            "day": 2,
            "end": "2100",
            "is_overnight": false,
            "start": "1100",
          },
          Object {
            "day": 3,
            "end": "2130",
            "is_overnight": false,
            "start": "1100",
          },
          Object {
            "day": 4,
            "end": "2200",
            "is_overnight": false,
            "start": "1100",
          },
          Object {
            "day": 6,
            "end": "2100",
            "is_overnight": false,
            "start": "1100",
          },
        ],
      },
    ],
    "id": "5YDncgyZh_vDAkdsZled9Q",
    "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/xg9NE7QI_DW8tuzItRpx-g/o.jpg",
    "is_claimed": true,
    "is_closed": false,
    "location": Object {
      "address1": "87 N San Pedro St",
      "address2": "",
      "address3": "",
      "city": "San Jose",
      "country": "US",
      "cross_streets": "",
      "display_address": Array [
        "87 N San Pedro St",
        "San Jose, CA 95110",
      ],
      "state": "CA",
      "zip_code": "95110",
    },
    "messaging": Object {
      "url": "https://www.yelp.com/raq/5YDncgyZh_vDAkdsZled9Q?adjust_creative=X6ZgAvGQBM0qtoxso2zU9w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=X6ZgAvGQBM0qtoxso2zU9w#popup%3Araq",
      "use_case_text": "Message the Business",
    },
    "name": "Pasta Fresca",
    "phone": "+14083201975",
    "photos": Array [
      "https://s3-media4.fl.yelpcdn.com/bphoto/xg9NE7QI_DW8tuzItRpx-g/o.jpg",
      "https://s3-media4.fl.yelpcdn.com/bphoto/Zk-UgEgagZtx_rsCMtaWew/o.jpg",
      "https://s3-media2.fl.yelpcdn.com/bphoto/675tU9aZwoeqLYcGiQDTJw/o.jpg",
    ],
    "price": "$",
    "rating": 3.5,
    "review_count": 108,
    "transactions": Array [
      "pickup",
    ],
    "url": "https://www.yelp.com/biz/pasta-fresca-san-jose?adjust_creative=X6ZgAvGQBM0qtoxso2zU9w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=X6ZgAvGQBM0qtoxso2zU9w",
  }
  */