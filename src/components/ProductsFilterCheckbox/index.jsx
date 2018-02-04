import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function ProductsFilterCheckbox(props) {
  return (
    <label className="productsFilterCheckbox">
      <input
        type="checkbox"
        checked={props.checked}
        onChange={e => props.onChange(e.target.checked)}
      />
    { props.name }
  </label>
  );
}


ProductsFilterCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}


export default ProductsFilterCheckbox;