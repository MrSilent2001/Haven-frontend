// Application constants

export const APP_CONFIG = {
  API_BASE_URL: 'https://api.example.com',
  APP_NAME: 'Haven',
  VERSION: '1.0.0',
  TIMEOUT: 10000,
};

export const STORAGE_KEYS = {
  USER_TOKEN: '@haven_user_token',
  USER_DATA: '@haven_user_data',
  THEME_PREFERENCE: '@haven_theme',
  SETTINGS: '@haven_settings',
};

export const SCREEN_NAMES = {
  HOME: 'Home',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
  LOGIN: 'Login',
  REGISTER: 'Register',

  EXERCISES: 'Exercises',
  EXERCISES_HOME: 'ExercisesHome',
  GUIDED_MEDITATION: 'GuidedMeditation',
  BREATHING_EXERCISES: 'BreathingExercises',
  BREATHING_SESSION: 'BreathingSession',
  BREATHING_BREATH_COUNT: 'BreathingBreathCount',

  DASHBOARD: 'Dashboard',

} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE: '/user/update',
  },
};

export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
}; 