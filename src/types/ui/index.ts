// UI Component types

import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
}

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  image?: string;
  onPress?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  imageStyle?: ImageStyle;
}

export interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  animationType?: 'slide' | 'fade' | 'none';
  transparent?: boolean;
  onRequestClose?: () => void;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}

export interface AvatarProps {
  source?: any;
  uri?: string;
  name?: string;
  size?: 'small' | 'medium' | 'large' | number;
  onPress?: () => void;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  textStyle?: TextStyle;
}

export interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  visible: boolean;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
  style?: ViewStyle;
}

export interface LoaderProps {
  visible: boolean;
  text?: string;
  overlay?: boolean;
  color?: string;
  size?: 'small' | 'large';
  style?: ViewStyle;
}

// Form types
export interface FormField {
  name: string;
  value: any;
  error?: string;
  touched?: boolean;
}

export interface FormState {
  [key: string]: FormField;
}

export interface FormErrors {
  [key: string]: string;
}

// List types
export interface ListItem {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
  icon?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export interface ListProps {
  data: ListItem[];
  renderItem?: (item: ListItem, index: number) => React.ReactNode;
  keyExtractor?: (item: ListItem, index: number) => string;
  onRefresh?: () => void;
  refreshing?: boolean;
  loading?: boolean;
  error?: string;
  emptyText?: string;
  style?: ViewStyle;
} 