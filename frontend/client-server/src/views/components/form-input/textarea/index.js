import React from 'react';

const FormInputTextarea = ({ input, meta: { touched, error } = {}, label, placeholder }) => 
  <label className={ (touched && error)  ? 'is-invalid-label' : '' }>
    <strong>{ label }</strong>
    <textarea
      className={ (touched && error)  ? 'is-invalid-input' : '' }
      rows="3"
      placeholder={ placeholder } 
      { ...input }
    />
    { (touched && error)  
      ? <span className="form-error is-visible">{ error }</span> 
      : null }
  </label>;

FormInputTextarea.defaultProps = {
  input: null,
  meta: null,
  label: '',
  placeholder: '',
};

export default FormInputTextarea;
