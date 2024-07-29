import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'dark-content'} />
      

      <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Icon name="arrow-left" size={24} color="#05375a" />
      </TouchableOpacity>


            <Image 
              source={require('../assets/images/Img2.png')}
              style={{
                
                width: '100%',
                height: 290,
                resizeMode: 'stretch'
              }}
            />
          </View>
          <View style={styles.footer}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.title}>Register</Text>
            </View>
            <Text style={styles.text}>Full Name</Text>
            <View style={styles.action}>
              <Icon name="user" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter your Full Name"
                style={styles.textInput}
              />
            </View>
            <Text style={[styles.text, { marginTop: 15 }]}>Email</Text>
            <View style={styles.action}>
              <Icon name="mail" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter your Email"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            <Text style={[styles.text, { marginTop: 15 }]}>Password</Text>
            <View style={styles.action}>
              <Icon name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter your Password"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            <Text style={[styles.text, { marginTop: 15 }]}>Confirm Password</Text>
            <View style={styles.action}>
              <Icon name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Enter your Confirm Password"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.button}>
              <TouchableOpacity style={styles.register} onPress={() => { /* Handle registration */ }}>
                <Text style={styles.textSign}>Create Account</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
              <Text style={styles.text}>Already have an Account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Login</Text>
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
    backgroundColor: '#fff'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 30,
    marginTop: -34,
    elevation:5,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    color: '#05375a',
    fontSize: 18
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 5,
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a'
  },
  button: {
    alignItems: 'center',
    marginTop: 50
  },
  register: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#5A64F5'
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  link: {
    color: '#5A64F5',
    marginLeft: 5,
    fontSize: 18,
    fontWeight: '500'
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex:30,
  },
});

export default RegisterScreen;
