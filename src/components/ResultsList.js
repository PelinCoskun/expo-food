import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultsList=({title})=>{
    <View>
        <Text>{title}</Text>
    </View>
};


const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
});
export default ResultsList