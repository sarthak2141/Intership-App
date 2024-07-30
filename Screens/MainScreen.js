import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={'#eaebff'} barStyle={'dark-content'} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/MainImg.png')} 
              style={styles.image1}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.greeting}>Hello, welcome to our app!</Text>
            <Text style={styles.instruction}>Please select one option:</Text>
            <View style={styles.content}>
              <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CompanyScreen')}>
                <Image 
                  source={require('../assets/images/resume.png')} // replace with your company image
                  style={styles.image}
                />
                <Text style={styles.text}>Company</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('StudentScreen')}>
                <Image 
                  source={require('../assets/images/resume.png')}  // replace with your student image
                  style={styles.image}
                />
                <Text style={styles.text}>Student</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 0, 
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: -30,
    marginLeft: 1,
    elevation: 5,
  },
  greeting: {
    color: '#05375a',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  instruction: {
    color: '#05375a',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#05375a',
    fontWeight: 'bold',
  },
  image1: {
    width: '100%',
    height: 270,
    resizeMode: 'stretch',
    marginTop: 0,
  },
});

export default MainScreen;
