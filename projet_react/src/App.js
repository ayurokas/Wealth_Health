import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const CreateEmployee = lazy(() => import('./Pages/Home'));
const ListEmployee = lazy(() => import('./Pages/EmployeList'));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Suspense fallback={<div>Loading...</div>}><CreateEmployee /></Suspense>} />
        <Route exact path='/listEmployee' element={<Suspense fallback={<div>Loading...</div>}><ListEmployee /></Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;
