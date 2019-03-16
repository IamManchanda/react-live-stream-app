import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = class extends Component {
  render() {
    return (
      <form>
        {/* <Field name="title" />
        <Field name="description" /> */}
      </form>
    );
  }
};

export default reduxForm({
  form: 'create a stream',
})(StreamCreate);
