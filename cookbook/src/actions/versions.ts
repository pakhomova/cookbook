import * as actionTypes from '../constants/actions/versions';
import IVersion from '../abstraction/common/IVersion';
import axios from 'axios';
import { RecipeFromGet, mapRecipesToVersions } from '../helpers/server';

const versionsAreLoading = () => ({
  type: actionTypes.VERSIONS_ARE_LOADING
});

const versionsHaveErrored = () => ({
  type: actionTypes.VERSIONS_HAVE_ERRORED
});

const versionsGetSuccess = (value: IVersion[]) => ({
  type: actionTypes.VERSIONS_GET_SUCCESS,
  versions: value
});

export const getVersions = (url: string) => {
  return async (dispatch: any) => {
    dispatch(versionsAreLoading());

    try {
      const recipes = (await axios.get(url)).data as RecipeFromGet[];
      dispatch(versionsGetSuccess(mapRecipesToVersions(recipes)));
    } catch (error) {
      dispatch(versionsHaveErrored());
    }
  };
};
