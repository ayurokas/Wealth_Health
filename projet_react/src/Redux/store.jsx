import { configureStore } from '@reduxjs/toolkit';
import empSlice from './reducers/employer';

const store = configureStore({
  reducer: {
    employee: empSlice
  },
  
})
export default store;