import { createSlice } from '@reduxjs/toolkit'; 
import employees from "../../Data/data_employe";

const initialState = {
  employees: employees, // Initialisation de l'état avec les données importées
};

const empSlice = createSlice({
  name: "employee", 
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      // Reducer pour ajouter un employé à la liste
      state.employees.push(action.payload); // Ajoute l'employé à la liste d'employés dans l'état
    },
  },
});

export const { addEmployee } = empSlice.actions; 
export const employeeTab = (state) => state.employee.employees; 
export default empSlice.reducer; 
