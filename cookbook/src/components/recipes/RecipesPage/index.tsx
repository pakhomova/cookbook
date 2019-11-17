import React, { Component } from 'react';
import Header from '../../common/Header';
import IRecipeWithLastVersion from '../../../abstraction/common/IRecipeWithLastVersion';
import Recipe from '../Recipe';
import LeftButton from '../../common/buttons/LeftButton';
import LoadingMessage from '../../common/messages/LoadingMessage';
import ErrorMessage from '../../common/messages/ErrorMessage';
import routes from '../../../constants/routes.json';
import { withRouter } from 'react-router-dom';
import IRecipesPageProps from '../../../abstraction/components/recipes/RecipesPage/IRecipesPageProps';
import * as endpoints from '../../../constants/endpoints';

class RecipesPage extends Component<IRecipesPageProps> {
  componentDidMount = () => {
    this.props.getRecipes(endpoints.ALL_RECIPES);
  };

  render() {
    if (this.props.isLoading) return <LoadingMessage />;
    else if (this.props.hasErrored) return <ErrorMessage />;
    return (
      <>
        <Header headerText="Recipes" />
        <LeftButton title="Add recipe" onClick={this.onAddButtonClick} />
        {this.props.recipes.map((recipe: IRecipeWithLastVersion, index: number) => (
          <Recipe key={recipe.id} index={index} id={recipe.id} version={recipe.version} />
        ))}
      </>
    );
  }

  onAddButtonClick = (event: React.MouseEvent) => {
    this.props.history.push(routes.ADD);
  };
}

export default withRouter(RecipesPage);
