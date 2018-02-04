import React from 'react';
import renderer from 'react-test-renderer';
import Product from '../Product';

it('renders correctly', () => {
  const tree = renderer.create(<Product
    id={1}
    name="T-Shirt"
    brand="Brand A"
    color="black"
    size="medium"
    price={123}
    thumbnailUri="images/t-shirt.jpg"
  />).toJSON();
  expect(tree).toMatchSnapshot();
});