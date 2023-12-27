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
    // Utilisation de useState pour gérer l'état des différents champs du formulaire
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

  // Fonction de validation du formulaire
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;
    // Vérification de chaque champ du formulaire et ajout d'erreurs si nécessaire
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

    // Mise à jour de l'état des erreurs
    setErrors(newErrors);
    return isValid;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Création de l'objet employé à partir des données du formulaire
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
      // Envoi de l'action d'ajout d'employé à Redux
      dispatch(addEmployee(employee));
      setShowModal(true);
    }
  };

  // Fonction de gestion de la fermeture de la modal
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <form action="#" id="create-employee" onSubmit={handleSave}>
        <fieldset className="personal-info">
          <legend>Informations Personnelles</legend>
          <label>Prénom
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
          </label>
          <label>Nom
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </label>
          <label>Date de Naissance
            <CalendarDatepicker
              dateFormat="dd/MM/yyyy"
              selected={dateBirth}
              onChange={(date) => setDateBirth(date)}
              id="dateBirth" 
            />
            {errors.dateBirth && <div className="error">{errors.dateBirth}</div>}
          </label>
        </fieldset>

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
        <fieldset className="employment">
          <legend>Emploi</legend>
          <label>Date de Début
            <CalendarDatepicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              id="startDate"
            />
            {errors.startDate && <div className="error">{errors.startDate}</div>}
          </label>
          <label>Département
            <CustomDropdown
              options={departments.map(el => ({ label: el.name, value: el.value }))}
              onChange={option => setDepartment(option.value)}
              placeholder="Select a Department"
            />
            {errors.department && <div className="error">{errors.department}</div>}
          </label>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <div>Lemployé a été créé avec succès !</div>
      </Modal>
    </div>
  );
}