import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';

const data = [
  { id: 1, name: 'Internship', image: require('../assets/images/internship.jpg') },
  { id: 3, name: 'Resume', image: require('../assets/images/resume.png') },
  { id: 4, name: 'Courses ', image: require('../assets/images/courses.jpg') },
  { id: 5, name: 'Career Advice', image: require('../assets/images/career-advice.jpg') },
  { id: 2, name: 'Part Time Jobs', image: require('../assets/images/part-time-jobs.jpg') },
];

const Services= () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Services</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
      />
    </View>







  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    padding: 10,
   
    
 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
  },
  list: {
    alignItems: 'center',
  },
  item: {
    marginHorizontal: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,

    
  },
  text: {
    marginTop: 2,
    textAlign: 'center',
    color: '#333',
    fontSize: 14,
    fontWeight:'600'
  },
});
export default Services;