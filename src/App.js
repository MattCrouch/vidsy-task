import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsFilter from './components/ProductsFilter';
import ProductsList from './components/ProductsList';

import { getProducts } from './store/products/reducer';
import { fetchProducts } from './store/products/actions';
import { getFilters } from './store/filters/reducer';
import { setFilter, setMinPrice, setMaxPrice } from './store/filters/actions';
import { getProductsFetching, getProductsError } from './store/pages/reducer';


import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <div className="App">
        <ProductsFilter
          filters={this.props.filters}
          setFilter={this.props.setFilter}
          setMinPrice={this.props.setMinPrice}
          setMaxPrice={this.props.setMaxPrice}
        />
        <ProductsList
          products={this.props.products}
          fetching={this.props.productsFetching}
          error={this.props.productsError}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getProducts(state),
  filters: getFilters(state),
  productsFetching: getProductsFetching(state),
  productsError: getProductsError(state),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  setFilter: (type, field, value) => dispatch(setFilter(type, field, value)),
  setMinPrice: (value) => dispatch(setMinPrice(value)),
  setMaxPrice: (value) => dispatch(setMaxPrice(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
