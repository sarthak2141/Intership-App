import { StyleSheet, Text, View ,Image, ScrollView ,TextInput} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
const Header = ({navigation}) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    
  return (
    <View style={styles.container}>

    
    <ScrollView showsVerticalScrollIndicator={false} >

    
    <View style={styles.headerContainer}>
    <Image
      source={require('../assets/images/avatar4.jpg')} 
      style={styles.profileImage}
    />
    <View style={styles.textContainer}>
      <Text style={styles.greetingText}>Hello,</Text>
      <Text style={styles.userName}>userName</Text>
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
  {isSearchVisible && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#999"
          />
        </View>
      )}
  </ScrollView>
  </View>
);
};


export default Header

const styles = StyleSheet.create({
   
   container:{
    flex:1,
    backgroundColor:'#eff4fd'
   }
    ,

    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      
      padding: 16,
      borderRadius: 25,
      margin: 7,
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 20,
    },
    textContainer: {
      flex: 1,
      marginLeft: 12,
    },
    greetingText: {
      color: 'black',
      fontSize: 14,
    },
    userName: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
    },
    iconsContainer: {
      flexDirection: 'row',
    },
    icon: {
      marginRight: 16,
    },
    searchContainer: {
        padding: 16,
        backgroundColor:'#16151a'
      },
      searchInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 8,
        color: '#000',
      },
  });