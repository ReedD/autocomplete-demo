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
