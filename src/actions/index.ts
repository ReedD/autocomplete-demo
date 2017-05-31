import { combineEpics } from 'redux-observable';
import { query, queryEpic, save, saveEpic } from './autoComplete';

const rootEpic = combineEpics(
  queryEpic,
  saveEpic,
);

export {
  query,
  save,
  rootEpic,
};
