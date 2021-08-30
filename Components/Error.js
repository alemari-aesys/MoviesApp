import React from 'react';
import {View, Text, StyleSheet} from "react-native";


const Error = ({errorText1, errorText2}) => {

    return (
        <View style={styles.container}>
            <Text>{errorText1}</Text>
            <Text>{errorText2}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"    
    },
    text: {
        fontWeight: 'bold'
    }
})

export default Error;