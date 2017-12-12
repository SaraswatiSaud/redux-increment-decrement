import { combineReducers } from 'redux';
import MathReducer from './math-reducer';

const allReducers = combineReducers({
  value: MathReducer,
});
export default allReducers;
