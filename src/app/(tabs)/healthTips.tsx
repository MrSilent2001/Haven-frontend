import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HealthTips from "../../screens/HealthTips/HealthTips";

export type TherapistStackParamList = {
    HealthTipsScreen: undefined;
};

const HealthTipsStack = createStackNavigator<TherapistStackParamList>();

const TherapistsTab: React.FC = () => {
    return (
        <HealthTipsStack.Navigator
            initialRouteName="HealthTipsScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <HealthTipsStack.Screen
                name="HealthTipsScreen"
                component={HealthTips}
                options={{
                    title: 'Health Tips',
                }}
            />

        </HealthTipsStack.Navigator>
    );
};

export default TherapistsTab;