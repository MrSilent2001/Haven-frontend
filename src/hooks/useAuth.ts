import { useState, useEffect } from 'react';
import { ApiService, StorageService } from '../services';
import { User } from '../types';

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id'>) => Promise<boolean>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuth = (): AuthState & AuthActions => {
  const [state, setState] = useState<AuthState>({
    user: null,
    token: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const token = await StorageService.getUserToken();
      const userData = await StorageService.getUserData();

      if (token && userData) {
        setState(prev => ({
          ...prev,
          user: userData,
          token,
          loading: false,
        }));
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to initialize authentication',
      }));
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await ApiService.login(email, password);

      if (response.status === 'success') {
        const { token, user } = response.data;
        
        await StorageService.setUserToken(token);
        await StorageService.setUserData(user);

        setState(prev => ({
          ...prev,
          user,
          token,
          loading: false,
        }));

        return true;
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Login failed',
        }));
        return false;
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Login failed',
      }));
      return false;
    }
  };

  const register = async (userData: Omit<User, 'id'>): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await ApiService.register(userData);

      if (response.status === 'success') {
        const { token, user } = response.data;
        
        await StorageService.setUserToken(token);
        await StorageService.setUserData(user);

        setState(prev => ({
          ...prev,
          user,
          token,
          loading: false,
        }));

        return true;
      } else {
        setState(prev => ({
          ...prev,
          loading: false,
          error: response.message || 'Registration failed',
        }));
        return false;
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Registration failed',
      }));
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    await StorageService.removeUserToken();
    await StorageService.removeUserData();

    setState({
      user: null,
      token: null,
      loading: false,
      error: null,
    });
  };

  const clearError = () => {
    setState(prev => ({ ...prev, error: null }));
  };

  return {
    ...state,
    login,
    register,
    logout,
    clearError,
  };
}; 