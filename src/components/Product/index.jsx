import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function Product(props) {
  return (
    <li className="product">
      <img className="product__thumbnail" src={props.thumbnailUri} alt={props.name} />

      <h3 className="product__name">{props.name}</h3>
      <h4 className="product__brand">{props.brand}</h4>
      <span className="product__color">{props.color}</span>
      <span className="product__size">{props.size}</span>
      <span className="product__price">&pound;{props.price / 100}</span>      
    </li>
  );
}


Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnailUri: PropTypes.string.isRequired,
}


export default Product;