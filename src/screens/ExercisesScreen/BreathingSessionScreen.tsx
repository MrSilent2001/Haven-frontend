import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExercisesStackParamList } from '../../types/navigation';
import { SCREEN_NAMES } from '../../constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';

const GREEN = '#47978d';
const { width, height } = Dimensions.get('window');
const IMAGE_SIZE = Math.min(width, height) * 0.6;

const PHASES = ['Breathe In', 'Hold', 'Breathe Out', 'Hold'];

function parsePattern(pattern: string) {
  return pattern.split('-').map(Number);
}

const BreathingSessionScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ExercisesStackParamList>>();
  const route = useRoute<RouteProp<ExercisesStackParamList, 'BreathingSession'>>();
  const { pattern = '4-4-4-4', name = 'Breathing', duration = 60 } = route.params ?? {};
  const durations = parsePattern(pattern);
  const totalPhases = durations.length;
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [timer, setTimer] = useState(durations[0]);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(true);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const soundRef = useRef<Audio.Sound | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      return () => {};
    }, [])
  );

  useEffect(() => {
    if (!running) return;
    let toValue = 1;
    if (phaseIdx === 0) toValue = 1.2;
    else if (phaseIdx === 2) toValue = 0.8;
    else toValue = 1;
    Animated.timing(scaleAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [phaseIdx, running]);

  useEffect(() => {
    if (!running) return;
    if (timer === 0) {
      if (phaseIdx < totalPhases - 1) {
        setPhaseIdx(phaseIdx + 1);
        setTimer(durations[phaseIdx + 1]);
      } else {
        setPhaseIdx(0);
        setTimer(durations[0]);
        setCycle(cycle + 1);
      }
      return;
    }
    const interval = setTimeout(() => {
      setTimer(timer - 1);
      setElapsed(e => e + 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [timer, phaseIdx, running]);

  useEffect(() => {
    if (elapsed >= duration) {
      setRunning(false);
      navigation.navigate(SCREEN_NAMES.EXERCISES_HOME);
    }
  }, [elapsed, duration, navigation]);

  useEffect(() => {
    let isMounted = true;
    async function playSound() {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../../../assets/Sea_waves.mp3'),
          { shouldPlay: true, isLooping: true }
        );
        if (isMounted) {
          soundRef.current = sound;
        }
      } catch (e) {
        console.warn('Failed to play sound', e);
      }
    }
    playSound();
    return () => {
      isMounted = false;
      if (soundRef.current) {
        soundRef.current.stopAsync();
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    if (!running && soundRef.current) {
      soundRef.current.stopAsync();
    }
  }, [running]);

  const renderDots = () => (
    <View style={styles.dotsRow}>
      {Array.from({ length: totalPhases }).map((_, i) => (
        <View
          key={i}
          style={[styles.dot, i === phaseIdx ? styles.dotActive : null]}
        />
      ))}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: GREEN }}>
      <StatusBar style="light" backgroundColor={GREEN} />
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.centered}>
          <Animated.View
            style={{
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
              borderRadius: IMAGE_SIZE / 2,
              overflow: 'hidden',
              transform: [{ scale: scaleAnim }],
              backgroundColor: 'transparent',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.18,
              shadowRadius: 16,
              elevation: 8,
            }}
          >
            <Image source={require('../../../assets/Sea_breathing.png')} style={styles.seaImage} resizeMode="cover" />
          </Animated.View>
        </View>
        <Text style={styles.phase}>{PHASES[phaseIdx]}</Text>
        <Text style={styles.timer}>{timer}s</Text>
        {renderDots()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 24,
    letterSpacing: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  seaImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  phase: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    letterSpacing: 1,
  },
  timer: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#fff',
    marginHorizontal: 6,
    opacity: 0.4,
  },
  dotActive: {
    opacity: 1,
    backgroundColor: '#fff',
  },
});

export default BreathingSessionScreen; 