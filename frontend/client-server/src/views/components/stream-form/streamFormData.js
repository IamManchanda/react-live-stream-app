import uuid from 'uuid';

import FormInputText from '../form-input/text';
import FormInputTextarea from '../form-input/textarea';

const streamFormData = [
  {
    name: "title",
    errorContent: "You must enter a Title",
    component: FormInputText,
    ownProps: {
      label: "Enter Title",
      placeholder: "Enter your Title",
    },
  },
  {
    name: "description",
    errorContent: "You must enter a Description",
    component: FormInputTextarea,
    ownProps: {
      label: "Enter Description",
      placeholder: "Enter your Description",
    },
  },
];

streamFormData.forEach(function iterateStreamFormData(item) {
  item.uuid = uuid.v4();
});

export default streamFormData;
