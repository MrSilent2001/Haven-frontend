import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const GuidedMeditationScreen = () => (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <Text style={styles.text}>Guided Meditation Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 24, fontWeight: 'bold' },
});

export default GuidedMeditationScreen; 