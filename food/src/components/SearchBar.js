import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SearchBar = () => {

    return (
        <View style={styles.backround}>
           <Text>Search Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    backround:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 15,
    }
});

export default SearchBar;