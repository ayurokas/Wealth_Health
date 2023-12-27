import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.webp';
const Form = React.lazy(() => import('../Composant/CreateEmploye')); 

export default function CreateEmployee() {
  return (
    <>
      <header className="main-header">
      <img src={logo} alt="Wealth Health Logo" />
        <div className="title">
          <h1>WEALTH HEALTH</h1>
        </div>
        <Link to="/listEmployee" className="view-employees-link">View Current Employees</Link>
      </header>
      <main>
        <div className="container">
          <h2>HRnet</h2>
          <h3>Create Employee</h3>
            {/* Utilisation de Suspense pour le chargement asynchrone du composant Form */}
          <Suspense fallback={<div>Loading...</div>}>
            <Form />
          </Suspense>
        </div>
      </main>
    </>
  );
}
