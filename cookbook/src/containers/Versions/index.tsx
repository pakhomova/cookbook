import { connect } from 'react-redux';
import VersionsPage from '../../components/versions/VersionsPage';
import IApplicationState from '../../abstraction/reducers/IApplicationState';
import { getVersions } from '../../actions/versions';

const mapStateToProps = (state: IApplicationState) => ({ ...state.versions });

const mapDispatchToProps = {
  getVersions
};

export default connect(mapStateToProps, mapDispatchToProps)(VersionsPage);
