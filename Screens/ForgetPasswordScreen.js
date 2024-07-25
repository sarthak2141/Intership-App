import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.text} >Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email...." />
      <TouchableOpacity style={styles.button} onPress={()=>(navigation.navigate('OtpVerification'))}>
        <Text style={styles.buttonText}>Confirm Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',  
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:10
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
  text:{
    fontSize:16,
    fontWeight:'500',
    color:"#000",
    marginHorizontal:3,
  }
});

export default ForgotPasswordScreen;
