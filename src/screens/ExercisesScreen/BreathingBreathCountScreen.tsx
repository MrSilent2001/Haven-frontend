import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../types/navigation';
import { SCREEN_NAMES } from '../../constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

type BreathingBreathCountNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const parsePattern = (pattern: string) => pattern.split('-').map(Number);

const options = [
  { label: 'Quick Session', breaths: 10 },
  { label: 'Standard Session', breaths: 20 },
  { label: 'Extended Session', breaths: 30 },
];

const BreathingBreathCountScreen = () => {
  const navigation = useNavigation<BreathingBreathCountNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'BreathingBreathCount'>>();
  const { pattern = '4-4-4-4', name = 'Breathing' } = route.params ?? {};
  const cycleDuration = parsePattern(pattern).reduce((a, b) => a + b, 0);

  const handleSelect = (breaths: number) => {
    const duration = breaths * cycleDuration;
    navigation.navigate('BreathingSession' as any, { pattern, name, duration });
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

const styles = StyleSheet.create({
  topic: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#47978d',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#d7f5f0',
    borderRadius: 15,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#47978d',
    marginBottom: 5,
  },
  cardBreaths: {
    fontSize: 14,
    color: '#666',
  },
});

export default BreathingBreathCountScreen; 