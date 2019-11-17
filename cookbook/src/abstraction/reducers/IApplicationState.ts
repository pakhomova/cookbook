import IRecipesState from './recipes/IRecipesState';
import IVersionsState from './versions/IVersionsState';
import IEditState from './edit/IEditState';

export default interface IApplicationState {
  recipes: IRecipesState;
  versions: IVersionsState;
  edit: IEditState;
}
