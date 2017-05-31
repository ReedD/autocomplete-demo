import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions';
const AutocompletePresenter = require('react-autocomplete');

export let styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default',
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'default',
  },

  menu: {
    border: 'solid 1px #ccc',
  },
};

function mapStateToProps(state: any) {
  const { items, value } = state.autoComplete;
  return {
    getItemValue: (item: any) => item.name,
    inputProps: {id: 'states-autocomplete', name: 'US state'},
    renderItem: (item: any, isHighlighted: boolean) => (
      <div
        style={isHighlighted ? styles.highlightedItem : styles.item}
        key={item.abbr}
        id={item.abbr}>
        {item.name}
      </div>
    ),
    value,
    items,
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    onChange: bindActionCreators(actions.query, dispatch),
    onSelect: bindActionCreators(actions.save, dispatch),
  };
}

export const Autocomplete = connect(mapStateToProps, mapDispatchToProps)(AutocompletePresenter);
