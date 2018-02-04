import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { List, Map } from 'immutable';
import ProductsList from './';
import Product from '../Product';

const products = List([
  Map({
    "id": 1,
    "name": "X Small Black",
    "brand": "Brand A",
    "color": "black",
    "size": "x-small",
    "price": 1000,
    "thumbnailUri": "/vidsy-logo.jpg"
  }),
  Map({
    "id": 2,
    "name": "X Small Black",
    "brand": "Brand B",
    "color": "white",
    "size": "medium",
    "price": 2000,
    "thumbnailUri": "/vidsy-logo.jpg"
  }),
  Map({
    "id": 3,
    "name": "X Small Black",
    "brand": "Brand C",
    "color": "red",
    "size": "x-large",
    "price": 3000,
    "thumbnailUri": "/vidsy-logo.jpg"
  }),
]);

it('displays notice when no products have been supplied', () => {
  const wrapper = shallow(<ProductsList products={List([])} />);
  
  expect(wrapper.text()).to.equal('There are no products');
});

it('displays all products', () => {
  const wrapper = shallow(<ProductsList products={products} />);
  expect(wrapper.find(Product)).to.have.length(3);
});
