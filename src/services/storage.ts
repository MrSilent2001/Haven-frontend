import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants';

class StorageService {
  // Generic storage methods
  async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Error setting item to storage:', error);
    }
  }

  async getItem(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Error getting item from storage:', error);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from storage:', error);
    }
  }

  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  }

  // Specific storage methods
  async setUserToken(token: string): Promise<void> {
    await this.setItem(STORAGE_KEYS.USER_TOKEN, token);
  }

  async getUserToken(): Promise<string | null> {
    return await this.getItem(STORAGE_KEYS.USER_TOKEN);
  }

  async removeUserToken(): Promise<void> {
    await this.removeItem(STORAGE_KEYS.USER_TOKEN);
  }

  async setUserData(userData: any): Promise<void> {
    await this.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
  }

  async getUserData(): Promise<any | null> {
    const data = await this.getItem(STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : null;
  }

  async removeUserData(): Promise<void> {
    await this.removeItem(STORAGE_KEYS.USER_DATA);
  }

  async setThemePreference(theme: string): Promise<void> {
    await this.setItem(STORAGE_KEYS.THEME_PREFERENCE, theme);
  }

  async getThemePreference(): Promise<string | null> {
    return await this.getItem(STORAGE_KEYS.THEME_PREFERENCE);
  }
}

export default new StorageService(); 