import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Product from '../Product';

import './styles.css';

function ProductsList(props) {
  if (!props.products || props.products.size === 0) {
    let message = 'There are no products';

    if (props.error) {
      message = 'Could not load products';
    } else if (props.fetching) {
      message = 'Loading...';
    }

    return (
      <section className="productsList">
        { message }
      </section>
    );
  }

  return (
    <section className="productsList">
      <h2>Products</h2>
      <ul className="productsList__list">
        { props.products.map(product => <Product
          key={product.get('id')}
          id={product.get('id')}
          name={product.get('name')}
          brand={product.get('brand')}
          color={product.get('color')}
          size={product.get('size')}
          price={product.get('price')}
          thumbnailUri={product.get('thumbnailUri')}
        />)}
      </ul>
    </section>
  );
}

ProductsList.propTypes = {
  products: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnailUri: PropTypes.string.isRequired,
  })),
}

export default ProductsList;