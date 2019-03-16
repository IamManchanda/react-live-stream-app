import uuid from 'uuid';

import FormInputText from '../../../components/form-input/text';
import FormInputTextarea from '../../../components/form-input/textarea';

const streamCreationData = [
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

streamCreationData.forEach(function iterateStreamCreationData(item) {
  item.uuid = uuid.v4();
});

export default streamCreationData;
