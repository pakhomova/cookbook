import { connect } from 'react-redux';
import EditPage from '../../components/edit/EditPage';
import IApplicationState from '../../abstraction/reducers/IApplicationState';
import {postVersion, editPageMounted} from '../../actions/edit';

const mapStateToProps = (state: IApplicationState) => (
  {
    recipesWithLastVersions: state.recipes.recipes,
    ...state.edit
  }
);

const mapDispatchToProps = {
  postVersion,
  editPageMounted
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPage);
