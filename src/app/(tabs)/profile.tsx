import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import theme from '../../styles/theme';
import { SearchTherapistsScreen, ViewAvailableSlotsScreen } from '../../screens';

export type ProfileStackParamList = {
  ProfileHome: undefined;
  SearchTherapists: undefined;
  ViewAvailableSlots: undefined;
  Settings: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

// Profile Home Screen Component
const ProfileHomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Feather name="user" size={60} color={theme.colors.primary} />
        </View>
        <Text style={styles.name}>Stephanie Johnson</Text>
        <Text style={styles.email}>stephanie@example.com</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="user" size={24} color={theme.colors.primary} />
          <Text style={styles.menuText}>Edit Profile</Text>
          <Feather name="chevron-right" size={20} color={theme.colors.secondary_text} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('SearchTherapists' as any)}
        >
          <Feather name="user-check" size={24} color={theme.colors.primary} />
          <Text style={styles.menuText}>Find Therapists</Text>
          <Feather name="chevron-right" size={20} color={theme.colors.secondary_text} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="calendar" size={24} color={theme.colors.primary} />
          <Text style={styles.menuText}>My Appointments</Text>
          <Feather name="chevron-right" size={20} color={theme.colors.secondary_text} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="settings" size={24} color={theme.colors.primary} />
          <Text style={styles.menuText}>Settings</Text>
          <Feather name="chevron-right" size={20} color={theme.colors.secondary_text} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="help-circle" size={24} color={theme.colors.primary} />
          <Text style={styles.menuText}>Help & Support</Text>
          <Feather name="chevron-right" size={20} color={theme.colors.secondary_text} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Feather name="log-out" size={24} color="#e74c3c" />
          <Text style={[styles.menuText, { color: '#e74c3c' }]}>Sign Out</Text>
          <Feather name="chevron-right" size={20} color={theme.colors.secondary_text} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ProfileTab: React.FC = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen
        name="ProfileHome"
        component={ProfileHomeScreen}
        options={{
          title: 'Profile',
        }}
      />
      <ProfileStack.Screen
        name="SearchTherapists"
        component={SearchTherapistsScreen}
        options={{
          title: 'Find Therapists',
        }}
      />
      <ProfileStack.Screen
        name="ViewAvailableSlots"
        component={ViewAvailableSlotsScreen}
        options={{
          title: 'Available Slots',
        }}
      />
    </ProfileStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 3,
    borderColor: theme.colors.primary,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: theme.colors.secondary_text,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.surface,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: 12,
    fontWeight: '500',
  },
});

export default ProfileTab; 