import * as actionTypes from '../constants/actions/recepies';
import IRecipeWithLastVersion from '../abstraction/common/IRecipeWithLastVersion';

const recepiesAreLoading = () => ({
    type: actionTypes.RECEPIES_ARE_LOADING
  });
  
  const recepiesHaveErrored = () => ({
    type: actionTypes.RECEPIES_HAVE_ERRORED
  });
  
  const recepiesGetSuccess = (value: IRecipeWithLastVersion) => ({
    type: actionTypes.RECEPIES_GET_SUCCESS,
    recepies: value
  });

  export const getRecepies = (url: string) => {
    return (dispatch: any) => {
      dispatch(recepiesAreLoading());
  
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
  
          return response;
        })
        .then(response => response.json())
        .then(recepies => dispatch(recepiesGetSuccess(recepies)))
        .catch(() => dispatch(recepiesHaveErrored()));
    };
  }