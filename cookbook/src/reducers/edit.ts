import IEditState from '../abstraction/reducers/edit/IEditState';
import IEditAction from '../abstraction/actions/edit/IEditAction';
import * as actionTypes from '../constants/actions/edit';

const initialState: IEditState = {
    isSubmitting: false,
    hasErrored: false,
    submittingSuccess: false
};

export default function edit(state = initialState, action: IEditAction) {
  switch (action.type) {
    case actionTypes.EDIT_PAGE_MOUNTED: {
      return {
        isSubmitting: false,
        hasErrored: false,
        submittingSuccess: false
      };
    }
    case actionTypes.VERSION_IS_SUBMITTING: {
      return {
        ...state,
        isSubmitting: true
      };
    }
    case actionTypes.SUBMITTING_HAS_ERRORED: {
      return {
        ...state,
        hasErrored: true,
        isSubmitting: false
      };
    }
    case actionTypes.SUBMITTING_POST_SUCCESS: {
        return {
          ...state,
          submittingSuccess: true,
          isSubmitting: false
        };
      }
    default:
      return state;
  }
}