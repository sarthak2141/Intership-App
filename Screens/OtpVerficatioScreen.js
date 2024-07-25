import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const OtpVerificationScreen = ({navigation}) => {
  // Create references for each TextInput
  const inputRefs = useRef([]);

  // Function to handle the change in OTP input
  const handleChange = (text, index) => {
    if (text.length) {
      // Focus the next input field if there is one
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  return (
    <View style={styles.container}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.otpContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleChange(text, index)}
            
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>(navigation.navigate('ResetPassword'))}>
        <Text style={styles.buttonText}>Verify OTP</Text>
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  otpInput: {
    width: 40,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default OtpVerificationScreen;
