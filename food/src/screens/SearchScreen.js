import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ({navigation}) => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResult();

    const filterResultByPrice = (price)=>{
        // price === '$' || '$$' || '$$$'
        return results.filter(result =>{
            return result.price === price;
        })
    };
 
    return (
        <>
            <SearchBar 
                term={term}
                onTermChange={ (newTerm) =>{ setTerm(newTerm) } }  // (newTerm) =>{ setTerm(newTerm) } === setTerm
                onTermSubmit={ ()=>{ searchApi(term) } } //  ()=>{ searchApi() } === searchApi
            />
           
            {errorMessage ? <Text> {errorMessage} </Text> : null} 

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
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
            </ScrollView>
              

        </>
            
    );
}; 

const styles = StyleSheet.create({
    
});

export default SearchScreen; 