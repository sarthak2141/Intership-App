import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {id: 1, name: 'Banking ', icon: 'account-balance', color: '#ff6347'},
  {id: 2, name: 'FMCG', icon: 'local-grocery-store', color: '#32cd32'},
  {id: 3, name: 'Engineering', icon: 'build', color: '#4682b4'},
  { id: 4, name: 'Manufacturing', icon: 'precision-manufacturing',color: '#8a2be2',},
  {id: 5, name: 'Supply Chain', icon: 'local-shipping', color: '#ffa500'},
  {id: 6, name: 'IT sector', icon: 'computer', color: '#20b2aa'},
];

const TreandingInternship = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item}>
            <Icon
              name={item.icon}
              size={40}
              color={item.color}
              style={{top: 4}}
            />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:1,
    marginLeft: 10,
     marginRight: 13
  },
  item: {
    flex: 1,
    margin: 8,
    paddingVertical: 1,

    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    shadowColor:'#000',
    alignItems: 'center',
  },
  text: {
    marginTop: 8,
    textAlign: 'center',
    color: '#333',
    fontSize: 15,
    fontWeight: '500',
    paddingBottom: 6,
  },
});

export default TreandingInternship;
