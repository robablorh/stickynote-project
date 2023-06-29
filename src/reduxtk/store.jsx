import { configureStore } from "@reduxjs/toolkit";
import  stickySlice  from "./slice";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'


const persistConfig = {
  key: "stickyNotes",
  storage
}



const stickyReducer = combineReducers({tasks: stickySlice})

const persistedReducer = persistReducer(persistConfig, stickyReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store)