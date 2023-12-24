import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  employees:[],
}

const empSlice = createSlice({
  name: "employee",
  initialState,
  reducers:{
    addEmployee :(state, action) => { 
      state.employees.push(action.payload)
    }
  }
})

export const {addEmployee} = empSlice.actions;
export const employeeTab = state=>state.employee.employees
export default empSlice.reducer; 