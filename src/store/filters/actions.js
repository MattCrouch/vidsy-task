export function setFilter(type, field, value) {
  return (dispatch) => {
    if (value === false) {
      return dispatch({
        type: 'REMOVE_FILTER',
        payload: {
          type,
          field
        }
      });
    }

    return dispatch({
      type: 'ADD_FILTER',
      payload: {
        type,
        field
      }
    });
  }
}

export function setMinPrice(value) {
  return (dispatch) => {
    return dispatch({
      type: 'SET_MIN_PRICE',
      payload: {
        value: parseFloat(value) * 100,
      }
    });
  }
}

export function setMaxPrice(value) {
  return (dispatch) => {
    return dispatch({
      type: 'SET_MAX_PRICE',
      payload: {
        value: parseFloat(value) * 100,
      }
    });
  }
}