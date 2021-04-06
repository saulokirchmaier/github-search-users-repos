import { combineReducers } from 'redux';
import githubSearch from './githubSearch';

const rootReducer = combineReducers({
  githubSearch,
});

export default rootReducer;
