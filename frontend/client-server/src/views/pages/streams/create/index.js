import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { handleCreateStream } from '../../../../store/actions'
import streamCreationData from './streamCreationData';

const validateForm = (formValues) => {
  const errors = {};
  const getErrorContent = (itemName) => 
    streamCreationData.filter(function filterStreamCreationData(item) {
      return item.name === itemName;
    })[0].errorContent;
  if (!formValues.title) errors.title = getErrorContent('title');
  if (!formValues.description) errors.description = getErrorContent('description');
  return errors;
};

const StreamCreate = class extends Component {
  onStreamCreation = (formValues) => {
    const { handleCreateStream } = this.props;
    handleCreateStream(formValues);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onStreamCreation) }>
        { streamCreationData.map(function iterateStreamCreationData(item) {
            const { id, name, component: DynFieldComponent, ownProps = {} } = item;
            return <Field 
              key={ id } name={ name } 
              component={ DynFieldComponent } { ...ownProps } 
            />;
          }) }
        <input type="submit" className="button" value="Submit" />
      </form>
    );
  }
};

StreamCreate.defaultProps = {
  handleSubmit: () => {},
  handleCreateStream: () => {},
};

const StreamCreateWithReduxForm = reduxForm({
  form: 'createStream',
  validate: validateForm,
})(StreamCreate);

export default connect(
  null,
  { handleCreateStream }
)(StreamCreateWithReduxForm);
