import { combineReducers } from 'redux';
import reducer from './reducer';
import themeReducer from './themeReducer';

export default combineReducers({
  reducer,
  themeReducer
})