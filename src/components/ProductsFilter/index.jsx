import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import ProductsFilterCheckbox from '../ProductsFilterCheckbox';

import './styles.css';

function ProductsFilter(props) {
  const selected = (type, value) => props.filters.get(type) && props.filters.get(type).contains(value);

  return (
    <aside className="productsFilter">
      <h2>Filter</h2>
      
      <fieldset>
        <legend>Brand</legend>
        <ProductsFilterCheckbox
          type="brand"
          name="Brand A"
          checked={selected('brand', 'Brand A')}
          onChange={checked => props.setFilter('brand', 'Brand A', checked)}
        />

        <ProductsFilterCheckbox
          type="brand"
          name="Brand B"
          checked={selected('brand', 'Brand B')}
          onChange={checked => props.setFilter('brand', 'Brand B', checked)}
        />

        <ProductsFilterCheckbox
          type="brand"
          name="Brand C"
          checked={selected('brand', 'Brand C')}
          onChange={checked => props.setFilter('brand', 'Brand C', checked)}
        />
      </fieldset>

      <fieldset>
        <legend>Size</legend>

        <ProductsFilterCheckbox
          type="size"
          name="x-small"
          checked={selected('size', 'x-small')}
          onChange={checked => props.setFilter('size', 'x-small', checked)}
        />

        <ProductsFilterCheckbox
          type="size"
          name="small"
          checked={selected('size', 'small')}
          onChange={checked => props.setFilter('size', 'small', checked)}
        />

        <ProductsFilterCheckbox
          type="size"
          name="medium"
          checked={selected('size', 'medium')}
          onChange={checked => props.setFilter('size', 'medium', checked)}
        />

        <ProductsFilterCheckbox
          type="size"
          name="large"
          checked={selected('size', 'large')}
          onChange={checked => props.setFilter('size', 'large', checked)}
        />

        <ProductsFilterCheckbox
          type="size"
          name="x-large"
          checked={selected('size', 'x-large')}
          onChange={checked => props.setFilter('size', 'x-large', checked)}
        />
      </fieldset>

      <fieldset>
        <legend>Colour</legend>

        <ProductsFilterCheckbox
          type="color"
          name="black"
          checked={selected('color', 'black')}
          onChange={checked => props.setFilter('color', 'black', checked)}
        />

        <ProductsFilterCheckbox
          type="color"
          name="white"
          checked={selected('color', 'white')}
          onChange={checked => props.setFilter('color', 'white', checked)}
        />

        <ProductsFilterCheckbox
          type="color"
          name="red"
          checked={selected('color', 'red')}
          onChange={checked => props.setFilter('color', 'red', checked)}
        />

        <ProductsFilterCheckbox
          type="color"
          name="blue"
          checked={selected('color', 'blue')}
          onChange={checked => props.setFilter('color', 'blue', checked)}
        />

        <ProductsFilterCheckbox
          type="color"
          name="green"
          checked={selected('color', 'green')}
          onChange={checked => props.setFilter('color', 'green', checked)}
        />
      </fieldset>

      <fieldset>
        <legend>Price</legend>
        <label className="productsFilterPrice">
          Min &pound;
          <input
            className="productsFilterPrice__min"
            type="number"
            min="0"
            max="100"
            step="0.01"
            value={props.filters.get('price').get('min') / 100} onChange={e => props.setMinPrice(e.target.value)}
          />
        </label>
        <label className="productsFilterPrice">
          Max &pound;
          <input
            className="productsFilterPrice__max"
            type="number"
            min="0"
            max="100"
            step="0.01"
            value={props.filters.get('price').get('max') / 100} onChange={e => props.setMaxPrice(e.target.value)}
          />
        </label>
      </fieldset>
    </aside>
  );
}

ProductsFilter.propTypes = {
  filters: ImmutablePropTypes.mapContains({
    color: ImmutablePropTypes.listOf(PropTypes.string),
    size: ImmutablePropTypes.listOf(PropTypes.string),
    brand: ImmutablePropTypes.listOf(PropTypes.string),
    price: ImmutablePropTypes.mapContains({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
  }).isRequired,
  setFilter: PropTypes.func.isRequired,
  setMinPrice: PropTypes.func.isRequired,
  setMaxPrice: PropTypes.func.isRequired,
}

export default ProductsFilter;