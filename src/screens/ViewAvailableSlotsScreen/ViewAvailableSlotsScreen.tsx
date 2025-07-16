import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const getWeekDates = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date();
  const week = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    week.push({
      key: i.toString(),
      day: days[date.getDay() === 0 ? 6 : date.getDay() - 1],
      date: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      full: date,
    });
  }
  return week;
};

const weekDates = getWeekDates();
const slots = [
  ['04:30 PM', '05:00 PM', '06:30 PM'],
  ['07:00 PM', '07:45 PM', '08:30 PM'],
];

const ViewAvailableSlotsScreen = () => {
  const [selected, setSelected] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { therapist } = route.params as { therapist: any };

  return (
    <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>{'<'} Back</Text>
        </TouchableOpacity>
        <View style={styles.doctorCard}>
          <Image source={{ uri: therapist.image }} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={styles.category}>{therapist.category}</Text>
            <Text style={styles.name}>{therapist.name}</Text>
            <View style={styles.idRow}>
              <Text style={styles.idText}>ID: {therapist.id}</Text>
            </View>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <Text style={styles.ratingStar}>★</Text>
          <Text style={styles.ratingText}>Rating {therapist.rating}</Text>
        </View>
        <Text style={styles.monthLabel}>January 2025</Text>
        <View style={styles.calendarContainer}>
          <FlatList
            data={weekDates}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.key}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[styles.dateItem, selected === index && styles.selectedDate]}
                onPress={() => setSelected(index)}
              >
                <Text style={[styles.day, selected === index && styles.selectedDay]}>{item.day}</Text>
                <Text style={[styles.date, selected === index && styles.selectedDateText]}>{item.date}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.availabilityCard}>
          <View style={styles.availHeaderRow}>
            <Text style={styles.availHeader}>Today, Availability</Text>
            <Text style={styles.stats}>6 Stats</Text>
          </View>
          <View style={styles.slotRowWrap}>
            {slots.flat().map((slot, idx) => (
              <TouchableOpacity
                key={slot}
                style={[styles.slotBtn, selectedSlot === slot && styles.selectedSlotBtn]}
                onPress={() => setSelectedSlot(slot)}
              >
                <Text style={[styles.slotText, selectedSlot === slot && styles.selectedSlotText]}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookBtnText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#d7f5f0',
  },
  container: {
    flex: 1,
    backgroundColor: '#d7f5f0',
    padding: 0,
    alignItems: 'center',
    minHeight: 700,
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
    color: '#222',
    fontWeight: 'bold',
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 18,
    marginTop: 85,
    marginBottom: 18,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 18,
    backgroundColor: '#d7f5f0',
  },
  category: {
    color: '#47978d',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  name: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  idRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idText: {
    backgroundColor: '#d7f5f0',
    color: '#222',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#47978d',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginBottom: 18,
  },
  ratingStar: {
    color: '#fff',
    fontSize: 18,
    marginRight: 6,
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  monthLabel: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
    alignSelf: 'center',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
    width: '90%',
    marginBottom: 18,
  },
  dateItem: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginHorizontal: 2,
    backgroundColor: '#d7f5f0',
  },
  selectedDate: {
    backgroundColor: '#47978d',
  },
  day: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  date: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 20,
  },
  selectedDay: {
    color: '#fff',
  },
  selectedDateText: {
    color: '#fff',
  },
  month: {
    color: '#222',
    fontSize: 13,
  },
  availabilityCard: {
    backgroundColor: '#f3f7f6',
    borderRadius: 18,
    padding: 18,
    width: '90%',
    marginTop: 8,
    marginBottom: 18,
  },
  availHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  availHeader: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stats: {
    color: '#666',
    fontSize: 13,
  },
  slotRowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 4,
  },
  slotBtn: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 8,
    margin: 4,
  },
  selectedSlotBtn: {
    backgroundColor: '#47978d',
  },
  slotText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
  },
  selectedSlotText: {
    color: '#fff',
  },
  bookBtn: {
    backgroundColor: '#47978d',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  bookBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ViewAvailableSlotsScreen;
