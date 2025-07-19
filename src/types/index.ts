// Main types barrel export
// Export all types from subdirectories

// API types
export * from './api';

// Authentication types
export * from './auth';

// Navigation types
export * from './navigation';

// UI Component types
export * from './ui';

// Store/State types
export * from './store';

// Common utility types
export * from './common';

// Legacy exports for backward compatibility
// These can be removed after updating all imports
export type { User, AuthState } from './auth';
export type { ApiResponse } from './api';
export type { NavigationProps } from './navigation';
export type { Theme } from './common';
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Exercises: undefined;
  // Add other screens here as needed
}; 