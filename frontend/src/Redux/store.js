import {configureStore} from "@reduxjs/toolkit"
import hiveReducer from "./hiveSlice"
import { persistStore, persistReducer,FLUSH,REHYDRATE,PAUSE ,PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, hiveReducer)
export const store = configureStore({
    reducer: {
        hive: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        },
    })
})

export const persistor = persistStore(store)