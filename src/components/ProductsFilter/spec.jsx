import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { List, Map } from 'immutable';
import ProductsFilter from './';

let filters;
let setFilter;
let setMinPrice;
let setMaxPrice;

beforeEach(() => {
  filters = Map({
    color: List([]),
    size: List([]),
    brand: List([]),
    price: Map({
      min: 1,
      max: 10000
    })
  });

  setFilter = spy();
  setMinPrice = spy();
  setMaxPrice = spy();
});

it('fires setMinPrice when value changes', () => {
  const wrapper = shallow(<ProductsFilter
    filters={filters}
    setFilter={setFilter}
    setMinPrice={setMinPrice}
    setMaxPrice={setMaxPrice}
  />);
  
  wrapper.find('.productsFilterPrice__min').simulate('change', {
    target: {
      value: 1
    }
  });
  
  expect(setMinPrice.called).to.equal(true);
});

it('fires setMaxPrice when value changes', () => {
  const wrapper = shallow(<ProductsFilter
    filters={filters}
    setFilter={setFilter}
    setMinPrice={setMinPrice}
    setMaxPrice={setMaxPrice}
  />);
  
  wrapper.find('.productsFilterPrice__max').simulate('change', {
    target: {
      value: 1
    }
  });
  
  expect(setMaxPrice.called).to.equal(true);
});