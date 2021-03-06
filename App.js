import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { hot } from 'react-hot-loader';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import login from './Screens/login';
import home from './screens/home';
import cart from './screens/cart';

// function App() {
export default function App() {
  const mainNavigator = createStackNavigator();
  
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <mainNavigator.Navigator  screenOptions={{headerShown: false}} initialRouteName="Login">

          <mainNavigator.Screen name="Login" component={Login} />
          <mainNavigator.Screen name="Home" component={Home}/>
          <mainNavigator.Screen name="Cart" component={Cart} />

        </mainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


