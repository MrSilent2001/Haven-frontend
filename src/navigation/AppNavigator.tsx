import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import { RootStackParamList } from '../types';
import { SCREEN_NAMES } from '../constants';
import { LoginScreen } from '../screens';
import { RegisterScreen } from '../screens';
import DashboardScreen from "../screens/Dashboard";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.HOME}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F9CC48', // gold gradient start color
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name={SCREEN_NAMES.HOME}
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        
        <Stack.Screen
          name={SCREEN_NAMES.LOGIN}
          component={LoginScreen}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name={SCREEN_NAMES.REGISTER}
          component={RegisterScreen}
          options={{ title: 'Register' }}
        />

          <Stack.Screen
              name={SCREEN_NAMES.DASHBOARD}
              component={DashboardScreen}
              options={{
                  title: 'Profile',
              }}
          />
        {/* Add more screens here as they are created */}
        {/* 
        <Stack.Screen
          name={SCREEN_NAMES.PROFILE}
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
        
        <Stack.Screen
          name={SCREEN_NAMES.SETTINGS}
          component={SettingsScreen}
          options={{
            title: 'Settings',
          }}
        />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 