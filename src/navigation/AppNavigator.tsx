import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import { RootStackParamList } from '../types';
import { SCREEN_NAMES } from '../constants';
import { LoginScreen } from '../screens';
import { RegisterScreen } from '../screens';
import { DashboardScreen } from '../screens';
import { SearchTherapistsScreen } from '../screens';
import { ViewAvailableSlotsScreen } from '../screens';

import ExercisesStackNavigator from './ExercisesStackNavigator';

import DashboardScreen from "../screens/Dashboard";


const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // TEMPORARY: Set Exercises as initial screen for testing
        initialRouteName={SCREEN_NAMES.EXERCISES}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={SCREEN_NAMES.HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
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
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Dashboard' }}
        />

        <Stack.Screen
          name="SearchTherapists"
          component={SearchTherapistsScreen}
          options={{ title: 'Search Therapists' }}
        />

        <Stack.Screen
          name="ViewAvailableSlots"
          component={ViewAvailableSlotsScreen}
          options={{ title: 'Available Slots' }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 