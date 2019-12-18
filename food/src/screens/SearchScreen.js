import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async (searchTerm)=>{
        try{
            const response = await yelp.get('/search', {
                params:{
                    limit: 50,
                    term: searchTerm, // term,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            console.log(response.data.businesses);
        }catch (err){
            console.log(err);
            setErrorMessage('Something Went Wrong !'); 
        }
    };


    // run searchApi only one time (is first render)
    useEffect(()=>{
        searchApi('pasta'); 
    }, []);

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={ (newTerm) =>{ setTerm(newTerm) } }  // (newTerm) =>{ setTerm(newTerm) } === setTerm
                onTermSubmit={ ()=>{ searchApi(term) } } //  ()=>{ searchApi() } === searchApi
            />

            <Text> We Have Found: {results.length} </Text> 
            {errorMessage ? <Text> {errorMessage} </Text> : null} 
             
        </View>
            
    );
}; 

const styles = StyleSheet.create({

});

export default SearchScreen; 