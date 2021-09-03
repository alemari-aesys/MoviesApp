import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayButton = ({handlePress}) => {
    return (
        <Pressable style={styles.button} onPress={() => {handlePress()}}>
            <Icon name={'caret-forward-circle-outline'} size={50} color={'#fff'} />
        </Pressable>
    );
}

const styles= StyleSheet.create({
    button: {
        borderRadius: 50,
        width: 50,
        backgroundColor: 'blue'
    }
})

export default PlayButton;