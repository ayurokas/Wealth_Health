// Import statements
import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import '../css/datepicker.css';


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

export default CalendarDatepicker;