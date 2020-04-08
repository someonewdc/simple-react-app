import React from 'react'
import classes from './FormikInput.module.css'
import { Field, ErrorMessage } from 'formik'
import { TextField } from '@material-ui/core';



const FormikInput = ({ label, required, name, type }) => {
  return ( 
    <div className={classes.FormikInput}>
      <Field 
        required={required}
        name={name}
        type={type || 'text'}
        label={label}
        as={TextField}
        fullWidth
        autoComplete="off"
        helperText={required ? <ErrorMessage name={name} /> : ''}
      />
    </div>
  )
}

export default FormikInput
