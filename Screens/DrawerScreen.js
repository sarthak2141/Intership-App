import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerData = [
  { id: "01", label: 'Home', icon: 'home', navigationTo: 'HomeScreen' },
  { id: "02", label: 'Internship', icon: 'insert-drive-file', navigationTo: 'IntershipScreen' },
  { id: "03", label: 'Freelancer', icon: 'build', navigationTo: '' },
  { id: "04", label: 'Part Time Job', icon: 'favorite', navigationTo: '' },
  { id: "05", label: 'Career Advice', icon: 'chat', navigationTo: '' },
  { id: "06", label: 'Resume', icon: 'person', navigationTo: '' },
  { id: "07", label: 'Certification', icon: 'work', navigationTo: '' },
  { id: "08", label: 'Free Seminar', icon: 'group', navigationTo: '' },
  { id: "09", label: 'Premium Services', icon: 'description', navigationTo: '' },
  { id: "10", label: 'LogOut', icon: 'power-settings-new', navigationTo: '' }
];

const DrawerScreen = ({ navigation }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handlePressIn = (itemId) => {
    setHoveredItemId(itemId);
  };

  const handlePressOut = () => {
    setHoveredItemId(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/avatar4.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>Hello,</Text>
          <Text style={styles.userName}>UserName</Text>
        </View>
      </View>

      <FlatList
        data={DrawerData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.listContainer,
              { backgroundColor: hoveredItemId === item.id ? '#5A64F5' : '#eff4fd' }
            ]}
            onPressIn={() => handlePressIn(item.id)}
            onPressOut={handlePressOut}
            onPress={() => navigation.navigate(item.navigationTo)}
          >
            <Icon name={item.icon} color='#000' size={26} style={styles.icon} />
            <Text style={styles.textList}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.bottomView}onPress={()=>(navigation.navigate('Login'))}>
        <Text style={styles.bottomText}>Login/SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eff4fd',
    flex: 1,
    justifyContent: 'flex-start'
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center'
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 8,
  },
  userName: {
    color: 'black',
    fontSize: 17,
    fontWeight: '600',
  },
  greetingText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500'
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textList: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    marginLeft: 10
  },
  icon: {
    marginLeft: 8,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#DC143C',
    alignItems: 'center',
    padding: 11,
  },
  bottomText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#fff',
  },
});
