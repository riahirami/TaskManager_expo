import { type PersistConfig, persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { type AnyAction, configureStore } from '@reduxjs/toolkit';

import { userAPI } from './api/authApi';
import { taskAPI } from './api/tasksApi';
import globalSlice, {
  type GlobalState
} from './features/global/globalSlice';
import loaderSlice from './features/loader/loaderSlice';

const globalPersistConfig: PersistConfig<GlobalState> = {
  key: 'global',
  storage: AsyncStorage,
  whitelist: ['isUserLoggedIn']
};

const persistedGlobalReducer = persistReducer<GlobalState, AnyAction>(
  globalPersistConfig,
  globalSlice.reducer,
);


/**
 * Creates a store to use in App.tsx redux provider
 */
export const store = configureStore({
  reducer: {
    loader: loaderSlice.reducer,
    global: persistedGlobalReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [taskAPI.reducerPath]: taskAPI.reducer


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat([
      userAPI.middleware,
      taskAPI.middleware
    ]
    )
});

// Export global store state type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
