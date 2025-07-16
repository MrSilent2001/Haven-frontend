import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import theme from '../../styles/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAMES } from '../../constants';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      setError('');
      navigation.navigate('Dashboard' as any);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image source={require('../../../assets/login.png')} style={styles.image} resizeMode="contain" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={theme.colors.secondary_text}
          value={username}
          onChangeText={setUsername}
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
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.REGISTER as any)}>
        <Text style={styles.linkText}>Don't you have an Account ?</Text>
      </TouchableOpacity>
      <LinearGradient
        colors={['#F9CC48', '#D0A012']}
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity style={styles.buttonTouchable} onPress={handleLogin}>
          <Text style={styles.buttonText}>Let's Go...</Text>
        </TouchableOpacity>
      </LinearGradient>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  image: {
    width: 180,
    height: 140,
    marginBottom: 32,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 44,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: theme.colors.inputfield_background,
    paddingHorizontal: 12,
    marginBottom: 12,
    color: theme.colors.text,
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
    // For gradient, you can use a LinearGradient component if available
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
  linkText: {
    color: theme.colors.secondary_text_dark,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  forgotText: {
    color: theme.colors.link_text,
    marginTop: 8,
    textAlign: 'center',
  },
  errorText: {
    color: theme.colors.warning_text,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default LoginScreen;
