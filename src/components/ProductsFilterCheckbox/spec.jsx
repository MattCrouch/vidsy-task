import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { List, Map } from 'immutable';
import ProductsFilterCheckbox from './';

const checked = false;
let onChange;
const type = 'brand';
const name = 'Brand A';

beforeEach(() => {
  onChange = spy();
});

it('checks checkbox when checked', () => {
  const wrapper = shallow(<ProductsFilterCheckbox
    checked={false}
    onChange={onChange}
    type={type}
    name={name}
  />);
  
  expect(wrapper.find('input').props().checked).to.equal(false);

  wrapper.setProps({
    checked: true
  });

  expect(wrapper.find('input').props().checked).to.equal(true);  
});

it('fires onChange when checked', () => {
  const wrapper = shallow(<ProductsFilterCheckbox
    checked={checked}
    onChange={onChange}
    type={type}
    name={name}
  />);
  
  wrapper.find('input').simulate('change', {
    target: {
      checked: true
    }
  });
  
  expect(onChange.called).to.equal(true);
});