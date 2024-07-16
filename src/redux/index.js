import { combineReducers } from 'redux';
import disasterReducer from './bencanaReducer';

const rootReducer = combineReducers({
  disaster: disasterReducer,
});

export default rootReducer;
