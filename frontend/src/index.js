import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './views/app';
import reducers from './store/reducers';

const store = createStore(reducers);

render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
