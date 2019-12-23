import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default ()=>{
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
            //console.log(response.data.businesses);
        }catch (err){
            console.log(err);
            setErrorMessage('Something Went Wrong !'); 
        }
    };


    // run searchApi only one time (is first render)
    useEffect(()=>{
        searchApi('pasta'); 
    }, []); 

    return [searchApi, results, errorMessage];
};
