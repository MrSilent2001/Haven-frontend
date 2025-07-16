import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Login' as any)}>
        <Text style={styles.backArrow}>{'<'} Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Dashboard</Text>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SearchTherapists' as any)}>
        <Text style={styles.cardTitle}>Connect with Therapists</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background_light,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    color: theme.colors.text,
  },
  card: {
    width: 280,
    padding: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  backBtn: {
    position: 'absolute',
    top: 32,
    left: 16,
    zIndex: 10,
    padding: 8,
  },
  backArrow: {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
