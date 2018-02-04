import axios from 'axios';

export function fetchProducts() {
  return (dispatch, getState) => {
    dispatch({
      type: 'PRODUCTS_FETCH_START',
    });

    return axios.get('data/prodcts.json')
      .then(response => response.data)
      .then(products => {
        dispatch({
          type: 'PRODUCTS_FETCH_SUCCESS',
        });

        dispatch({
          type: 'ADD_PRODUCTS',
          payload: products,
        });
      })
      .catch(err => {
        dispatch({
          type: 'PRODUCTS_FETCH_FAILURE',
        });
      });
  }
}