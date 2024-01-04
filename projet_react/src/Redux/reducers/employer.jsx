/**
 * Un module Redux qui gère l'état des employés.
 * @module employeeSlice
 */

import { createSlice } from '@reduxjs/toolkit'; 
import employees from "../../Data/data_employe";

/**
 * L'état initial du module.
 * @type {Object}
 * @property {Array} employees - La liste des employés initialisée avec les données importées.
 */

const initialState = {
  employees: employees, 
};

/**
 * Slice Redux pour gérer l'état des employés.
 * @type {Object}
 * @property {string} name - Le nom du slice.
 * @property {Object} initialState - L'état initial du slice.
 * @property {Object} reducers - Les reducers pour gérer l'état.
 */

const empSlice = createSlice({
  name: "employee", 
  initialState,
  reducers: {
    /**
     * Reducer pour ajouter un employé à la liste des employés.
     * @param {Object} state - L'état actuel du slice.
     * @param {Object} action - L'action qui contient les données de l'employé à ajouter.
     * @param {Object} action.payload - Les données de l'employé à ajouter.
     */
    addEmployee: (state, action) => {
      state.employees.push(action.payload); 
    },
  },
});

export const { addEmployee } = empSlice.actions; 
export const employeeTab = (state) => state.employee.employees; 
export default empSlice.reducer; 
