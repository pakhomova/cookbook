import IRecepiesState from '../abstraction/reducers/recepies/IRecepiesState';
import IRecepiesAction from '../abstraction/actions/recepies/IRecepiesAction';

const initialState: IRecepiesState = {
    recepies: [],
    isLoading: false,
    hasErrored: false
};

export default function recepies(state = initialState, action: IRecepiesAction) {
  switch (action.type) {
    default:
      return state;
  }
}