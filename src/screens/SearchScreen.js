import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    console.log(results);

    return (
        <View style={{ flex: 1 }}>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList title="Cost Effective" results={results.filter(result => result.price === '$')} />
                <ResultsList title="Bit Pricier" results={results.filter(result => result.price === '$$')} />
                <ResultsList title="Big Spender" results={results.filter(result => result.price === '$$$')} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
