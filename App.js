import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import Details from './screens/Details';
import Navbar from './Components/Navbar';
import Search from './screens/Search';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import MariScreen from './screens/MariScreen';

import { View } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'MariScreen'}>
        <Stack.Screen name="Cinemari" component={MariScreen} options={{
          headerTransparent: true,
          headerTitle: ''
          }}/>
        <Stack.Screen name="Home" component={Home} options={{
          headerTransparent: true,
          header: ({navigation}) => <Navbar navigation={navigation} main={true} />
          }}/>
        <Stack.Screen name="Details" component={Details} options={{
          headerTransparent: true,
          header: ({navigation}) => <Navbar navigation={navigation} main={true}/>
          }}/>
        <Stack.Screen name="Search" component={Search} options={{
          headerTransparent: true,
          header: ({navigation}) => <Navbar navigation={navigation} main={false}/>
          }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;