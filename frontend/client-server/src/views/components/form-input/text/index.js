import React from 'react';

const FormInputText = ({ input, meta: { touched, error } = {}, label, placeholder }) =>
  <label className={ (touched && error) ? 'is-invalid-label' : '' }>
    <strong>{ label }</strong>
    <input
      className={ (touched && error) ? 'is-invalid-input' : '' }
      type="text"
      placeholder={ placeholder }
      { ...input }
    />
    { (touched && error) 
        ? <span className="form-error is-visible">{ error }</span> 
        : null }
  </label>;

FormInputText.defaultProps = {
  input: null,
  meta: null,
  label: '',
  placeholder: '',
};

export default FormInputText;
