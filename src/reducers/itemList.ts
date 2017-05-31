import * as actionTypes from '../constants/actionTypes';

const initialState = {
  items: [],
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.SAVE_RESULT:
      return saveItem(state, action);
  }
  return state;
}

function saveItem(state: any, action: any) {
  const { item } = action;
  const { items } = state;
  for (const existing of items) {
    if (existing.abbr === item.abbr) {
      return state;
    }
  }
  return {...state, items: [...items, item]};
}
