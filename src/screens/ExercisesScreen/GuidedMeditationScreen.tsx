import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExercisesStackParamList } from '../../types/navigation';
import { SCREEN_NAMES } from '../../constants';

type GuidedMeditationNavigationProp = NativeStackNavigationProp<ExercisesStackParamList>;

const GuidedMeditationScreen = () => {
  const navigation = useNavigation<GuidedMeditationNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>🧘‍♀️ Guided Meditation</Text>
        <Text style={styles.subtitle}>Find your inner peace with our meditation sessions</Text>
        
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionTitle}>5 Min Quick Meditation</Text>
            <Text style={styles.optionDesc}>Perfect for busy schedules</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionTitle}>15 Min Deep Relaxation</Text>
            <Text style={styles.optionDesc}>Release stress and tension</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionTitle}>30 Min Full Session</Text>
            <Text style={styles.optionDesc}>Complete mindfulness experience</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back to Exercises</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f8ff' 
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#47978d'
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  optionsContainer: {
    gap: 20,
    marginBottom: 40,
  },
  option: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#47978d',
    marginBottom: 5,
  },
  optionDesc: {
    fontSize: 14,
    color: '#666',
  },
  backButton: {
    alignItems: 'center',
    padding: 15,
  },
  backButtonText: {
    fontSize: 16,
    color: '#47978d',
    fontWeight: '600',
  },
});

export default GuidedMeditationScreen; 