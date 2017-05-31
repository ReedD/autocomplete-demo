import { combineEpics } from 'redux-observable';
import { query, queryEpic, save, saveEpic } from './auto_complete';

const rootEpic = combineEpics(
  queryEpic,
  saveEpic,
);

export {
  query,
  save,
  rootEpic,
};
