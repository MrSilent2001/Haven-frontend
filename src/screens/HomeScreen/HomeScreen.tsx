import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from '../../components';
import { NavigationProps } from '../../types';
import theme from '../../styles/theme';
import { SCREEN_NAMES } from '../../constants';

interface HomeScreenProps extends NavigationProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {




  const handleNavigateToLogin = () => {
    // Navigate to login screen
    const rootNavigation = navigation.getParent()?.getParent();
    rootNavigation?.navigate(SCREEN_NAMES.LOGIN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Haven</Text>
        <Text style={styles.subtitle}>Your mental health companion is ready to help!</Text>
        <Text style={styles.loginInfo}>Login with: username "test" and password "1234"</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Login to Dashboard"
            onPress={handleNavigateToLogin}
            variant="primary"
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
  loginInfo: {
    fontSize: 14,
    color: theme.colors.secondary_text,
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },
});

export default HomeScreen; 