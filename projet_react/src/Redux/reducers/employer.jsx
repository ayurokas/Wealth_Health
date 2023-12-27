import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
  employees: [],
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
