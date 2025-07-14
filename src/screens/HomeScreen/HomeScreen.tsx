import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from '../../components';
import { NavigationProps } from '../../types';
import theme from '../../styles/theme';
import { SCREEN_NAMES } from '../../constants';

interface HomeScreenProps extends NavigationProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleNavigateToProfile = () => {
    navigation.navigate(SCREEN_NAMES.PROFILE, { userId: '123' });
  };

  const handleNavigateToSettings = () => {
    navigation.navigate(SCREEN_NAMES.SETTINGS);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Haven</Text>
        <Text style={styles.subtitle}>Your frontend project is ready to go!</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Profile"
            onPress={handleNavigateToProfile}
            variant="primary"
            fullWidth
          />
          
          <Button
            title="Open Settings"
            onPress={handleNavigateToSettings}
            variant="outline"
            fullWidth
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.text,
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
});

export default HomeScreen; 