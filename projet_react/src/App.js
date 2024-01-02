import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const CreateEmployee = lazy(() => import('./Pages/Home'));
const ListEmployee = lazy(() => import('./Pages/EmployeList'));
const Error = lazy(() => import('./Pages/error'));

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Suspense fallback={<div>Loading...</div>}><CreateEmployee /></Suspense>} />
        <Route exact path='/listEmployee' element={<Suspense fallback={<div>Loading...</div>}><ListEmployee /></Suspense>} />
        <Route path='*' element={<Suspense fallback={<div>Loading...</div>}><Error /></Suspense>} /> {/* Route pour la page d'erreur */}
      </Routes>
    </Router>
  );
}

export default App;
