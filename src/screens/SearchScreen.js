import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () =>{

    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]=useResults();

    return <View>
        <SearchBar  term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
        {errorMessage ? <Text>{errorMessage} </Text> : null}
        <Text>We have found {results.length} results</Text>
        <ResultsList/>
        <ResultsList/>
        <ResultsList/>
    </View>
};


const styles=StyleSheet.create({});

export default SearchScreen;