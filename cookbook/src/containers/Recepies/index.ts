import { connect } from 'react-redux';
import RecepiesPage from '../../components/recepies/RecepiesPage';

const mapStateToProps = (state: any) => ({}); // change state type!!

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecepiesPage);