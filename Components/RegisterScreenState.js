import { useState } from 'react';
import axios from 'axios';


export const useRegisterScreenState = () => {
  const [selectedOption, setSelectedOption] = useState('student');
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    organizationName: '',
    officialEmailId: '',
    officialLogo: '',
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber1: '',
    mobileNumber2: '',
    mobileNumber3: '',
    adharNumber: '',
    dateOfBirth: '',
    nameOfCollege: '',
    currentCountry: '',
    currentState: '',
    currentCity: '',
    qualification: '',
    experience: '',
    panCardNumber: '',
    GSTIN: '',
    pinCodeNumber: '',
    companyWebsite: '',
    addressLine1: '',
    addressLine2: '',
    keySkill: '',
    description: '',
    uploadResume: ''
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (navigation) => {
    const url = selectedOption === 'company' ? 
                'http://localhost:5000/client/company/register' : 
                'http://localhost:5000/client/user/register';
    const data = selectedOption === 'company' ? {
      organizationName: formData.organizationName,
      officialEmailId: formData.officialEmailId,
      officialLogo: formData.officialLogo,
      FirstName: formData.firstName,
      LastName: formData.lastName,
      currentCountry: formData.currentCountry,
      currentState: formData.currentState,
      currentCity: formData.currentCity,
      mobileNumber1: formData.mobileNumber1,
      mobileNumber2: formData.mobileNumber2,
      mobileNumber3: formData.mobileNumber3,
      adharNumber: formData.adharNumber,
      panCardNumber: formData.panCardNumber,
      GSTIN: formData.GSTIN,
      pinCodeNumber: formData.pinCodeNumber,
      fullAddress: `${formData.addressLine1}, ${formData.addressLine2}, ${formData.currentCity}, ${formData.currentState}, ${formData.currentCountry}`,
      description: formData.description,
      website: formData.companyWebsite,
      password: formData.password
    } : {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobileNo: formData.mobileNumber1,
      email: formData.email,
      dateOfBirth: formData.dateOfBirth,
      nameOfCollege: formData.nameOfCollege,
      currentCountry: formData.currentCountry,
      currentState: formData.currentState,
      currentCity: formData.currentCity,
      qualification: formData.qualification,
      uploadResume: formData.uploadResume,
      experienceYear: formData.experience.split(' ')[0],
      experienceMonth: formData.experience.split(' ')[1],
      keySkill: formData.keySkill,
      password: formData.password,
      description: formData.description
    };
    
    try {
      const response = await axios.post(url, data);
      if (response.status === 200) {
        Alert.alert('Success', 'Account created successfully');
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to create account');
    }
  };

  return {
    selectedOption,
    setSelectedOption,
    page,
    setPage,
    formData,
    handleChange,
    handleRegister
  };
};
