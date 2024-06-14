import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ResultsList = ({ title ,results}) => {
    return (
        <View >
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList
            horizontal
            data={results}
            keyExtractor={(results)=>results.id}
            renderItem={({item})=>{
                return <Text>{item.name}</Text>;
            }}  
            />
        </View>
    );
};

const styles = StyleSheet.create({
   
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },

});

export default ResultsList;
