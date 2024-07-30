import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const RegisterScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('student');
  const [page, setPage] = useState(1);

  const renderPage1 = () => (
    <>
      {selectedOption === 'company' ? (
        <>
          <Text style={styles.text}>Organization Name</Text>
          <View style={styles.action}>
            <Icon name="briefcase" color="#05375a" size={20} />
            <TextInput placeholder="Organization Name" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Official Email Id</Text>
          <View style={styles.action}>
            <Icon name="mail" color="#05375a" size={20} />
            <TextInput placeholder="name@company_name.com" style={styles.textInput} autoCapitalize="none" />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Official Logo</Text>
          <View style={styles.action}>
            <Icon name="image" color="#05375a" size={20} />
            <TouchableOpacity style={{ marginLeft: 5 }}>
              <Text style={styles.link}>Choose File</Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Password</Text>
          <View style={styles.action}>
            <Icon name="lock" color="#05375a" size={20} />
            <TextInput placeholder="Minimum 6 characters" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>First Name</Text>
          <View style={styles.action}>
            <Icon name="user" color="#05375a" size={20} />
            <TextInput placeholder="First Name" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Last Name</Text>
          <View style={styles.action}>
            <Icon name="user" color="#05375a" size={20} />
            <TextInput placeholder="Last Name" style={styles.textInput} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.text}>Full Name</Text>
          <View style={styles.action}>
            <Icon name="user" color="#05375a" size={20} />
            <TextInput placeholder="Enter your Full Name" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Email</Text>
          <View style={styles.action}>
            <Icon name="mail" color="#05375a" size={20} />
            <TextInput placeholder="Enter your Email" style={styles.textInput} autoCapitalize="none" />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Password</Text>
          <View style={styles.action}>
            <Icon name="lock" color="#05375a" size={20} />
            <TextInput placeholder="Enter your Password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Confirm Password</Text>
          <View style={styles.action}>
            <Icon name="lock" color="#05375a" size={20} />
            <TextInput placeholder="Confirm your Password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none" />
          </View>
        </>
      )}
    </>
  );

  const renderPage2 = () => (
    <>
      {selectedOption === 'company' ? (
        <>
          <Text style={styles.text}>Mobile Number.1</Text>
          <View style={styles.action}>
            <Icon name="phone" color="#05375a" size={20} />
            <TextInput placeholder="10 digit Mobile number" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Mobile Number.2</Text>
          <View style={styles.action}>
            <Icon name="phone" color="#05375a" size={20} />
            <TextInput placeholder="10 digit Mobile number" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Mobile Number.3</Text>
          <View style={styles.action}>
            <Icon name="phone" color="#05375a" size={20} />
            <TextInput placeholder="10 digit Mobile number" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Aadhaar Number</Text>
          <View style={styles.action}>
            <Icon name="user" color="#05375a" size={20} />
            <TextInput placeholder="Enter Aadhaar Number" style={styles.textInput} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.text}>Mobile Number</Text>
          <View style={styles.action}>
            <Icon name="phone" color="#05375a" size={20} />
            <TextInput placeholder="10 digit Mobile number" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Date Of Birth</Text>
          <View style={styles.action}>
            <Icon name="calendar" color="#05375a" size={20} />
            <TextInput placeholder="dd-mm-yyyy" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Name of College</Text>
          <View style={styles.action}>
            <Icon name="book" color="#05375a" size={20} />
            <TextInput placeholder="Enter Name of College" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Current Country</Text>
          <View style={styles.action}>
            <Icon name="globe" color="#05375a" size={20} />
            <TextInput placeholder="Select Country" style={styles.textInput} />
          </View>
        </>
      )}
    </>
  );

  const renderPage3 = () => (
    <>
      {selectedOption === 'company' ? (
        <>
          <Text style={styles.text}>Pan Card Number</Text>
          <View style={styles.action}>
            <Icon name="credit-card" color="#05375a" size={20} />
            <TextInput placeholder="Enter Pan Card Number" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>GSTIN</Text>
          <View style={styles.action}>
            <Icon name="tag" color="#05375a" size={20} />
            <TextInput placeholder="Enter GSTIN" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Pin Code Number</Text>
          <View style={styles.action}>
            <Icon name="map-pin" color="#05375a" size={20} />
            <TextInput placeholder="Enter Pin Code Number" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Company Website</Text>
          <View style={styles.action}>
            <Icon name="globe" color="#05375a" size={20} />
            <TextInput placeholder="Company Website" style={styles.textInput} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.text}>Current State</Text>
          <View style={styles.action}>
            <Icon name="map-pin" color="#05375a" size={20} />
            <TextInput placeholder="Enter State" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Current City</Text>
          <View style={styles.action}>
            <Icon name="map" color="#05375a" size={20} />
            <TextInput placeholder="Enter City Name" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Qualification</Text>
          <View style={styles.action}>
            <Icon name="award" color="#05375a" size={20} />
            <TextInput placeholder="Select Qualification" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Experience</Text>
          <View style={styles.action}>
            <Icon name="briefcase" color="#05375a" size={20} />
            <TextInput placeholder="Select Years" style={styles.textInput} />
          </View>
        </>
      )}
    </>
  );

  const renderPage4 = () => (
    <>
      {selectedOption === 'company' ? (
        <>
          <Text style={styles.text}>Address Line 1</Text>
          <View style={styles.action}>
            <Icon name="home" color="#05375a" size={20} />
            <TextInput placeholder="Address Line 1" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Address Line 2</Text>
          <View style={styles.action}>
            <Icon name="home" color="#05375a" size={20} />
            <TextInput placeholder="Address Line 2" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>City</Text>
          <View style={styles.action}>
            <Icon name="map" color="#05375a" size={20} />
            <TextInput placeholder="Enter City Name" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>State</Text>
          <View style={styles.action}>
            <Icon name="map-pin" color="#05375a" size={20} />
            <TextInput placeholder="Enter State" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Country</Text>
          <View style={styles.action}>
            <Icon name="globe" color="#05375a" size={20} />
            <TextInput placeholder="Select Country" style={styles.textInput} />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.text}>Key Skill</Text>
          <View style={styles.action}>
            <Icon name="key" color="#05375a" size={20} />
            <TextInput placeholder="Enter Key Skill" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Description</Text>
          <View style={styles.action}>
            <Icon name="file-text" color="#05375a" size={20} />
            <TextInput placeholder="Enter Description" style={styles.textInput} />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Upload Your Resume</Text>
          <View style={styles.action}>
            <Icon name="upload" color="#05375a" size={20} />
            <TouchableOpacity style={{ marginLeft: 5 }}>
              <Text style={styles.link}>Choose File</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );

  const renderFooterButtons = () => (
    <View style={styles.footerButtons}>
      {page > 1 && (
        <TouchableOpacity onPress={() => setPage(page - 1)} style={styles.navigationButton}>
          <Text style={styles.link}>&lt;&lt; Previous</Text>
        </TouchableOpacity>
      )}
      <View style={styles.buttonContainer}>
        {page < 4 && (
          <TouchableOpacity onPress={() => setPage(page + 1)} style={styles.navigationButton}>
            <Text style={styles.link}>Next &gt;&gt;</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Icon name="arrow-left" size={24} color="#05375a" />
            </TouchableOpacity>
            <Image source={require('../assets/images/Img2.png')} style={styles.image} />
          </View>
          <View style={styles.footer}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.title}>Register</Text>
            </View>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[styles.optionButton, selectedOption === 'company' && styles.selectedOption]}
                onPress={() => setSelectedOption('company')}
              >
                <Text style={[styles.optionText, selectedOption === 'company' && styles.selectedOptionText]}>Company</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, selectedOption === 'student' && styles.selectedOption]}
                onPress={() => setSelectedOption('student')}
              >
                <Text style={[styles.optionText, selectedOption === 'student' && styles.selectedOptionText]}>Student</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pageContainer}>
              {page === 1 && renderPage1()}
              {page === 2 && renderPage2()}
              {page === 3 && renderPage3()}
              {page === 4 && renderPage4()}
            </View>
            {renderFooterButtons()}
            {page === 4 && (
              <View style={{ flex: 1, alignItems: 'center', marginTop: 15 }}>
                <TouchableOpacity style={styles.register} onPress={() => { /* Handle registration */ }}>
                  <Text style={styles.textSign}>Create Account</Text>
                </TouchableOpacity>
              </View>
            )}
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
    backgroundColor: '#fff',
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
    elevation: 5,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 5,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  register: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#5A64F5',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  link: {
    color: '#5A64F5',
    fontSize: 18,
    fontWeight: '500',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 30,
  },
  image: {
    width: '100%',
    height: 290,
    resizeMode: 'stretch',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  optionButton: {
    flex: 1,
    padding: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#5A64F5',
    borderColor: '#5A64F5',
  },
  optionText: {
    color: '#05375a',
    fontSize: 18,
  },
  selectedOptionText: {
    color: 'white',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  navigationButton: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  alignLeft: {
    alignSelf: 'flex-start',
  },
  navigationButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pageContainer: {
    marginTop: 20,
  },
  uploadButton: {
    backgroundColor: '#5A64F5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
