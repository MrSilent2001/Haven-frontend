import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../constants';
import { ExercisesStackParamList } from '../types/navigation';
import ExercisesScreen from '../screens/ExercisesScreen/ExercisesScreen';
import GuidedMeditationScreen from '../screens/ExercisesScreen/GuidedMeditationScreen';
import BreathingExercisesScreen from '../screens/ExercisesScreen/BreathingExercisesScreen';
import BreathingBreathCountScreen from '../screens/ExercisesScreen/BreathingBreathCountScreen';
import BreathingSessionScreen from '../screens/ExercisesScreen/BreathingSessionScreen';

const Stack = createNativeStackNavigator<ExercisesStackParamList>();

const ExercisesStackNavigator = () => (
  <Stack.Navigator initialRouteName={SCREEN_NAMES.EXERCISES_HOME}>
    <Stack.Screen
      name={SCREEN_NAMES.EXERCISES_HOME}
      component={ExercisesScreen}
      options={{ title: 'Exercises' }}
    />
    <Stack.Screen
      name={SCREEN_NAMES.GUIDED_MEDITATION}
      component={GuidedMeditationScreen}
      options={{ title: 'Guided Meditation' }}
    />
    <Stack.Screen
      name={SCREEN_NAMES.BREATHING_EXERCISES}
      component={BreathingExercisesScreen}
      options={{ title: 'Breathing Exercises' }}
    />
    <Stack.Screen
      name={SCREEN_NAMES.BREATHING_BREATH_COUNT}
      component={BreathingBreathCountScreen}
      options={{ title: 'Breathing Exercises' }}
    />
    <Stack.Screen
      name={SCREEN_NAMES.BREATHING_SESSION}
      component={BreathingSessionScreen}
      options={{ }}
    />
  </Stack.Navigator>
);

export default ExercisesStackNavigator; 