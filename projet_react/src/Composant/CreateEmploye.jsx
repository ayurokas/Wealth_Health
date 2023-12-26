import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import CalendarDatepicker from "../Composant/CustomDatePicker";
import { addEmployee } from "../Redux/reducers/employer";
import '../css/style.css';
import states from "../Data/data_states";
import departments from "../Data/data_departments";
import CustomDropdown from "@ayurokas/dropdown_package"
import Modal from '../Composant/Modal';

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateBirth, setDateBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");
  const [errors, setErrors] = useState({});

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!firstName) {
      isValid = false;
      newErrors.firstName = 'Le prénom est requis.';
    }

    if (!lastName) {
      isValid = false;
      newErrors.lastName = 'Le nom est requis.';
    }

    if (!dateBirth) {
      isValid = false;
      newErrors.dateBirth = 'La date de naissance est requise.';
    }

    if (!startDate) {
      isValid = false;
      newErrors.startDate = 'La date de début est requise.';
    }

    if (!street) {
      isValid = false;
      newErrors.street = 'La rue est requise.';
    }

    if (!city) {
      isValid = false;
      newErrors.city = 'La ville est requise.';
    }

    if (!state) {
      isValid = false;
      newErrors.state = 'L’état est requis.';
    }

    if (!zipCode) {
      isValid = false;
      newErrors.zipCode = 'Le code postal est requis.';
    }

    if (!department) {
      isValid = false;
      newErrors.department = 'Le département est requis.';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const employee = {
        firstName,
        lastName,
        dateBirth: dateBirth ? dateBirth.toLocaleDateString("fr") : "",
        startDate: startDate ? startDate.toLocaleDateString("fr") : "",
        street,
        city,
        state,
        zipCode,
        department,
      };
      dispatch(addEmployee(employee));
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <form action="#" id="create-employee" onSubmit={handleSave}>
        <label>First Name
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </label>
        <label>Last Name
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </label>
        <label>
          Date of Birth
          <CalendarDatepicker
            dateFormat="dd/MM/yyyy"
            selected={dateBirth}
            onChange={(date) => setDateBirth(date)}
            id="dateBirth" 
          />
          {errors.dateBirth && <div className="error">{errors.dateBirth}</div>}
        </label>
        <label>
          Start Date
          <CalendarDatepicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            id="startDate"
          />
          {errors.startDate && <div className="error">{errors.startDate}</div>}
        </label>
        <fieldset className="address">
          <legend>Address</legend>
          <label>Street
            <input type="text" onChange={(e) => setStreet(e.target.value)} />
            {errors.street && <div className="error">{errors.street}</div>}
          </label>
          <label>City
            <input type="text" onChange={(e) => setCity(e.target.value)} />
            {errors.city && <div className="error">{errors.city}</div>}
          </label>
          <label>State
          <CustomDropdown
              options={states.map(el => ({ label: el.name, value: el.value }))}
              onChange={option => setState(option.value)}
              placeholder="Select a state"
            />
            {errors.state && <div className="error">{errors.state}</div>}
          </label>
          <label>Zip Code
            <input type="text" onChange={(e) => setZipCode(e.target.value)} />
            {errors.zipCode && <div className="error">{errors.zipCode}</div>}
          </label>
        </fieldset>
        <label>Department
        <CustomDropdown
            options={departments.map(el => ({ label: el.name, value: el.value }))}
            onChange={option => setDepartment(option.value)}
            placeholder="Select a Department"
          />
          {errors.department && <div className="error">{errors.department}</div>}
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
      <div>Lemployé a été créé avec succès !</div>
    </Modal>
  </div>
);
}
