import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import theme from '../../styles/theme';

const therapists = [
  {
    id: '1',
    name: 'Dr. Johan Janson',
    category: 'Endocrinologist',
    rating: 4.5,
    reviews: 85,
    price: 'LKR50',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Dr. Marilyn Stanton',
    category: 'General Physician',
    rating: 5.0,
    reviews: 85,
    price: 'LKR60',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Dr. Marvin McKinney',
    category: 'Cardiologist',
    rating: 4.3,
    reviews: 85,
    price: 'LKR700',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: '4',
    name: 'Dr. Arlene McCoy',
    category: 'Physician',
    rating: 4.5,
    reviews: 85,
    price: 'LKR55',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '5',
    name: 'Dr. Eleanor Pena',
    category: 'Arthropathic',
    rating: 4.4,
    reviews: 85,
    price: 'LKR65',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: '6',
    name: 'Dr. Kaiya Donin',
    category: 'Endocrinologist',
    rating: 5.0,
    reviews: 85,
    price: 'LKR80',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const SearchTherapistsScreen = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

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
        onPress={() => setSelectedId(item.id)}
        activeOpacity={0.85}
      >
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <Text style={[styles.name, isSelected && styles.selectedText]}>{item.name}</Text>
        <Text style={[styles.qual, isSelected && styles.selectedText]}>{item.qualifications}</Text>
        <Text style={[styles.category, isSelected && styles.selectedText]}>{item.category}</Text>
        <View style={styles.row}>
          <Text style={[styles.rating, isSelected && styles.selectedText]}>★ {item.rating}</Text>
          <Text style={[styles.reviews, isSelected && styles.selectedText]}>{item.reviews} Reviews</Text>
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
      <View style={styles.searchBarContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for doctor..."
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
    backgroundColor: '#eaf6f4',
    padding: 12,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    color: '#bbb',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#222',
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
    backgroundColor: '#fff',
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
    borderColor: '#F8F5EE',
    position: 'relative',
  },
  highlightCard: {
    backgroundColor: '#47978d',
    borderColor: '#47978d',
    borderRadius: 32,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginBottom: 8,
    backgroundColor: '#F8F5EE',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
    textAlign: 'center',
  },
  qual: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
    textAlign: 'center',
  },
  category: {
    fontSize: 13,
    color: '#666',
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
    color: '#F9CC48',
    fontWeight: 'bold',
    marginRight: 6,
    fontSize: 13,
  },
  reviews: {
    color: '#666',
    fontSize: 12,
  },
  price: {
    color: '#14467C',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 2,
    marginBottom: 8,
  },
  arrowBtn: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    backgroundColor: '#F8F5EE',
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
    color: '#14467C',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
});

export default SearchTherapistsScreen;
