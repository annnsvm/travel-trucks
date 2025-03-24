import { configureStore } from '@reduxjs/toolkit';
import truckReducer from './trucks/slice'
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const truckPersistConfig = {
  key: 'trucks',
  storage,
  whitelist: ['favoritesTrucks']
}

const persistedTruckReducer = persistReducer(truckPersistConfig, truckReducer)

export const store = configureStore({
  reducer: {
    trucks: persistedTruckReducer,

  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)