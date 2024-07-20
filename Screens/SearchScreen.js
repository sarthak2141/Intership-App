import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.searchMainContainer}>
          
        <TouchableOpacity style={{marginTop:14,  borderRadius:32,alignItems:'center',padding:2}} onPress={()=>navigation.goBack()}>
        <Icon name='chevron-left' color='black' size={39}  />
        </TouchableOpacity>

      

      <View style={styles.searchContainer}>

       
        
      
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#454545"
        />
        
        <TouchableOpacity>
            <Icon name="search" size={24} color="#454545" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff4fd',
alignItems:'center',

   
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:1,
    borderRadius: 48,

    paddingHorizontal:5,
    width:'85%',
    marginTop:14,
    marginLeft:6
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    marginHorizontal:2
   
  
  },
  searchIcon: {
    marginLeft: 1,
    marginRight:12,
  },
  searchMainContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  }
});


