import 'rxjs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import { Autocomplete } from './components/autoComplete';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Autocomplete />
  </Provider>,
  document.getElementById('app'),
);
