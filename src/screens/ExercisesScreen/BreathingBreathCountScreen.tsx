import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { ExercisesStackParamList } from '../../types/navigation';
import { SCREEN_NAMES } from '../../constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const options = [
  { label: 'Quick Reset', breaths: 6 },
  { label: 'Focused Calm', breaths: 12 },
  { label: 'Deep Relaxation', breaths: 18 },
];

function parsePattern(pattern: string) {
  return pattern.split('-').map(Number);
}

export const BreathingBreathCountScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ExercisesStackParamList>>();
  const route = useRoute<RouteProp<ExercisesStackParamList, 'BreathingBreathCount'>>();
  const { pattern = '4-4-4-4', name = 'Breathing' } = route.params ?? {};
  const cycleDuration = parsePattern(pattern).reduce((a, b) => a + b, 0);

  const handleSelect = (breaths: number) => {
    const duration = breaths * cycleDuration;
    navigation.navigate(SCREEN_NAMES.BREATHING_SESSION, { pattern, name, duration });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="auto" />
      <FlatList
        data={options}
        keyExtractor={item => item.label}
        ListHeaderComponent={<Text style={styles.topic}>Choose Session</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleSelect(item.breaths)}
            activeOpacity={0.8}
          >
            <Text style={styles.cardTitle}>{item.label}</Text>
            <Text style={styles.cardBreaths}>{item.breaths} breaths</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 80, paddingHorizontal: 24, paddingTop: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  topic: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#47978d',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 18,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#d7f5f0',
    borderRadius: 20,
    padding: 24,
    marginBottom: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  cardBreaths: {
    fontSize: 15,
    color: '#47978d',
    fontWeight: '600',
  },
});

export default BreathingBreathCountScreen; 