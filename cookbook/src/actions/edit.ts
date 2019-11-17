import * as actionTypes from '../constants/actions/edit';
import axios from 'axios';
import { DescriptionToPost } from '../helpers/server';

const versionIsSubmitting = () => ({
  type: actionTypes.VERSION_IS_SUBMITTING
});

const submittingHasErrored = () => ({
  type: actionTypes.SUBMITTING_HAS_ERRORED
});

const submittingPostSuccess = () => ({
  type: actionTypes.SUBMITTING_POST_SUCCESS
});

export const postVersion = (url: string, description: DescriptionToPost) => {
  return async (dispatch: any) => {
    dispatch(versionIsSubmitting());

    try {
      await axios.post(url, description);
      dispatch(submittingPostSuccess());
    } catch (error) {
      dispatch(submittingHasErrored());
    }
  };
};

export const editPageMounted = () => ({
  type: actionTypes.EDIT_PAGE_MOUNTED
});
