import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import { RootStackParamList } from '../types';
import { SCREEN_NAMES } from '../constants';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.HOME}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
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