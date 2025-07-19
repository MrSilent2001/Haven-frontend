import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { SCREEN_NAMES } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet, Alert, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

type BreathingExercisesNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CARD_BG = '#d7f5f0';
const BUTTON_BG = '#47978d';

const patterns = [
  {
    key: 'equal',
    name: 'Equal Breathing',
    desc: 'Helps you relax and concentrate.',
    pattern: '4-0-4-0',
    color: CARD_BG,
    image: require('../../../assets/Breathing1.png'),
  },
  {
    key: 'box',
    name: 'Box Breathing',
    desc: 'A calming technique to reduce stress and improve focus.',
    pattern: '4-4-4-4',
    color: CARD_BG,
    image: require('../../../assets/Breathing2.png'),
  },
  {
    key: '478',
    name: '4-7-8 Breathing',
    desc: 'Helps ease anxiety and promotes better sleep.',
    pattern: '4-7-8-0',
    color: CARD_BG,
    image: require('../../../assets/Breathing3.png'),
  },
  {
    key: 'resonant',
    name: 'Resonant Breathing',
    desc: 'Balances your mood and supports emotional regulation.',
    pattern: '5-0-5-0',
    color: CARD_BG,
    image: require('../../../assets/Breathing4.png'),
  },
  {
    key: 'pursed',
    name: 'Pursed Lip Breathing',
    desc: 'Relieves tension and improves breath control.',
    pattern: '2-0-4-0',
    color: CARD_BG,
    image: require('../../../assets/Breathing5.png'),
  },
];

const BreathingExercisesScreen = () => {
  const navigation = useNavigation<BreathingExercisesNavigationProp>();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleStart = (pattern: string, name: string) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.92,
        duration: 120,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
    ]).start(() => {
      navigation.navigate('BreathingBreathCount' as any, { pattern, name });
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar style="auto" />
      <FlatList
        data={patterns}
        keyExtractor={item => item.key}
        ListHeaderComponent={
          <>
            <Text style={styles.topic}>Breathe Your Way to Balance</Text>
          </>
        }
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: CARD_BG }]}>
            <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
              <Text style={styles.patternUnderDesc}>{item.pattern}</Text>
              <View style={styles.cardRow}>
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                  <LinearGradient
                    colors={['#47978d', '#2e6e62']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.startBtnGradient}
                  >
                    <TouchableOpacity
                      style={styles.startBtn}
                      onPress={() => handleStart(item.pattern, item.name)}
                      activeOpacity={0.8}
                    >
                      <Text style={styles.startBtnText} numberOfLines={1} ellipsizeMode="tail">Start Now</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </Animated.View>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 80, paddingHorizontal: 24, paddingTop: 24 }}
        showsVerticalScrollIndicator={true}
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
    marginTop: 8,
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  headerAccent: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4B3CA7',
    letterSpacing: 1,
    textAlign: 'center',
    marginTop: 8,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222',
    marginTop: 2,
    marginBottom: 12,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
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
  cardImage: {
    width: 120,
    height: 120,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  startBtnGradient: {
    borderRadius: 22,
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 6,
  },
  startBtn: {
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  startBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  pattern: {
    fontSize: 18,
    color: '#7A7A7A',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  durationIcon: {
    fontSize: 15,
    marginRight: 4,
    color: '#888',
    marginTop: 2,
  },
  durationText: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  patternUnderDesc: {
    fontSize: 20,
    color: '#47978d',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 2,
  },
});

export default BreathingExercisesScreen; 