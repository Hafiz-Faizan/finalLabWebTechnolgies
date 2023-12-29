// store.js
import { configureStore } from '@reduxjs/toolkit';

import apiReducer from './apiReducer';
 
export const store = configureStore({
  reducer: {
    
    data: apiReducer,
    
  },
});
