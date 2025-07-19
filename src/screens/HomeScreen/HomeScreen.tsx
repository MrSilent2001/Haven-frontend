import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../../components';
import { NavigationProps } from '../../types';
import theme from '../../styles/theme';
import { SCREEN_NAMES } from '../../constants';

const { width, height } = Dimensions.get('window');

interface HomeScreenProps extends NavigationProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {




  const handleGetStarted = () => {
    navigation.navigate(SCREEN_NAMES.LOGIN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#f8fafc', '#e2e8f0', '#cbd5e1']}
        style={styles.gradientBackground}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>🕊️</Text>
          </View>
          <Text style={styles.title}>Welcome to Haven</Text>
          <Text style={styles.subtitle}>Your mental wellness companion</Text>
        </View>

        {/* Features Row */}
        <View style={styles.featuresSection}>
          <View style={styles.featureRow}>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>🧘‍♀️</Text>
              <Text style={styles.featureText}>Meditation</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>💨</Text>
              <Text style={styles.featureText}>Breathing</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureIcon}>👨‍⚕️</Text>
              <Text style={styles.featureText}>Support</Text>
            </View>
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to begin your journey?</Text>
          <Text style={styles.ctaSubtitle}>Start your path to better mental wellness</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Get Started"
              onPress={handleGetStarted}
              variant="primary"
              fullWidth
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  gradientBackground: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  
  // Hero Section
  heroSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
    flex: 2,
    justifyContent: 'center',
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  logoIcon: {
    fontSize: 36,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
    textAlign: 'center',
    fontWeight: '600',
  },
  
  // Features Section
  featuresSection: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'center',
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#1e293b',
    textAlign: 'center',
    fontWeight: '600',
  },
  
  // CTA Section
  ctaSection: {
    paddingHorizontal: 24,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
  },
});

export default HomeScreen; 