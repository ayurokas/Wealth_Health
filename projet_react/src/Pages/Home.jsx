import React from "react";
import { Link } from "react-router-dom";
import Form from "../Composant/CreateEmploye";

export default function CreateEmployee() {
  return (
    <>
      <header className="main-header">
        <div className="title">
          <h1>WEALTH HEALTH</h1>
        </div>
        <Link to="/listEmployee" className="view-employees-link">View Current Employees</Link>      
      </header>
      <main>
        <div className="container">
          <h2>HRnet</h2>
          <h3>Create Employee</h3>
          <Form />
        </div>
      </main>
    </>
  );
}
