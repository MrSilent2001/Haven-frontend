import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ExercisesScreen } from '../screens';
import { RootStackParamList } from '../types';
import { SCREEN_NAMES } from '../constants';
import { LoginScreen } from '../screens';
import { RegisterScreen } from '../screens';

import ExercisesStackNavigator from './ExercisesStackNavigator';

import DashboardScreen from "../screens/Dashboard/DashboardScreen";

// Type assertion to ensure Dashboard is recognized
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // Set Home as initial screen
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
          name={SCREEN_NAMES.EXERCISES}
          component={ExercisesScreen}
          options={{
            title: 'Exercises',
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
              name={SCREEN_NAMES.DASHBOARD as keyof RootStackParamList}
              component={DashboardScreen}
              options={{
                  title: 'Profile',
              }}
          />
   
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 