import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import streamFormData from './streamFormData';

const validateStreamForm = (formValues) => {
  const errors = {};
  const getErrorContent = (itemName) => 
    streamFormData.filter(function filterStreamFormData(item) {
      return item.name === itemName;
    })[0].errorContent;
  if (!formValues.title) errors.title = getErrorContent('title');
  if (!formValues.description) errors.description = getErrorContent('description');
  return errors;
};

const StreamForm = class extends Component {
  onStreamSubmission = (formValues) => {
    const { handleFormSubmit } = this.props;
    handleFormSubmit(formValues);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onStreamSubmission) }>
        { streamFormData.map(function iterateStreamFormData(item) {
            const { uuid, name, component: DynFieldComponent, ownProps = {} } = item;
            return (
              <Field key={ uuid } name={ name } 
                component={ DynFieldComponent } { ...ownProps } 
              />
            );
          }) }
        <input type="submit" className="button" value="Submit" />
      </form>
    );
  }
};

StreamForm.defaultProps = {
  handleSubmit: () => {},
  handleFormSubmit: () => {},
};

const StreamFormWithReduxForm = reduxForm({
  form: 'streamForm',
  validate: validateStreamForm,
})(StreamForm);

export default StreamFormWithReduxForm;
