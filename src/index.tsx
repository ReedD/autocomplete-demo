import 'rxjs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import { Autocomplete } from './components/autoComplete';
import { ItemList } from './components/itemList';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Autocomplete />
      <ItemList />
    </div>
  </Provider>,
  document.getElementById('app'),
);
