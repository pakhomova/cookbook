import * as actionTypes from '../constants/actions/recipes';
import IRecipeWithLastVersion from '../abstraction/common/IRecipeWithLastVersion';
import axios from 'axios';
import {RecipeFromGet, mapRecipesToRecipesWithLastVersions} from '../helpers/server';

const recipesAreLoading = () => ({
    type: actionTypes.RECIPES_ARE_LOADING
  });
  
  const recipesHaveErrored = () => ({
    type: actionTypes.RECIPES_HAVE_ERRORED
  });
  
  const recipesGetSuccess = (value: IRecipeWithLastVersion[]) => ({
    type: actionTypes.RECIPES_GET_SUCCESS,
    recipes: value
  });

  export const getRecipes = (url: string) => {
    return async (dispatch: any) => {
      dispatch(recipesAreLoading());

      try {
        const recipes: RecipeFromGet[] = await axios.get(url);
        dispatch(recipesGetSuccess(
          mapRecipesToRecipesWithLastVersions(recipes)
          ));
      } catch(error) {
        dispatch(recipesHaveErrored());
      }
    };
  }