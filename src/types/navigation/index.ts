// Navigation types

export interface NavigationProps {
  navigation: any;
  route: any;
}

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  UserDetail: { userId: string };
  EditProfile: undefined;
  Notifications: undefined;
  About: undefined;
  Dashboard: undefined;
  Exercises: undefined;
  ExercisesHome: undefined;
  BreathingBreathCount: { pattern: string; name: string };
  GuidedMeditation: undefined;
  BreathingExercises: undefined;
  BreathingSession: { pattern: string; name: string; duration?: number };
  SearchTherapists: undefined;
  ViewAvailableSlots: undefined;
  Tabs: undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  ProfileTab: undefined;
  SettingsTab: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  ResetPassword: { token: string };
};

export type MainStackParamList = {
  Tabs: undefined;
  Profile: { userId: string };
  Settings: undefined;
  Notifications: undefined;
};

export type ExercisesStackParamList = {
  ExercisesHome: undefined;
  BreathingExercises: undefined;
  BreathingBreathCount: { pattern: string; name: string };
  BreathingSession: { pattern: string; name: string; duration?: number };
  GuidedMeditation: undefined;
};

// Screen props types
export interface BaseScreenProps<T extends keyof RootStackParamList = keyof RootStackParamList> {
  navigation: any;
  route: {
    params: RootStackParamList[T];
  };
}

export interface HomeScreenProps extends BaseScreenProps<'Home'> {}
export interface ProfileScreenProps extends BaseScreenProps<'Profile'> {}
export interface SettingsScreenProps extends BaseScreenProps<'Settings'> {}
export interface LoginScreenProps extends BaseScreenProps<'Login'> {}
export interface RegisterScreenProps extends BaseScreenProps<'Register'> {}

// Navigation state types
export interface NavigationState {
  key: string;
  index: number;
  routeNames: string[];
  history?: any[];
  routes: Array<{
    key: string;
    name: string;
    params?: any;
  }>;
  type: string;
  stale: boolean;
} 