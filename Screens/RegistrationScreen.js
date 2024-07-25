import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Full Name</Text>
      <TextInput style={styles.input} placeholder="Enter your Full Name" />
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter your Email" />
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry />
      <Text style={styles.text}>Confirm Password</Text>
      <TextInput style={styles.input} placeholder="Enter your Confirm Password" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={{fontSize:18,fontWeight:'350',color:'#4F4F4F'}}>Already have an Account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 12,
    borderRadius:10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius:10,
  },
  buttonText: {
    color: '#fff',
    fontWeight:'500',
    fontSize:17,
  },
  link: {
    color: '#1177ff',
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal:4,
    fontSize:18,
    fontWeight:'500',
  },
  text:{
    fontSize:16,
    fontWeight:'500',
    color:"#000",
    marginHorizontal:3,
  }
});

export default RegisterScreen;
