import { connect } from 'react-redux';
import RecipesPage from '../../components/recipes/RecipesPage';
import IApplicationState from '../../abstraction/reducers/IApplicationState';
import { getRecipes } from '../../actions/recipes';

const mapStateToProps = (state: IApplicationState) => ({ ...state.recipes });

const mapDispatchToProps = {
  getRecipes
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
