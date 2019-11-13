import { connect } from 'react-redux';
import RecepiesPage from '../../components/recepies/RecepiesPage';
import IApplicationState from '../../abstraction/reducers/IApplicationState';
import {getRecepies} from '../../actions/recepies';

const mapStateToProps = (state: IApplicationState) => (
  {...state.recepies}
  );

const mapDispatchToProps = {
  getRecepies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecepiesPage);