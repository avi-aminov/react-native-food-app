import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultList = ({title, results}) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {title} </Text> 
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result)=>result.id}
                renderItem={({item})=>{
                    return <ResultDetail result={item}/>
                }}
            />
        </View>  
    );
}; 

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom:5,
    },
    container:{
        marginTop:10,
    }

});

export default ResultList; 