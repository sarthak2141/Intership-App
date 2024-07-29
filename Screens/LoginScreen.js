import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <TouchableOpacity style={{ flex:1,justifyContent:'flex-end', flexDirection:'row',marginTop:6,marginRight:10, }} onPress={navigation.navigate('HomeScreen')}>
        <Text style={{fontSize:17,color:'#000' }}>
          Skip
        </Text>
        <Icon name='chevron-right' size={22} color={'#000'} style={{marginLeft:-4,marginRight:-16 ,marginTop:2 }}/>
        <Icon name='chevron-right' size={22} color={'#000'} style={{marginTop:2 }}/>
      </TouchableOpacity>
            <StatusBar backgroundColor={'#fff'}  barStyle={'dark-content'} />
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/images/loginImg.png')} 
              style={{
                width: '100%',
                height: 270,
                resizeMode: 'stretch'
              }}
            />
          </View>
          <View style={styles.footer}>
            <View style={{alignItems:'center'}}>
            <Text style={styles.title}>Login</Text>
            </View>
            
            <Text style={styles.text}>Email ID</Text>
            <View style={styles.action}>
              <Icon name="mail" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Email ID"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            <Text style={[styles.text, { marginTop: 15 }]}>Password</Text>
            <View style={styles.action}>
              <Icon name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Password"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={{ alignSelf: 'flex-end', marginTop: 15 }}>
              <Text style={{ color: '#5A64F5' ,fontSize:16,fontWeight:'500' }}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <TouchableOpacity style={styles.login} onPress={() => {navigation.navigate('HomeScreen')}}>
              
                  <Text style={styles.textSign}>Login</Text>
                
                
              </TouchableOpacity>


  <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{ color: '#05375a', marginTop: 15,  fontSize:16,fontWeight:'500'}}> Don't have an Account?</Text>
              <TouchableOpacity  onPress={() => {navigation.navigate('Register')}}>
              <Text style={{ color: '#5A64F5', marginTop: 15,fontSize:16,fontWeight:'500' }}> Register</Text>
            </TouchableOpacity>
            </View>
              {/* <TouchableOpacity
               
                style={[styles.signIn, { marginTop: 15 }]}
              >
                <Text style={[styles.textSign, { color: '#fff' }]}>SignUp</Text>
              </TouchableOpacity> */}
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
    alignItems: 'center'
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 30,
    marginTop: -50,
    marginLeft:1,
    elevation:5,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:10,
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
  login: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#5A64F5'
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#000'
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default LoginScreen;
