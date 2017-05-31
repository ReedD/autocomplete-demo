import { combineReducers } from 'redux';
import autoComplete from './autoComplete';
import itemList from './itemList';

export default combineReducers({
  autoComplete,
  itemList,
});
