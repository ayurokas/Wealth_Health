import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListEmployee from './Pages/EmployeList';
import CreateEmployee from './Pages/Home';


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<CreateEmployee />} />
      <Route exact path='/listEmployee' element={<ListEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;