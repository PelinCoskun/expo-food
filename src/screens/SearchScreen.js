import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice=(price)=>{
      return results.filter(results=>{
        return results.price===price
      })
    }

    return (
        <>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList results={filterResultByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
