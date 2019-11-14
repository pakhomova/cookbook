import IRecipesState from '../abstraction/reducers/recipes/IRecipesState';
import IRecipesAction from '../abstraction/actions/recipes/IRecipesAction';
import * as actionTypes from '../constants/actions/recipes';

const initialState: IRecipesState = {
    recipes: [],
    isLoading: false,
    hasErrored: false
};

export default function recipes(state = initialState, action: IRecipesAction) {
  switch (action.type) {
    case actionTypes.RECIPES_ARE_LOADING: {
      return {
        recipes: [],
        isLoading: true,
        hasErrored: false
      };
    }
    case actionTypes.RECIPES_HAVE_ERRORED: {
      return {
        ...state,
        hasErrored: true,
        isLoading: false
      };
    }
    case actionTypes.RECIPES_GET_SUCCESS: {
      return {
        ...state,
        recipes: action.recipes,
        isLoading: false
      };
    }
    default:
      return state;
  }
}