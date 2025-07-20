import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../../screens/Dashboard/DashboardScreen';
import { HomeScreen } from '../../screens';
import { SCREEN_NAMES } from '../../constants';

export type HomeStackParamList = {
  Dashboard: undefined;
  HomeScreen: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeTab: React.FC = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <HomeStack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeTab; 