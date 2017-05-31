import * as actionTypes from '../constants/actionTypes';

const initialState = {
  items: [],
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.SAVE:
      return save(state, action);
    case actionTypes.SAVE_RESULT:
      return saveResult(state, action);
  }
  return state;
}

function save(state: any, action: any) {
  const { item } = action;
  const { items } = state;
  for (const existing of items) {
    if (existing.abbr === item.abbr) {
      return state;
    }
  }
  return {...state, items: [...items, {
    ...item,
    saving: true,
  }]};
}

function saveResult(state: any, action: any) {
  const { item } = action;
  const { items } = state;
  return {...state, items: items.map((existing: any) => {
    if (existing.abbr === item.abbr) {
      return item;
    }
    return existing;
  })};
}
