import { StyleSheet, Text, View ,Image, ScrollView ,TextInput} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
const Header = ({navigation}) => {
    

    
  return (
    <View style={styles.container}>

    
    <ScrollView showsVerticalScrollIndicator={false} >

    <View>

   
    <View style={styles.headerContainer}>
    
      <View style={styles.textContainer}>
      <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}  >
        <Icon name='menu' size={27} color="black" style={styles.icon}/>
        </TouchableOpacity>
      </View>


    <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={()=>(navigation.navigate('SearchScreen'))}>
    <Icon name="search" size={24} color="black" style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity>
    <Icon name="bell" size={24} color="black" />
    </TouchableOpacity>
    </View>
  </View>
  
        
  </View>
  </ScrollView>
  </View>
);
};


export default Header

const styles = StyleSheet.create({
   
   container:{
    marginTop:5,
    flex:1,
    backgroundColor:'#eff4fd'
   }
    ,

    headerContainer: {
      
      flexDirection: 'row',
      alignItems: 'center',
     
      paddingHorizontal: 15,
      borderRadius: 25,
      marginHorizontal: 8,
      marginTop:8
    },
   
    textContainer: {
      flex: 1,
      
      
    },
   
   
    iconsContainer: {
      flexDirection: 'row',
    },
    icon: {
      marginRight: 16,
    },
    searchContainer: {
        padding: 16,
        
      },
      searchInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        color: '#000',
      },
  });