// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../screens/products';
// import Home from './screens/home';
import Home from "../screens/home"
import SingleProduct from '../screens/singleProducts';



const Stack = createNativeStackNavigator();

function Abc() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Abc;