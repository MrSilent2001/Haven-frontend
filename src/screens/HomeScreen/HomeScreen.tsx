import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from '../../components';
import { NavigationProps } from '../../types';
import theme from '../../styles/theme';
import { SCREEN_NAMES } from '../../constants';

interface HomeScreenProps extends NavigationProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {




  const handleGetStarted = () => {
    navigation.navigate(SCREEN_NAMES.LOGIN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.heroSection}>
          <Text style={styles.title}>Welcome to Haven</Text>
          <Text style={styles.subtitle}>Your mental health companion</Text>
          <Text style={styles.description}>
            Discover peace of mind with guided meditation, breathing exercises, 
            and professional support all in one place.
          </Text>
        </View>
        
        <View style={styles.featureContainer}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>🧘‍♀️</Text>
            <Text style={styles.featureText}>Guided Meditation</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>💨</Text>
            <Text style={styles.featureText}>Breathing Exercises</Text>
          </View>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>👨‍⚕️</Text>
            <Text style={styles.featureText}>Professional Support</Text>
          </View>
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={handleGetStarted}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  heroSection: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: theme.colors.secondary_text,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 40,
  },
  feature: {
    alignItems: 'center',
    flex: 1,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: theme.colors.text,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginHint: {
    fontSize: 12,
    color: theme.colors.secondary_text,
    textAlign: 'center',
    marginTop: 12,
    fontStyle: 'italic',
  },
});

export default HomeScreen; 