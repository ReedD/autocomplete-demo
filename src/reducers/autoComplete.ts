import * as actionTypes from '../constants/actionTypes';

const initialState = {
  items: [],
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.QUERY:
      return setValue(state, action);
    case actionTypes.SET_ITEMS:
      return setItems(state, action);
    case actionTypes.SAVE:
      return saveItem(state, action);
  }
  return state;
}

function setItems(state: any, action: any) {
  const { items } = action;
  return { ...state, items };
}

function setValue(state: any, action: any) {
  const { value } = action;
  return { ...state, value };
}

function saveItem(state: any, action: any) {
  const value = '';
  return { ...state, value };
}
