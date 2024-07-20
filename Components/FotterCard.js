import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const data = [
  {  id:"01",icon: 'work', label: 'Certifications  ', count: '4400+', color: '#FF6347' },
  { id:"02", icon: 'person', label: 'Resume ', count: '1700+', color: '#4682B4' },
  { id:"03", icon: 'description', label: 'Premium ', count: '1250+', color: '#32CD32' },
  {  id:"05",icon: 'chat', label: 'Career Advice', count: '3500+', color: '#20b2aa' },
  {  id:"04",icon: 'insert-drive-file', label: 'Internship', count: '5300+', color: '#ffa500' },
  {  id:"06",icon: 'favorite', label: 'Part Time Jobs', count: '2600+', color: 'red' },
];

const FotterCard = () => (
 
<View style={styles.container}>


  <FlatList 
data={data}
keyExtractor={(item)=> item.id.toString()}
  
numColumns={3}
renderItem={({ item }) => (
  <View style={styles.card}>
    <Icon name={item.icon} size={40} color={item.color} />
    <Text style={styles.label}>{item.label}</Text>
    <Text style={styles.count}>{item.count}</Text>
  </View>

  )
}
  />
</View>
);



const styles = StyleSheet.create({
container: {

  flex: 1,
 
  padding:2,
  
  

},
card: {
  flex: 1,
  
 flexDirection:'column',
   alignItems:'center'
  
},
label: {

      marginTop: 1,
    textAlign: 'center',  
    color: '#333',
    fontSize: 15,
    fontWeight:'500',
     paddingBottom:1,
     marginHorizontal:3
     
    },
    count: {
          fontSize: 17,
          color: '#333',
          fontWeight:'500',
          alignItems:'center',
          marginBottom:7
        
      //     fontWeight: 'bold',
      
         },

});










export default FotterCard;
