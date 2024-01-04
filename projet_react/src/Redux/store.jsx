import { configureStore } from '@reduxjs/toolkit';
import empSlice from './reducers/employer'; 

/**
 * Configuration du store Redux.
 * @constant {Object} store
 */

const store = configureStore({
  reducer: {
    employee: empSlice, // Utilisation du slice `empSlice` pour gérer l'état des employés
  },
});

export default store; 