import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BEARER_KEY } from "../../utils/constants";
import { storageKeys } from "../../utils/storageKeys";


const AUTHORIZATION_KEY = 'Authorization';
const API_KEY = 'SECRET_KEY';
export const INJECT_TOKEN = { Authorization: BEARER_KEY };

export const baseQuery = fetchBaseQuery({
  // Injecting the token into headers
  prepareHeaders: async (headers) => {
    try {
      const token = await AsyncStorage.getItem(storageKeys.ACCESS_TOKEN);
      headers.set(API_KEY, 'just_for_pm');
      if (token) {
        // Remove any extra quotes
        headers.set(AUTHORIZATION_KEY, `Bearer ${token.replace(/"/g, '')}`); 
      }
    } catch (error) {
      console.error('Error fetching token:', error);
    }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});