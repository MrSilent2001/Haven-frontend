import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, ExercisesScreen, GuidedMeditationScreen, BreathingExercisesScreen, BreathingBreathCountScreen, BreathingSessionScreen } from '../screens';
import { RootStackParamList } from '../types';
import { SCREEN_NAMES } from '../constants';
import { LoginScreen } from '../screens';
import { RegisterScreen } from '../screens';

import { SearchTherapistsScreen } from '../screens';
import { ViewAvailableSlotsScreen } from '../screens';

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
          headerShown: false,
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
          name={SCREEN_NAMES.GUIDED_MEDITATION as keyof RootStackParamList}
          component={GuidedMeditationScreen}
          options={{
            title: 'Guided Meditation',
          }}
        />

        <Stack.Screen
          name={SCREEN_NAMES.BREATHING_EXERCISES as keyof RootStackParamList}
          component={BreathingExercisesScreen}
          options={{
            title: 'Breathing Exercises',
          }}
        />

        <Stack.Screen
          name={SCREEN_NAMES.BREATHING_BREATH_COUNT as keyof RootStackParamList}
          component={BreathingBreathCountScreen}
          options={{
            title: 'Choose Session',
          }}
        />

        <Stack.Screen
          name={SCREEN_NAMES.BREATHING_SESSION as keyof RootStackParamList}
          component={BreathingSessionScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={SCREEN_NAMES.SEARCH_THERAPISTS as keyof RootStackParamList}
          component={SearchTherapistsScreen}
          options={{
            title: 'Search Therapists',
          }}
        />

        <Stack.Screen
          name={SCREEN_NAMES.VIEW_AVAILABLE_SLOTS as keyof RootStackParamList}
          component={ViewAvailableSlotsScreen}
          options={{
            title: 'Available Slots',
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