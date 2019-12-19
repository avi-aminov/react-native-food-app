import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// https://expo.github.io/vector-icons/
import { Feather } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather  
                style={styles.iconStyle} 
                size={30} 
                name="search" 
            />

            <TextInput 
                onChangeText={ newTerm => onTermChange(newTerm) }
                onEndEditing={ ()=>onTermSubmit() }
                value={term}
                style={styles.textInputStyle} 
                placeholder="Search" 
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View> 
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom:15,
        flexDirection: 'row',
        alignItems: 'center',

    },
    textInputStyle: {
        flex: 1,
        marginRight: 15,
        marginLeft: 3,
        paddingHorizontal: 10,
        paddingVertical: 2,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 30,
        alignSelf: 'center',
        marginLeft: 10,
    }
});

export default SearchBar;