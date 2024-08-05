import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const internships = [
  {
    id: '1',
    title: 'React Native Intern',
    company: 'Catalysts Reachout',
    location: 'Remote',
    salary: '₹10T – ₹15T',
    posted: '2d',
  },
  {
    id: '2',
    title: 'Front End Intern',
    company: 'Lincode',
    location: 'Remote',
    salary: '₹8T – ₹21T',
    posted: '7d',
  },
  {
    id: '3',
    title: 'Front End Developer',
    company: 'Fiducia Labs Pvt. Ltd.',
    location: 'Remote',
    salary: '₹8T – ₹21T',
    posted: '7d',
  },
];

const InternshipScreen = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const renderInternship = ({ item }) => (
    <View style={styles.internshipCard}>
      <Text style={styles.internshipTitle}>{item.title}</Text>
      <Text style={styles.internshipCompany}>{item.company}</Text>
      <Text style={styles.internshipLocation}>{item.location}</Text>
      {item.salary ? <Text style={styles.internshipSalary}>{item.salary}</Text> : null}
      {item.posted ? <Text style={styles.internshipPosted}>{item.posted}</Text> : null}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Icon name="search" size={20} style={styles.icon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for internships"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.locationWrapper}>
          <Icon name="location-on" size={20} style={styles.icon} />
          <TextInput
            style={styles.locationInput}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
        </View>
      </View>
      <View style={styles.filtersWrapper}>
        <ScrollView horizontal style={styles.filtersContainer} showsHorizontalScrollIndicator={false}>
          <Icon name='filter-list' size={25} style={styles.filterIcon}/>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Easy Apply only</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Remote only</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Salary range</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Company rating</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Date posted</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <FlatList
        data={internships}
        renderItem={renderInternship}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff4fd',
  },
  searchContainer: {
    width: '90%',
    marginHorizontal: 20,
    flexDirection: 'row',
    padding: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  searchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 5,
    marginRight: 5,
  },
  locationWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    paddingHorizontal: 5,
    position:'absolute',
    right:20,
  },
  locationInput: {
    flex: 1,
    height: 40,
    paddingRight: 10,
    
    
  },
  icon: {
    marginLeft: 5,
  },
  filtersWrapper: {
    height: 50,
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  filterIcon: {
    marginVertical: 5,
  },
  filterButton: {
    backgroundColor: '#e0e0e0',
    padding: 9,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  filterText: {
    fontSize: 14,
  },
  internshipCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  internshipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  internshipCompany: {
    fontSize: 16,
    color: '#555',
  },
  internshipLocation: {
    fontSize: 14,
    color: '#888',
  },
  internshipSalary: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  internshipPosted: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default InternshipScreen;
