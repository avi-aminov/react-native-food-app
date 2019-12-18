import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResult();

    const filterResultByPrice = (price)=>{
        // price === '$' || '$$' || '$$$'
        return results.filter(result =>{
            return result.price === price;
        })
    };

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={ (newTerm) =>{ setTerm(newTerm) } }  // (newTerm) =>{ setTerm(newTerm) } === setTerm
                onTermSubmit={ ()=>{ searchApi(term) } } //  ()=>{ searchApi() } === searchApi
            />

            <Text style={styles.resultFound}> We Have Found: {results.length} </Text> 
            {errorMessage ? <Text> {errorMessage} </Text> : null} 

            <ResultList 
                title='Cost Effective'
                results={filterResultByPrice('$')}
            />

            <ResultList 
                title='Bit Pricier'
                results={filterResultByPrice('$$')}
            />

            <ResultList 
                title='Big Spender'
                results={filterResultByPrice('$$$')}
            />
        </View>
            
    );
}; 

const styles = StyleSheet.create({
    resultFound:{
        marginLeft:15,
    }
});

export default SearchScreen; 