import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen, ExercisesScreen, GuidedMeditationScreen, BreathingExercisesScreen, BreathingBreathCountScreen, BreathingSessionScreen } from '../screens';
import { RootStackParamList } from '../types';
import { SCREEN_NAMES } from '../constants';
import { LoginScreen } from '../screens';
import { RegisterScreen } from '../screens';


import TabsLayout from '../app/(tabs)';

// Type assertion to ensure Dashboard is recognized
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator
        // Start with home screen
        initialRouteName={SCREEN_NAMES.HOME}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={SCREEN_NAMES.HOME}
          component={HomeScreen}
          options={{ title: 'Welcome' }}
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
          name={"Tabs" as keyof RootStackParamList}
          component={TabsLayout}
          options={{ title: 'Haven' }}
        />
   
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator; 