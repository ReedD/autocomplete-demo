import * as actionTypes from '../constants/actionTypes';
import { Observable } from 'rxjs';
import { Epic } from 'redux-observable';
import { fakeRequest } from '../mocks/stateService';
import 'rxjs/add/observable/dom/ajax';

export function query(event: Event, value: string) {
  return {
    type: actionTypes.QUERY,
    value,
  };
}

function setItems(response: any) {
  return {
    type: actionTypes.SET_ITEMS,
    items: response,
  };
}

export function save(value: string, item: any) {
  return {
    type: actionTypes.SAVE,
    value,
  };
}

function savedResult(response: any) {
  return {
    type: actionTypes.SAVE_RESULT,
    response,
  };
}

export const queryEpic: Epic<any, any> = (action$) =>
  action$.ofType(actionTypes.QUERY)
    .mergeMap((action) =>
      fakeRequest(action.value)
        .map((response) => setItems(response)),
    );

export const saveEpic: Epic<any, any> = (action$) =>
  action$.ofType(actionTypes.SAVE)
    .mergeMap((action) =>
      Observable
        .of([
          {id: 1, value: 'apple'},
        ])
        .map((response) => savedResult(response)),
    );
