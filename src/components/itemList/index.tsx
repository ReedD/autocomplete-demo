import * as React from 'react';
import { connect } from 'react-redux';
import { ItemList as Presenter } from './presenter';

function mapStateToProps(state: any) {
  const { items } = state.itemList;
  return {
    items,
  };
}

function mapDispatchToProps() {
  return {};
}

export const ItemList = connect(mapStateToProps, mapDispatchToProps)(Presenter);
