import { configureStore } from '@reduxjs/toolkit';
import carReducer from './carSlice.js';
import listReducer from './checklistSlice.js'

export const store = configureStore({
  reducer: {
    mycar: carReducer,
    mylist: listReducer,
  },
});

export default store;
