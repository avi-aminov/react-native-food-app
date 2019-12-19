import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';


const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async ()=>{
        try{
            const response = await yelp.get(`/${id}`);
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
        <View> 
            <Text>{result.name}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{ 
                    return (
                        <Image source={{uri: item}} style={styles.image}/>
                        
                    );
                }}
            />
        </View>
    );
}; 

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        margin:5,
    }
});

export default ResultShowScreen; 