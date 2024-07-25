import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email...." />
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.input} placeholder="Enter your password...." secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={()=>(navigation.navigate('HomeScreen'))}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',justifyContent:'flex-end'}}>

    
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} >
        <Text style={styles.link}>Forget Password</Text>
      </TouchableOpacity>
      </View>
      <View style={{alignItems:'center'}}>
      <Text style={{fontSize:17,fontWeight:'500',color:'#000'}}>Don't have an Account?</Text>
      </View>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:10,
  },
  button: {
    backgroundColor: '#1177ff',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    borderRadius:10,
  },
  buttonText: {
    color: '#fff',
    fontSize:17,
    fontWeight:'500'
    
  },
  link: {
    color: '#1177ff',
    textAlign: 'center',
    marginVertical: 10,
    fontSize:17
  },
  signupButton: {
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
    borderRadius:10,
    
  },
  signupButtonText: {
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

export default LoginScreen;
