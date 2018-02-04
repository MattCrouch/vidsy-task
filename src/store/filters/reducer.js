import { List, Map } from 'immutable';
import { createSelector } from 'reselect';

const initialState = Map({
  color: List([]),
  size: List([]),
  brand: List([]),
  price: Map({
    min: 1,
    max: 10000,
  })
});

export default function reduce(state = initialState, action = {}) {
  let newState = state;

  switch(action.type) {
    case 'ADD_FILTER':
      newState = newState.updateIn([action.payload.type], filters => filters.push(action.payload.field));
      return newState;
    case 'REMOVE_FILTER':
      newState = newState.updateIn([action.payload.type], filters => filters.filter(filter => filter !== action.payload.field));
      return newState;
    case 'SET_MIN_PRICE':
      newState = newState.setIn(['price', 'min'], action.payload.value);
      return newState;
    case 'SET_MAX_PRICE':
      newState = newState.setIn(['price', 'max'], action.payload.value);
      return newState;
    default:
      return newState;
  }
}

// Selectors
const filtersSelector = state => state.filters;

export const getFilters = createSelector(
  [filtersSelector],
  filters => filters,
);