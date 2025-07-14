// Store and State Management types

export interface AppState {
  theme: ThemeMode;
  language: string;
  notifications: NotificationSettings;
  preferences: UserPreferences;
  connectivity: ConnectivityState;
}

export type ThemeMode = 'light' | 'dark' | 'system';

export interface NotificationSettings {
  enabled: boolean;
  push: boolean;
  email: boolean;
  sms: boolean;
  marketing: boolean;
  updates: boolean;
}

export interface UserPreferences {
  currency: string;
  timezone: string;
  dateFormat: string;
  language: string;
  autoSave: boolean;
  biometricAuth: boolean;
}

export interface ConnectivityState {
  isConnected: boolean;
  isInternetReachable: boolean;
  type: 'wifi' | 'cellular' | 'none' | 'unknown';
}

// Redux-style action types
export type AppAction = 
  | { type: 'SET_THEME'; payload: ThemeMode }
  | { type: 'SET_LANGUAGE'; payload: string }
  | { type: 'UPDATE_NOTIFICATIONS'; payload: Partial<NotificationSettings> }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserPreferences> }
  | { type: 'SET_CONNECTIVITY'; payload: ConnectivityState }
  | { type: 'RESET_STATE' };

// Context state types
export interface GlobalState {
  app: AppState;
  auth: import('../auth').AuthState;
  ui: UIState;
}

export interface UIState {
  loading: boolean;
  error: string | null;
  toast: ToastState | null;
  modal: ModalState | null;
}

export interface ToastState {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  visible: boolean;
}

export interface ModalState {
  id: string;
  type: string;
  props: any;
  visible: boolean;
}

// Async state wrapper
export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  lastFetch?: number;
}

// Cache types
export interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiry?: number;
}

export interface CacheState {
  [key: string]: CacheItem<any>;
}

// Store configuration
export interface StoreConfig {
  persistConfig?: {
    key: string;
    storage: any;
    whitelist?: string[];
    blacklist?: string[];
  };
  middleware?: any[];
  devTools?: boolean;
} 