import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput, Alert } from 'react-native';
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

const appointments = [
  {
    id: 'a1',
    therapistName: 'Dr. Johan Janson',
    category: 'Endocrinologist',
    date: '2024-06-15',
    time: '04:30 PM',
  },
  {
    id: 'a2',
    therapistName: 'Dr. Marilyn Stanton',
    category: 'General Physician',
    date: '2024-06-18',
    time: '07:00 PM',
  },
];

const SearchTherapistsScreen = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState<'search' | 'appointments'>('search');
  const [appointmentsList, setAppointmentsList] = useState(appointments);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);

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
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'search' && styles.activeTab]}
          onPress={() => setActiveTab('search')}
        >
          <Text style={[styles.tabText, activeTab === 'search' && styles.activeTabText]}>
            Search Therapists
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'appointments' && styles.activeTab]}
          onPress={() => setActiveTab('appointments')}
        >
          <Text style={[styles.tabText, activeTab === 'appointments' && styles.activeTabText]}>
            View Appointments
          </Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'search' && (
        <>
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
        </>
      )}
      {activeTab === 'appointments' && (
        <FlatList
          data={appointmentsList}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingTop: 24, paddingBottom: 24 }}
          renderItem={({ item }) => (
            <View style={styles.appointmentCard}>
              <Text style={styles.appointmentName}>{item.therapistName}</Text>
              <Text style={styles.appointmentCategory}>{item.category}</Text>
              <View style={styles.appointmentRow}>
                <Text style={styles.appointmentLabel}>Date: </Text>
                <Text style={styles.appointmentValue}>{item.date}</Text>
              </View>
              <View style={styles.appointmentRow}>
                <Text style={styles.appointmentLabel}>Time: </Text>
                <Text style={styles.appointmentValue}>{item.time}</Text>
              </View>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => {
                  setAppointmentToDelete(item);
                  setShowDeleteModal(true);
                }}
              >
                <Text style={styles.deleteBtnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={<Text style={{ color: theme.colors.secondary_text, textAlign: 'center', marginTop: 40 }}>No appointments to show.</Text>}
        />
      )}
      {showDeleteModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Delete Appointment</Text>
            <Text style={styles.modalMsg}>Are you sure you want to delete this appointment?</Text>
            <View style={styles.modalBtnRow}>
              <TouchableOpacity onPress={() => setShowDeleteModal(false)} style={styles.modalCancelBtn}>
                <Text style={styles.modalCancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setAppointmentsList(appointmentsList.filter(a => a.id !== appointmentToDelete.id));
                  setShowDeleteModal(false);
                }}
                style={styles.modalDeleteBtn}
              >
                <Text style={styles.modalDeleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
  tabBar: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: theme.colors.background_light,
    borderRadius: 24,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: theme.colors.background_light,
  },
  activeTab: {
    backgroundColor: theme.colors.primary,
  },
  tabText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  activeTabText: {
    color: theme.colors.background_light,
  },
  appointmentCard: {
    backgroundColor: theme.colors.background_light,
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  appointmentName: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 2,
  },
  appointmentCategory: {
    color: theme.colors.secondary_text,
    fontSize: 15,
    marginBottom: 8,
  },
  appointmentRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  appointmentLabel: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  appointmentValue: {
    color: '#222222',
    fontSize: 14,
  },
  deleteBtn: {
    marginTop: 10,
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 16,
  },
  deleteBtnText: {
    color: theme.colors.background_light,
    fontWeight: 'bold',
    fontSize: 14,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 28,
    alignItems: 'center',
    width: 300,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222',
    marginBottom: 8,
  },
  modalMsg: {
    color: '#222',
    fontSize: 15,
    marginBottom: 24,
    textAlign: 'center',
  },
  modalBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalCancelBtn: {
    flex: 1,
    paddingVertical: 10,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: '#d7f5f0',
    alignItems: 'center',
  },
  modalCancelText: {
    color: '#47978d',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalDeleteBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#47978d',
    alignItems: 'center',
  },
  modalDeleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SearchTherapistsScreen;
