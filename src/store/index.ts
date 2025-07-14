// State management setup
// This file can be expanded to include Redux, Zustand, or other state management solutions

interface AppState {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

// Simple state management example using React Context
// For more complex state management, consider using Redux Toolkit or Zustand

const initialState: AppState = {
  theme: 'light',
  language: 'en',
  notifications: true,
};

// Action types
type StateAction = 
  | { type: 'SET_THEME'; payload: 'light' | 'dark' }
  | { type: 'SET_LANGUAGE'; payload: string }
  | { type: 'SET_NOTIFICATIONS'; payload: boolean };

// Reducer function
export const appReducer = (state: AppState, action: StateAction): AppState => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_NOTIFICATIONS':
      return { ...state, notifications: action.payload };
    default:
      return state;
  }
};

export { initialState };
export type { AppState, StateAction };

// Example of how to set up Redux Toolkit (commented out)
/*
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
*/ 