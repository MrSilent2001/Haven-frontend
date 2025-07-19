import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {SearchTherapistsScreen, ViewAvailableSlotsScreen} from '../../screens';
import { SCREEN_NAMES } from '../../constants';

export type TherapistStackParamList = {
    SearchTherapistsScreen: undefined;
    ViewAvailableSlotsScreen: { therapist: any };
};

const TherapistStack = createStackNavigator<TherapistStackParamList>();

const TherapistsTab: React.FC = () => {
    return (
        <TherapistStack.Navigator
            initialRouteName="SearchTherapistsScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <TherapistStack.Screen
                name="SearchTherapistsScreen"
                component={SearchTherapistsScreen}
            />
            <TherapistStack.Screen
                name="ViewAvailableSlotsScreen"
                component={ViewAvailableSlotsScreen}
            />
        </TherapistStack.Navigator>
    );
};

export default TherapistsTab;