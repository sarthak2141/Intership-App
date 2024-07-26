import 'react-native-gesture-handler';
import 'react-native-reanimated';
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';

import ProfileScreen from './Screens/ProfileScreen';
import DrawerScreen from './Screens/DrawerScreen';

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegistrationScreen';
import ForgotPasswordScreen from './Screens/ForgetPasswordScreen';
import OtpVerificationScreen from './Screens/OtpVerficatioScreen';
import ResetPasswordScreen from './Screens/ResetPassword';
import ProjectsScreen from './Screens/ProjectsScreen';
import PostScreens from './Screens/PostScreens';
import MessagesScreen from './Screens/MessagesScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const width = Dimensions.get('window').width;

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Messages') {
                        iconName = 'envelope';
                    } else if (route.name === 'Post') {
                        iconName = 'plus-square';
                    } else if (route.name === 'Projects') {
                        iconName = 'briefcase';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    }

                    return (
                        <View style={{ alignItems: 'center' }}>
                            <Icon name={iconName} size={size} color={color} />
                            <Text style={{ color: focused ? '#5A64F5' : 'gray', fontSize: 12 }}>
                                {route.name}
                            </Text>
                        </View>
                    );
                },
                tabBarActiveTintColor: '#5A64F5',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    // bottom:15,
                    // left: 10, 
                    // right: 10,
                    width: width , 
                    elevation: 5,
                    backgroundColor: '#ffffff',
                  borderTopLeftRadius:13,
                  borderTopRightRadius:13,
                    height: 70,
                    zIndex:10,
                    ...styles.shadow
                },
                headerShown: false,
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Messages" component={MessagesScreen} />
            <Tab.Screen
                name="Post"
                component={PostScreens}
                options={{
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            style={{
                                top: -23,
                                justifyContent: 'center',
                                alignItems: 'center',
                                ...styles.shadow
                            }}
                        >
                            <View style={styles.postIconContainer}>
                                <MaterialIcon name="add" size={35} color="#ffffff" style={styles.plusIcon} />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen name="Projects" component={ProjectsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const StackNav = () => {
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
            <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
            <Stack.Screen name='HomeScreen' component={MyTabs} options={{ headerShown: false }} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

const DrawerNav = () => (
    <Drawer.Navigator
        drawerContent={props => <DrawerScreen {...props} />}
        screenOptions={{
            headerShown: false,
        }}
    >
        <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
);

const App = () => (
    <NavigationContainer>
        <DrawerNav />
    </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#1177ff',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    postIconContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor:'#5A64F5',
      justifyContent: 'center',
      alignItems: 'center',
  },
  plusIcon: {
    fontWeight: '400', 
    
    
}
});
