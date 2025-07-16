import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import theme from '../../styles/theme';

const getWeekDates = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const week = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    week.push({
      key: i.toString(),
      day: days[date.getDay()],
      date: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      full: date,
    });
  }
  return week;
};

const weekDates = getWeekDates();

const ViewAvailableSlotsScreen = () => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a date for your session</Text>
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
              <Text style={[styles.month, selected === index && styles.selectedDateText]}>{item.month}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_light,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginVertical: 24,
  },
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  dateItem: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginHorizontal: 2,
    backgroundColor: theme.colors.background_light,
  },
  selectedDate: {
    backgroundColor: '#14467C',
  },
  day: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  date: {
    color: theme.colors.text,
    fontWeight: 'bold',
    fontSize: 20,
  },
  month: {
    color: theme.colors.text,
    fontSize: 13,
  },
  selectedDay: {
    color: '#fff',
  },
  selectedDateText: {
    color: '#fff',
  },
});

export default ViewAvailableSlotsScreen;
