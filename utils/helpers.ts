import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import RNSInfo from 'react-native-sensitive-info';
import { KEYCHAIN_SERVICE_NAME, SHARED_PREFERANCES_NAME } from './constants';
import { StorageValuesType } from './storageKeys';


/**
 * Tests if the current device os is IOS
 * @returns boolean to tell if the current device is ios
 */
export const isIosDevice = (): boolean => {
    return Platform.OS === 'ios';
  };
  
/**
 * Set an item to async storage
 * @param key - Storage key (From storageKeys util)
 * @param value - The stringified value to store
 */
export const setAsyncStoreItem = async <T extends string | object>(
    key: string,
    value: T
  ): Promise<void> => {
    try {
      const jsonValue = JSON.stringify(value);

       await AsyncStorage.setItem(key, jsonValue);
      
    } catch (e) {
      console.log('error', e);
    }
  };
  
  /**
   * Remove specified item from async storage
   * @param key - Storage key (From storageKeys util)
   */
  export const removeAsyncStoreItem = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log('error', e);
    }
  };
  
  /**
   * Get stored value from async storage using key
   * @returns {Promise<T | null>} - Returns the stored value (parsed as JSON)
   */
  export const getAsyncStoreItem = async <T extends string | object>(
    key: StorageValuesType
  ): Promise<T | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      return null;
    }
  };
  
  /**
   * Set item to secure store (keychain ios or shared pref android)
   * @param key - Storage key (From storageKeys util)
   * @param value - The stringified value to store
   */
  export const setSensitiveInfoStorageItem = async <T extends string | object>(
    key: string,
    value: T
  ): Promise<void> => {
    try {
      const storedValue =
        typeof value === 'string' ? value : JSON.stringify(value);
      await SecureStore.setItemAsync(key, storedValue); // SecureStore method for Expo
    } catch (e) {
      console.log('setSensitiveInfoStorageItem error', e);
    }
  };
  
  /**
   * Get value from secure storage (keychain ios or shared pref android)
   * @param key - Storage key (From storageKeys util)
   * @returns {Promise<T extends string | object>} - Returns the stored value (parsed as JSON)
   */
  export const getSensitiveInfoStorageItem = async (
    key: StorageValuesType
  ): Promise<string | null> => {
    try {
      const value = await RNSInfo.getItem(key, {
        sharedPreferencesName: SHARED_PREFERANCES_NAME,
        keychainService: KEYCHAIN_SERVICE_NAME
      });
      return value || null;
    } catch (e) {
      return null;
    }
  };
  
  /**
   * Remove value from secure storage (keychain ios or shared pref android)
   * @param key - Storage key (From storageKeys util)
   */
  export const removeSensitiveInfoStorageItem = async (
    key: string
  ): Promise<void> => {
    await RNSInfo.deleteItem(key, {
      sharedPreferencesName: SHARED_PREFERANCES_NAME,
      keychainService: KEYCHAIN_SERVICE_NAME
    });
  };
  

  export const upperCaseFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }