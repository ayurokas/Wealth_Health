import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import '../css/datepicker.css';
import PropTypes from 'prop-types';


/**
 * Composant React pour afficher un sélecteur de date.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Date} props.selected - La date sélectionnée.
 * @param {Function} props.onChange - La fonction de rappel appelée lorsqu'une nouvelle date est sélectionnée.
 * @param {string} props.id - L'identifiant de l'élément de formulaire.
 * @param {boolean} props.submitted - Indique si le formulaire a été soumis.
 */

const CalendarDatepicker = ({ selected, onChange, id, submitted }) => {
  const isError = submitted && !selected;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['year', 'month', 'day']}
        openTo="day"
        value={selected}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            error={isError}
            helperText={isError ? 'This field is required' : ''}
            id={id}
            variant="outlined"
          />
        )}
        inputFormat="dd/MM/yyyy"
      />
    </LocalizationProvider>
  );
};

// Validation des types de props avec PropTypes

CalendarDatepicker.propTypes = {
  selected: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  submitted: PropTypes.bool
};

export default CalendarDatepicker;
