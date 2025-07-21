import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../../constants';
import { ExercisesStackParamList } from '../../types/navigation';

const GREEN = '#47978d';
const LIGHT_GREEN = '#d7f5f0';
const MENU = '☰'; // Emoji as menu icon

const practices = [
  {
    key: 'guided',
    title: 'Guided Meditation',
    image: require('../../../assets/GuidedMedExcercise.png'),
    highlight: false,
  },
  {
    key: 'breathing',
    title: 'Breathing Exercise',
    image: require('../../../assets/BreathingExcercise.png'),
    highlight: true,
  },
];

const ExercisesScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ExercisesStackParamList>>();
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      <StatusBar style="dark" />
      <Text style={styles.pageTopic}>{"Start your today's\nMindful Choices here !"}</Text>
      <View style={styles.section}>
        <View style={{ gap: 24 }}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.practiceCard}
              onPress={() => navigation.navigate(SCREEN_NAMES.GUIDED_MEDITATION)}
              activeOpacity={0.8}
            >
              <Image source={practices[0].image} style={styles.practiceImage} />
            </TouchableOpacity>
            <Text style={styles.practiceLabel}>{practices[0].title}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={styles.practiceCard}
              onPress={() => navigation.navigate(SCREEN_NAMES.BREATHING_EXERCISES)}
              activeOpacity={0.8}
            >
              <Image source={practices[1].image} style={styles.practiceImage} />
            </TouchableOpacity>
            <Text style={styles.practiceLabel}>{practices[1].title}</Text>
          </View>
        </View>
      </View>

      {/* Weekly Statistics */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Weekly Statistics</Text>
        </View>
        <View style={styles.statsCard}>
          <Text style={styles.statsLabel}>This Week's Minutes</Text>
          <View style={styles.statsRow}>
            <Text style={styles.statsValue}>120</Text>
            <Text style={styles.statsGoal}>min</Text>
          </View>
          {/* Graph placeholder */}
          <View style={styles.graphPlaceholder}>
            <View style={styles.graphLine} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.44;
const CARD_HEIGHT = SCREEN_WIDTH * 0.56;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_GREEN,
    paddingHorizontal: 0,
    paddingTop: 36,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  avatar: {
    fontSize: 38,
    marginRight: 12,
  },
  greeting: {
    fontSize: 18,
    color: '#222',
    fontWeight: '600',
  },
  name: {
    color: GREEN,
    fontWeight: 'bold',
    fontSize: 18,
  },
  question: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  menu: {
    fontSize: 28,
    color: GREEN,
    marginLeft: 12,
  },
  section: {
    marginTop: 18,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  viewAll: {
    color: GREEN,
    fontWeight: '600',
    fontSize: 14,
  },
  practiceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#e6f7f2',
    borderRadius: 28,
    padding: 0,
    marginBottom: 8,
    // borderWidth: 2, // Remove border from card
    // borderColor: GREEN,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    overflow: 'visible',
  },
  practiceCardHighlight: {
    // No longer needed, both cards have the same frame
  },
  practiceSubtitle: {
    fontSize: 18,
    color: GREEN,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  practiceImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 2,
    borderWidth: 2,
    borderColor: GREEN,
    borderRadius: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  practiceLabelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: CARD_WIDTH * 0.65,
    zIndex: 2,
  },
  practiceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  practiceLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    textAlign: 'center',
  },
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginTop: 8,
    borderWidth: 2,
    borderColor: GREEN,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  statsLabel: {
    fontSize: 15,
    color: '#888',
    fontWeight: '600',
    marginBottom: 8,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  statsValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#222',
    marginRight: 4,
  },
  statsGoal: {
    fontSize: 18,
    color: '#888',
    fontWeight: '600',
    marginRight: 8,
  },
  statsChange: {
    fontSize: 14,
    color: '#e74c3c',
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  graphPlaceholder: {
    height: 48,
    backgroundColor: '#e6f7f2',
    borderRadius: 12,
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphLine: {
    width: '90%',
    height: 2,
    backgroundColor: GREEN,
    borderRadius: 1,
  },
  pageTopic: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginTop: 18,
    marginBottom: 8,
    lineHeight: 34,
  },
});

export default ExercisesScreen; 