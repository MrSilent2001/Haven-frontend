import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import theme from '../../styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAMES } from '../../constants';
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigation();

  const handleRegister = () => {
    // Dummy register logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Sign Up</Text>
      <Image source={require('../../../assets/login.png')} style={styles.image} resizeMode="contain" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={theme.colors.secondary_text}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor={theme.colors.secondary_text}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Tel. No"
          placeholderTextColor={theme.colors.secondary_text}
          value={tel}
          onChangeText={setTel}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          placeholderTextColor={theme.colors.secondary_text}
          value={city}
          onChangeText={setCity}
        />
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={theme.colors.secondary_text}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Text>{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor={theme.colors.secondary_text}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
            <Text>{showConfirmPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Get -In!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.LOGIN as any)}>
        <Text style={styles.loginText}>Already have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.colors.background_light,
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: 220,
    height: 180,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: theme.colors.border_light,
    borderRadius: 8,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 44,
    borderColor: theme.colors.border_light,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 12,
    marginBottom: 12,
    color: '#222222',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 10,
  },
  button: {
    width: '100%',
    height: 44,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    backgroundColor: theme.colors.btn,
  },
  buttonTouchable: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.btn_text,
    fontWeight: 'bold',
    fontSize: 18,
  },
  loginText: {
    color: theme.colors.background,
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default RegisterScreen;
