import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;

const Navbar = ({navigation, main}) => {
    return (
        <SafeAreaView>
            {main ? 
            <View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Search', {test: 'porcodio'})}}>
                    <Icon style={{left: width - 50}} name={'search-circle'} size={45} color={'black'}/>
                </TouchableOpacity>
            </View>    
            :
            <View style={styles.bar}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Icon name={'arrow-back-circle'} size={40} color={'black'}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                    <Icon name={'search-circle'} size={45} color={'black'}/>
                </TouchableOpacity>
            </View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default Navbar;