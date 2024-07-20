import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen'
import SearchScreen from './Screens/SearchScreen'
import { createDrawerNavigator,  } from '@react-navigation/drawer';
import DrawerScreen from './Screens/DrawerScreen';
const StackNav=()=>{
 const navigation=useNavigation();

const Stack=createNativeStackNavigator();

  return (
   
    <Stack.Navigator 
    
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen}
      
       options={{
        headerShown:false
      }}/>
       <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
        headerShown:false
      }}/>

      
    </Stack.Navigator>
 
  )
}


 const DrowerNav=()=>{
  const Drawer=createDrawerNavigator();
  
  return(
 
  <Drawer.Navigator
  // drawerContent={props => <DrawerScreen {...props} />}
  drawerContent={props=><DrawerScreen{...props}/>}
  screenOptions={{
    headerShown: false,
  }}
  >
    <Drawer.Screen name= "Home" component={StackNav}/>
  </Drawer.Navigator>


 )
 }













 const App = () => {
  const Stack = createNativeStackNavigator();
    
return(
  <NavigationContainer>
    {/* <Stack.Navigator >
      {/* <Stack.Screen name ="login" component={LOgin}/> */}
      
    {/* </Stack.Navigator>  */}
    <DrowerNav/>
  </NavigationContainer>
)
}

export default App