import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () =>{

    const [term,setTerm]=useState('');

    return <View>
        <SearchBar  term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
        {errorMessage ? <Text>{errorMessage} </Text> : null}
        <Text>We have found {results.length} results</Text>
    </View>
};


const styles=StyleSheet.create({});

export default SearchScreen;