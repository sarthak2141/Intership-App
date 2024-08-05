import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Image, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';
import { uploadFileFireBase } from '../utils/upload-file-firebase';



const RegisterScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('student');
  const [page, setPage] = useState(1);
  const [fileUploadInProgress, setFileUploadInProgress] = useState(false)
  const [formData, setFormData] = useState({
    organizationName: '',
    officialEmail: '',
    officialLogo: null,
    password: '',
    firstName: '',
    lastName: '',
    mobile1: '',
    mobile2: '',
    mobile3: '',
    aadhaarNumber: '',
    dob: '',
    collegeName: '',
    currentCountry: '',
    panCardNumber: '',
    gstin: '',
    pinCode: '',
    companyWebsite: '',
    state: '',
    city: '',
    qualification: '',
    experience: '',
    addressLine1: '',
    addressLine2: '',
    keySkill: '',
    description: '',
    resume: null,
  });








  const filterFormData = () => {
    if (selectedOption === 'company') {
      return {
        organizationName: formData.organizationName,
        officialEmail: formData.officialEmail,
        officialLogo: formData.officialLogo,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        mobile1: formData.mobile1,
        mobile2: formData.mobile2,
        mobile3: formData.mobile3,
        aadhaarNumber: formData.aadhaarNumber,
        panCardNumber: formData.panCardNumber,
        gstin: formData.gstin,
        pinCode: formData.pinCode,
        companyWebsite: formData.companyWebsite,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        city: formData.city,
        state: formData.state,
        currentCountry: formData.currentCountry,
        resume: formData.resume,
      };
    } else {
      return {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        mobileNumber: formData.mobileNumber,
        dob: formData.dob,
        collegeName: formData.collegeName,
        currentCountry: formData.currentCountry,
        state: formData.state,
        city: formData.city,
        qualification: formData.qualification,
        experience: formData.experience,
        keySkill: formData.keySkill,
        description: formData.description,
        resume: formData.resume,
      };
    }
  };







  const handleFileUpload = async (field) => {
    try {
      setFileUploadInProgress(true)
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        copyTo: 'cachesDirectory'
      });

      if (results.length > 0) {
        const file = results[0];
        console.log({ file });
        const getUploadedFileURL = await uploadFileFireBase(file?.name, file.fileCopyUri)
        console.log(getUploadedFileURL, 'GET UPLOADED FILE URL');
        setFileUploadInProgress(false)
        // setFormData(prevData => ({ ...prevData, [field]: file }));
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Cancelled', 'File selection was cancelled.');
        setFileUploadInProgress(false)
      } else {
        console.error(err);
        setFileUploadInProgress(false)
      }
    }
  };





  const handleCreateAccount = async () => {
    const url = selectedOption === 'company'
      ? 'http://192.168.0.127:5000/client/company/register'
      : 'http://192.168.0.127:5000/client/user/register';
    const data = filterFormData();

    try {
      const response = await axios.post(url, data);

      if (response.status === 200) {
        Alert.alert('Success', 'Account created successfully!');
        console.log(response);

      } else {
        Alert.alert('Error', response.data.message || 'Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while creating the account. Please try again.');
    }
  };









  const handleInputChange = (field, value) => {
    setFormData(prevData => ({ ...prevData, [field]: value }));
  };



  const handleOptionChange = (option) => {
    setSelectedOption(option);
    resetFormAndPage();
  };


  const resetFormAndPage = () => {
    setFormData({
      organizationName: '',
      officialEmail: '',
      officialLogo: '',
      password: '',
      firstName: '',
      lastName: '',
      mobile1: '',
      mobile2: '',
      mobile3: '',
      aadhaarNumber: '',
      dob: '',
      collegeName: '',
      currentCountry: '',
      panCardNumber: '',
      gstin: '',
      pinCode: '',
      companyWebsite: '',
      state: '',
      city: '',
      qualification: '',
      experience: '',
      addressLine1: '',
      addressLine2: '',
      keySkill: '',
      description: '',
      resume: null,
    });
    setPage(1);
  };









  // const handleResumeUpload = async () => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles], 
  //     });

  //     setFormData({ ...formData, resume: res[0] });
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {

  //       Alert.alert('Cancelled', 'File selection was cancelled.');
  //     } else {

  //       console.error(err);
  //     }
  //   }
  // };











  const isNextButtonEnabled = () => {
    if (selectedOption === 'company') {
      if (page === 1) {
        return formData.organizationName && formData.officialEmail && formData.password && formData.firstName && formData.lastName;
      }
      if (page === 2) {
        return formData.mobile1 && formData.mobile2 && formData.mobile3 && formData.aadhaarNumber;
      }
      if (page === 3) {
        return formData.panCardNumber && formData.gstin && formData.pinCode && formData.companyWebsite;
      }
      if (page === 4) {
        return formData.addressLine1 && formData.addressLine2 && formData.city && formData.state && formData.currentCountry;
      }
    } else {
      if (page === 1) {
        return formData.fullName && formData.email && formData.password && formData.confirmPassword;
      }
      if (page === 2) {
        return formData.mobileNumber && formData.dob && formData.collegeName && formData.currentCountry;
      }
      if (page === 3) {
        return formData.state && formData.city && formData.qualification && formData.experience;
      }
      if (page === 4) {
        return formData.keySkill && formData.description && formData.resume;
      }
    }
    return false;
  };
  const renderPage1 = () => (
    <>
      {selectedOption === 'company' ? (
        <>
          <Text style={styles.text}>Organization Name</Text>
          <View style={styles.action}>
            <Icon name="briefcase" color="#05375a" size={20} />
            <TextInput placeholder="Organization Name" style={styles.textInput}
              value={formData.organizationName}
              onChangeText={text => handleInputChange('organizationName', text)}

            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Official Email Id</Text>
          <View style={styles.action}>
            <Icon name="mail" color="#05375a" size={20} />
            <TextInput placeholder="name@company_name.com" style={styles.textInput} autoCapitalize="none"
              value={formData.officialEmail}
              onChangeText={text => handleInputChange('officialEmail', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Official Logo</Text>
          <View style={styles.action}>
            <Icon name="image" color="#05375a" size={20} />
            <TouchableOpacity style={{ marginLeft: 5,flexDirection:'row',alignItems:'center' }} onPress={() => handleFileUpload('officialLogo')}>
              <Text style={styles.link}>{formData.officialLogo ? formData.officialLogo.name : 'Choose File'}</Text>
              { fileUploadInProgress && <ActivityIndicator color={'#5A64F5'} size={'small'}/>}
            </TouchableOpacity>
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Password</Text>
          <View style={styles.action}>
            <Icon name="lock" color="#05375a" size={20} />
            <TextInput placeholder="Minimum 6 characters" secureTextEntry={true} style={styles.textInput} autoCapitalize="none"
              value={formData.password}
              onChangeText={text => handleInputChange('password', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>First Name</Text>
          <View style={styles.action}>
            <Icon name="user" color="#05375a" size={20} />
            <TextInput placeholder="First Name" style={styles.textInput}

              value={formData.firstName}
              onChangeText={text => handleInputChange('firstName', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Last Name</Text>
          <View style={styles.action}>
            <Icon name="user" color="#05375a" size={20} />
            <TextInput placeholder="Last Name" style={styles.textInput}
              value={formData.lastName}
              onChangeText={text => handleInputChange('lastName', text)}
            />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.text}>Full Name</Text>
          <View style={styles.action}>
            <Icon name="user" color="#05375a" size={20} />
            <TextInput placeholder="Enter your Full Name" style={styles.textInput}
              value={formData.fullName}
              onChangeText={text => handleInputChange('fullName', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Email</Text>
          <View style={styles.action}>
            <Icon name="mail" color="#05375a" size={20} />
            <TextInput placeholder="Enter your Email" style={styles.textInput} autoCapitalize="none"

              value={formData.email}
              onChangeText={text => handleInputChange('email', text)}

            />
          </View>


          <Text style={[styles.text, { marginTop: 15 }]}>Password</Text>
          <View style={styles.action}>
            <Icon name="lock" color="#05375a" size={20} />
            <TextInput placeholder="Enter your Password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none"
              value={formData.password}
              onChangeText={text => handleInputChange('password', text)}
            />
          </View>

          <Text style={[styles.text, { marginTop: 15 }]}>Confirm Password</Text>
          <View style={styles.action}>
            <Icon name="lock" color="#05375a" size={20} />
            <TextInput placeholder="Confirm your Password" secureTextEntry={true} style={styles.textInput} autoCapitalize="none"
              value={formData.confirmPassword}
              onChangeText={text => handleInputChange('confirmPassword', text)}
            />
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
            <TextInput placeholder="10 digit Mobile number" style={styles.textInput}
              value={formData.mobile1}
              onChangeText={text => handleInputChange('mobile1', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Mobile Number.2</Text>
          <View style={styles.action}>
            <Icon name="phone" color="#05375a" size={20} />
            <TextInput placeholder="10 digit Mobile number" style={styles.textInput}
              value={formData.mobile2}
              onChangeText={text => handleInputChange('mobile2', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Mobile Number.3</Text>
          <View style={styles.action}>
            <Icon name="phone" color="#05375a" size={20} />
            <TextInput placeholder="10 digit Mobile number" style={styles.textInput}

              value={formData.mobile3}
              onChangeText={text => handleInputChange('mobile3', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Aadhaar Number</Text>
          <View style={styles.action}>
            <Icon name="user" color="#05375a" size={20} />
            <TextInput placeholder="Enter Aadhaar Number" style={styles.textInput}
              value={formData.aadhaarNumber}
              onChangeText={text => handleInputChange('aadhaarNumber', text)}
            />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.text}>Mobile Number</Text>
          <View style={styles.action}>
            <Icon name="phone" color="#05375a" size={20} />
            <TextInput placeholder="10 digit Mobile number" style={styles.textInput}
              value={formData.mobileNumber}
              onChangeText={text => handleInputChange('mobileNumber', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Date Of Birth</Text>
          <View style={styles.action}>
            <Icon name="calendar" color="#05375a" size={20} />
            <TextInput placeholder="dd-mm-yyyy" style={styles.textInput}
              value={formData.dob}
              onChangeText={text => handleInputChange('dob', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Name of College</Text>
          <View style={styles.action}>
            <Icon name="book" color="#05375a" size={20} />
            <TextInput placeholder="Enter Name of College" style={styles.textInput}
              value={formData.collegeName}
              onChangeText={text => handleInputChange('collegeName', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Current Country</Text>
          <View style={styles.action}>
            <Icon name="globe" color="#05375a" size={20} />
            <TextInput placeholder="Select Country" style={styles.textInput}
              value={formData.currentCountry}
              onChangeText={text => handleInputChange('currentCountry', text)}
            />
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
            <TextInput placeholder="Enter Pan Card Number" style={styles.textInput}
              value={formData.panCardNumber}
              onChangeText={text => handleInputChange('panCardNumber', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>GSTIN</Text>
          <View style={styles.action}>
            <Icon name="tag" color="#05375a" size={20} />
            <TextInput placeholder="Enter GSTIN" style={styles.textInput}
              value={formData.gstin}
              onChangeText={text => handleInputChange('gstin', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Pin Code Number</Text>
          <View style={styles.action}>
            <Icon name="map-pin" color="#05375a" size={20} />
            <TextInput placeholder="Enter Pin Code Number" style={styles.textInput}
              value={formData.pinCode}
              onChangeText={text => handleInputChange('pinCode', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Company Website</Text>
          <View style={styles.action}>
            <Icon name="globe" color="#05375a" size={20} />
            <TextInput placeholder="Company Website" style={styles.textInput}

              value={formData.companyWebsite}
              onChangeText={text => handleInputChange('companyWebsite', text)}
            />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.text}>Current State</Text>
          <View style={styles.action}>
            <Icon name="map-pin" color="#05375a" size={20} />
            <TextInput placeholder="Enter State" style={styles.textInput}
              value={formData.state}
              onChangeText={text => handleInputChange('state', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Current City</Text>
          <View style={styles.action}>
            <Icon name="map" color="#05375a" size={20} />
            <TextInput placeholder="Enter City Name" style={styles.textInput}
              value={formData.city}
              onChangeText={text => handleInputChange('city', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Qualification</Text>
          <View style={styles.action}>
            <Icon name="award" color="#05375a" size={20} />
            <TextInput placeholder="Select Qualification" style={styles.textInput}
              value={formData.qualification}
              onChangeText={text => handleInputChange('qualification', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Experience</Text>
          <View style={styles.action}>
            <Icon name="briefcase" color="#05375a" size={20} />
            <TextInput placeholder="Select Years" style={styles.textInput}
              value={formData.experience}
              onChangeText={text => handleInputChange('experience', text)}

            />
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
            <TextInput placeholder="Address Line 1" style={styles.textInput}
              value={formData.addressLine1}
              onChangeText={text => handleInputChange('addressLine1', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Address Line 2</Text>
          <View style={styles.action}>
            <Icon name="home" color="#05375a" size={20} />
            <TextInput placeholder="Address Line 2" style={styles.textInput}
              value={formData.addressLine2}
              onChangeText={text => handleInputChange('addressLine2', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>City</Text>
          <View style={styles.action}>
            <Icon name="map" color="#05375a" size={20} />
            <TextInput placeholder="Enter City Name" style={styles.textInput}
              value={formData.city}
              onChangeText={text => handleInputChange('city', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>State</Text>
          <View style={styles.action}>
            <Icon name="map-pin" color="#05375a" size={20} />
            <TextInput placeholder="Enter State" style={styles.textInput}
              value={formData.state}
              onChangeText={text => handleInputChange('state', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Country</Text>
          <View style={styles.action}>
            <Icon name="globe" color="#05375a" size={20} />
            <TextInput placeholder="Select Country" style={styles.textInput}
              value={formData.currentCountry}
              onChangeText={text => handleInputChange('currentCountry', text)}
            />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.text}>Key Skill</Text>
          <View style={styles.action}>
            <Icon name="key" color="#05375a" size={20} />
            <TextInput placeholder="Enter Key Skill" style={styles.textInput}

              value={formData.keySkill}
              onChangeText={text => handleInputChange('keySkill', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Description</Text>
          <View style={styles.action}>
            <Icon name="file-text" color="#05375a" size={20} />
            <TextInput placeholder="Enter Description" style={styles.textInput}
              value={formData.description}
              onChangeText={text => handleInputChange('description', text)}
            />
          </View>
          <Text style={[styles.text, { marginTop: 15 }]}>Upload Your Resume</Text>
          <View style={styles.action}>
            <Icon name="upload" color="#05375a" size={20} />


            <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => handleFileUpload('resume')} >
              <Text style={styles.link}>
                {formData.resume ? formData.resume.name : 'Choose File'}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );

  // const renderFooterButtons = () => (
  //   <View style={styles.footerButtons}>
  //     {page > 1 && (
  //       <TouchableOpacity onPress={() => setPage(page - 1)} style={styles.navigationButton}>
  //         <Text style={styles.link}>&lt;&lt; Previous</Text>
  //       </TouchableOpacity>
  //     )}
  //     <View style={styles.buttonContainer}>
  //       {page < 4 && (
  //         <TouchableOpacity onPress={() => setPage(page + 1)} style={styles.navigationButton}>
  //           <Text style={styles.link}>Next &gt;&gt;</Text>
  //         </TouchableOpacity>
  //       )}
  //     </View>
  //   </View>
  // );


  const renderFooterButtons = () => (
    <View style={styles.footerButtons}>
      {page > 1 && (
        <TouchableOpacity onPress={() => setPage(page - 1)} style={styles.navigationButton}>
          <Text style={styles.link}>&lt;&lt; Previous</Text>
        </TouchableOpacity>
      )}
      <View style={styles.buttonContainer}>
        {page < 4 && (
          <TouchableOpacity
            onPress={() => {
              if (isNextButtonEnabled()) {
                setPage(page + 1);
              }
            }}
          // style={[styles.navigationButton, !isNextButtonEnabled() && styles.buttonDisabled]}
          // disabled={!isNextButtonEnabled()}
          >
            <Text


              style={[styles.link, !isNextButtonEnabled() && styles.buttonDisabled]}
              disabled={!isNextButtonEnabled()}


            >Next &gt;&gt;</Text>
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
                onPress={() => handleOptionChange('company')}
              >
                <Text style={[styles.optionText, selectedOption === 'company' && styles.selectedOptionText]}>Company</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, selectedOption === 'student' && styles.selectedOption]}
                onPress={() => handleOptionChange('student')}
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
                <TouchableOpacity style={styles.register} onPress={handleCreateAccount}>
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
  buttonDisabled: {
    color: '#fff'
  },

});

export default RegisterScreen;
































