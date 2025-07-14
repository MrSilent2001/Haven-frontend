// Common utility types

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    warning: string;
    success: string;
    info: string;
    disabled: string;
    placeholder: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    round: number;
  };
  shadows: {
    sm: any;
    md: any;
    lg: any;
  };
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ID types
export type ID = string | number;
export type UUID = string;

// Date and time types
export type Timestamp = number;
export type DateString = string; // ISO date string
export type TimeString = string; // Time in HH:MM format

// File types
export interface FileUpload {
  uri: string;
  name: string;
  type: string;
  size?: number;
}

export interface ImageFile extends FileUpload {
  width?: number;
  height?: number;
}

// Coordinate types
export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location extends Coordinates {
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

// Environment types
export type Environment = 'development' | 'staging' | 'production';

// Device types
export interface DeviceInfo {
  platform: 'ios' | 'android' | 'web';
  version: string;
  model?: string;
  brand?: string;
  uniqueId?: string;
}

// Generic response wrapper
export interface Result<T, E = Error> {
  success: boolean;
  data?: T;
  error?: E;
}

// Status types
export type Status = 'idle' | 'loading' | 'success' | 'error';
export type ConnectionStatus = 'connected' | 'disconnected' | 'connecting';

// Sort and filter types
export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

export interface FilterOption {
  field: string;
  value: any;
  operator?: 'eq' | 'ne' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'contains';
}

// Validation types
export interface ValidationRule {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: any;
  message: string;
  validator?: (value: any) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Event types
export interface BaseEvent {
  type: string;
  timestamp: number;
  data?: any;
}

export interface UserEvent extends BaseEvent {
  userId: string;
  sessionId?: string;
}

// Config types
export interface AppConfig {
  apiBaseUrl: string;
  timeout: number;
  retryAttempts: number;
  enableLogging: boolean;
  enableAnalytics: boolean;
  environment: Environment;
} 