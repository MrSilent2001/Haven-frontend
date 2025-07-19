import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  ExercisesScreen, 
  GuidedMeditationScreen, 
  BreathingExercisesScreen, 
  BreathingBreathCountScreen, 
  BreathingSessionScreen 
} from '../../screens';
import { SCREEN_NAMES } from '../../constants';

export type ExercisesStackParamList = {
  ExercisesHome: undefined;
  GuidedMeditation: undefined;
  BreathingExercises: undefined;
  BreathingBreathCount: { pattern?: string; name?: string };
  BreathingSession: { pattern: string; name: string; duration: number };
};

const ExercisesStack = createStackNavigator<ExercisesStackParamList>();

const ExercisesTab: React.FC = () => {
  return (
    <ExercisesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ExercisesStack.Screen
        name="ExercisesHome"
        component={ExercisesScreen}
        options={{
          title: 'Exercises',
        }}
      />
      <ExercisesStack.Screen
        name="GuidedMeditation"
        component={GuidedMeditationScreen}
        options={{
          title: 'Guided Meditation',
        }}
      />
      <ExercisesStack.Screen
        name="BreathingExercises"
        component={BreathingExercisesScreen}
        options={{
          title: 'Breathing Exercises',
        }}
      />
      <ExercisesStack.Screen
        name="BreathingBreathCount"
        component={BreathingBreathCountScreen}
        options={{
          title: 'Choose Session',
        }}
      />
      <ExercisesStack.Screen
        name="BreathingSession"
        component={BreathingSessionScreen}
        options={{
          headerShown: false,
        }}
      />
    </ExercisesStack.Navigator>
  );
};

export default ExercisesTab; 