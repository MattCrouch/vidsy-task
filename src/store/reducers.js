import { combineReducers } from 'redux';
import pages from './pages/reducer';
import products from './products/reducer';
import filters from './filters/reducer';

export default combineReducers({
  pages,
  products,
  filters,
});