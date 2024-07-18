import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen'
import SearchScreen from './Screens/SearchScreen'
const Stack=createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
        headerShown:false
      }}/>
       <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
        headerShown:false
      }}/>

      
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})