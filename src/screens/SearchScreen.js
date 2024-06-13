import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () =>{

    const [term,setTerm]=useState('');
    const [results,setResults]=useState([]);
    const searchApi=async() => {
      try{
      const response = await yelp.get('/search',{
        params:{
            limit:50,
            term,
            location:'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err){
      console.log(err)
    }
  }

    return <View>
        <SearchBar  term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
        <Text>Search Screen </Text>
        <Text>We have found {results.length} results</Text>
    </View>
};


const styles=StyleSheet.create({});

export default SearchScreen;