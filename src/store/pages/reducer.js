import { Map } from 'immutable';
import { createSelector } from 'reselect';

const initialState = Map({
  products: Map({
    fetching: false,
    fetched: false,
    error: false,
  })
});

export default function reduce(state = initialState, action = {}) {
  let newState = state;

  switch(action.type) {
    case 'PRODUCTS_FETCH_START':
      newState = newState.setIn(['products', 'fetching'], true);
      newState = newState.setIn(['products', 'fetched'], false);
      newState = newState.setIn(['products', 'error'], false);
      return newState;
    case 'PRODUCTS_FETCH_SUCCESS':
      newState = newState.setIn(['products', 'fetching'], false);
      newState = newState.setIn(['products', 'fetched'], true);
      return newState;
    case 'PRODUCTS_FETCH_FAILURE':
      newState = newState.setIn(['products', 'fetching'], false);
      newState = newState.setIn(['products', 'error'], true);
      return newState;
    default:
      return newState;
  }
}

// Selectors
const pagesSelector = state => state.pages;

export const getProductsFetching = createSelector(
  [pagesSelector],
  (pages) => pages.get('products').get('fetching'),
);

export const getProductsFetched = createSelector(
  [pagesSelector],
  (pages) => pages.get('products').get('fetched'),
);

export const getProductsError = createSelector(
  [pagesSelector],
  (pages) => pages.get('products').get('error'),
);