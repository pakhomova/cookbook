import IVersionsState from '../abstraction/reducers/versions/IVersionsState';
import IVersionsAction from '../abstraction/actions/versions/IVersionsAction';
import * as actionTypes from '../constants/actions/versions';

const initialState: IVersionsState = {
    versions: [],
    isLoading: false,
    hasErrored: false
};

export default function versions(state = initialState, action: IVersionsAction) {
  switch (action.type) {
    case actionTypes.VERSIONS_ARE_LOADING: {
      return {
        versions: [],
        isLoading: true,
        hasErrored: false
      };
    }
    case actionTypes.VERSIONS_HAVE_ERRORED: {
      return {
        ...state,
        hasErrored: true,
        isLoading: false
      };
    }
    case actionTypes.VERSIONS_GET_SUCCESS: {
      return {
        ...state,
        versions: action.versions,
        isLoading: false
      };
    }
    default:
      return state;
  }
}