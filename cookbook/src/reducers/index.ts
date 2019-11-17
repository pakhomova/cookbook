import { combineReducers } from 'redux';
import recipes from './recipes';
import versions from './versions';
import edit from './edit';

export const rootReducer = combineReducers({
  recipes,
  versions,
  edit
});
