import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, StyleSheet,ScrollView } from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const MariScreen = ({navigation}) => {
    return (
    <>
    <View style={styles.container}>
     
     <View style={styles.container2}>
         <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                    <Image
                    style={styles.image}
                    resizeMode='cover'
                    source={require("../assets/images/faceapp.png")}
                    />
                </TouchableOpacity>
     </View>
     <View style={styles.container1}>
        <Text style={styles.title}>CINEMARI</Text> 
     </View>
     <View style={styles.container3}>
     <Text style={{fontSize: 30, fontWeight: 'bold'}}>WELCOME TO CINEMARI</Text>
     </View>
    </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'space-between'
    },
    container1: {
        alignItems: 'center'
    },
    container2: {
        position:'absolute',
        top: -100
    },
    container3: {
        flexDirection: 'column',
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    title: {
        fontSize: 30, 
        fontWeight: 'bold'
    },
    image: {
        transform: [{scale: 0.4}],
        borderRadius: 100,
    }
})

export default MariScreen;