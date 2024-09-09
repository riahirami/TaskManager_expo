
import { User } from '../models/User/User';
import {
  getAsyncStoreItem,
  getSensitiveInfoStorageItem,
  isIosDevice,
  removeAsyncStoreItem,
  removeSensitiveInfoStorageItem,
  setAsyncStoreItem
} from './helpers';
import { storageKeys } from './storageKeys';

/**
 * Set access token value (saved in secure storage)
 * @param token - Access token to store in sensitive info
 */
export const setAccessToken = async (token: string): Promise<void> => {
  await setAsyncStoreItem (storageKeys.ACCESS_TOKEN, token);
  // await setSensitiveInfoStorageItem(storageKeys.ACCESS_TOKEN, token);
};


/**
 * Remove access and refresh token if there is no persisted user data and returns access token
 * This function is called on app mount to check if the session present in sensitive info is valid
 * After app uninstall keychain keeps access and refresh tokens => The session keeps alive even after uninstall
 * @returns Returns stored access token in sensitive info
 */
export const getAndCheckAccessToken = async (): Promise<string | null> => {
  // Only needed for ios keychain for android no need for this check
  if (isIosDevice()) {
    const result = await getPersistedUserData();
    // If there is no stored user data remove tokens in keychain IOS
    if (!result) {
      await removeAccessToken();
    }
  }
  return await getAccessToken();
};

/**
 * Get access token from secure storage
 * @returns {Promise<string | null>} - Access token returned from sensitive info
 */
export const getAccessToken = async (): Promise<string | null> => {
  return await getSensitiveInfoStorageItem(storageKeys.ACCESS_TOKEN);
};

/**
 * Remove access token from secure storage
 */
export const removeAccessToken = async (): Promise<void> => {
  await removeSensitiveInfoStorageItem(storageKeys.ACCESS_TOKEN);
};


/**
 * Stores user profile in async storage
 * @param userData - User profile to store
 */
export const persistUserData = async (userData: User): Promise<void> => {
  await setAsyncStoreItem(storageKeys.USER, userData);
};

/**
 *  Retrieve user data from async storage
 * @returns - Returns persisted user data in async storage
 */
export const getPersistedUserData = async (): Promise<User | null> => {
  return await getAsyncStoreItem<User>(storageKeys.USER);
};

/**
 * Remove user data from async storage
 */
export const removePersistedUserData = async (): Promise<void> => {
  await removeAsyncStoreItem(storageKeys.USER);
};
