import { List, Map } from 'immutable';
import { createSelector } from 'reselect';

const initialState = List([]);

export default function reduce(state = initialState, action = {}) {
  let newState = state;

  switch(action.type) {
    case 'ADD_PRODUCTS':
      newState = List(action.payload.map(product => Map(product)));
      return newState;
    default:
      return newState;
  }
}

// Selectors
const productsSelector = state => state.products;
const filtersSelector = state => state.filters;

export const getProducts = createSelector(
  [productsSelector, filtersSelector],
  (products, filters) => {
    let filteredProducts = products;
    
    if (filters.get('brand') && filters.get('brand').size > 0) {
      filteredProducts = filteredProducts.filter(product => filters.get('brand').contains(product.get('brand')));
    }
    
    if (filters.get('color') && filters.get('color').size > 0) {
      filteredProducts = filteredProducts.filter(product => filters.get('color').contains(product.get('color')));
    }

    if (filters.get('size') && filters.get('size').size > 0) {
      filteredProducts = filteredProducts.filter(product => filters.get('size').contains(product.get('size')));
    }

    if (filters.get('price')) {
      filteredProducts = filteredProducts.filter(product => product.get('price') >= filters.get('price').get('min') && product.get('price') <= filters.get('price').get('max'));
    }

    return filteredProducts;
  },
);