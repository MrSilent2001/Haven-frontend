import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';


type Therapist = {
  id: string;
  name: string;
  slots: string[];
  qualifications: string;
  category: string;
};

const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Dr. Jane Smith',
    slots: ['2024-06-10 10:00', '2024-06-10 14:00'],
    qualifications: 'PhD, Clinical Psychology',
    category: 'Anxiety, Depression',
  },
  {
    id: '2',
    name: 'Mr. John Doe',
    slots: ['2024-06-11 09:00', '2024-06-11 16:00'],
    qualifications: 'MSc, Counseling',
    category: 'Relationships, Stress',
  },
  {
    id: '3',
    name: 'Ms. Emily White',
    slots: ['2024-06-12 11:00', '2024-06-12 15:00'],
    qualifications: 'MA, Psychotherapy',
    category: 'Trauma, Self-esteem',
  },
];

const SearchTherapistsScreen = () => {
  // Remove selectedId state
  const navigation = useNavigation();

  const renderTherapist = ({ item }: { item: Therapist }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.label}>Qualifications:</Text>
      <Text style={styles.value}>{item.qualifications}</Text>
      <Text style={styles.label}>Category:</Text>
      <Text style={styles.value}>{item.category}</Text>
      <TouchableOpacity style={styles.slotButton} onPress={() => navigation.navigate('ViewAvailableSlots' as any)}>
        <Text style={styles.slotButtonText}>View Available Slots</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Therapists</Text>
      <FlatList
        data={therapists}
        renderItem={renderTherapist}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        // Remove extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5EE',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#14467C',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#F8F5EE',
    borderRadius: 10,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 3,
    borderColor: '#0F355E', // deep dark blue
  },
  // Remove selectedCard style
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#14467C',
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
    color: '#14467C',
    marginTop: 4,
  },
  value: {
    color: '#14467C',
    marginBottom: 2,
  },
  slot: {
    color: theme.colors.success_text,
    marginLeft: 8,
    marginBottom: 2,
  },
  // Remove selectedText style
  slotButton: {
    marginTop: 12,
    backgroundColor: '#52B774',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  slotButtonText: {
    color: '#F8F5EE',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SearchTherapistsScreen;
