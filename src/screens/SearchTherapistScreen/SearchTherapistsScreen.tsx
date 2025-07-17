import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

const therapists = [
  {
    id: '1',
    name: 'Dr. Johan Janson',
    category: 'Endocrinologist',
    rating: 4.5,
    price: 'LKR50',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Dr. Marilyn Stanton',
    category: 'General Physician',
    rating: 5.0,
    price: 'LKR60',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Dr. Marvin McKinney',
    category: 'Cardiologist',
    rating: 4.3,
    price: 'LKR700',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '4',
    name: 'Dr. Arlene McCoy',
    category: 'Physician',
    rating: 4.5,
    price: 'LKR55',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '5',
    name: 'Dr. Eleanor Pena',
    category: 'Arthropathic',
    rating: 4.4,
    price: 'LKR65',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: '6',
    name: 'Dr. Kaiya Donin',
    category: 'Endocrinologist',
    rating: 5.0,
    price: 'LKR80',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const SearchTherapistsScreen = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const filteredTherapists = therapists.filter(
    t =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  const renderTherapist = ({ item }: any) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.highlightCard]}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('ViewAvailableSlots' as any, { therapist: item });
        }}
        activeOpacity={0.85}
      >
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <Text style={[styles.name, isSelected && styles.selectedText]}>{item.name}</Text>
        <Text style={[styles.qual, isSelected && styles.selectedText]}>{item.qualifications}</Text>
        <Text style={[styles.category, isSelected && styles.selectedText]}>{item.category}</Text>
        <View style={styles.row}>
          <Text style={[styles.rating, isSelected && styles.selectedText]}>★ {item.rating}</Text>
        </View>
        <Text style={[styles.price, isSelected && styles.selectedText]}>{item.price}</Text>
        <View style={styles.arrowBtn}>
          <Text style={styles.arrow}>→</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>{'<'} Back</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Find Your Therapist Here</Text>
      <View style={styles.searchBarContainer}>
        <MagnifyingGlassIcon size={22} color="#222" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for therapists..."
          placeholderTextColor="#bbb"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={filteredTherapists}
        renderItem={renderTherapist}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.rowWrap}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 12,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 70,
    marginBottom: 15,
    textAlign: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background_light,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },
  searchIcon: {
    fontSize: 20,
    color: theme.colors.secondary_text,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#222222',
    paddingVertical: 0,
  },
  list: {
    paddingBottom: 24,
  },
  rowWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: theme.colors.background_light,
    borderRadius: 32,
    padding: 16,
    width: '48%',
    marginBottom: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 2,
    borderColor: theme.colors.border_light,
    position: 'relative',
  },
  highlightCard: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderRadius: 32,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginBottom: 8,
    backgroundColor: theme.colors.border_light,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222222',
    marginBottom: 2,
    textAlign: 'center',
  },
  qual: {
    fontSize: 13,
    color: theme.colors.secondary_text,
    marginBottom: 2,
    textAlign: 'center',
  },
  category: {
    fontSize: 13,
    color: theme.colors.secondary_text,
    marginBottom: 6,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    justifyContent: 'center',
  },
  rating: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    marginRight: 6,
    fontSize: 13,
  },
  reviews: {
    color: '#666',
    fontSize: 12,
  },
  price: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 2,
    marginBottom: 8,
  },
  arrowBtn: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: theme.colors.border_light,
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 1,
  },
  arrow: {
    color: theme.colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedText: {
    color: theme.colors.background_light,
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
    color: '#222222',
    fontWeight: 'bold',
  },
});

export default SearchTherapistsScreen;
