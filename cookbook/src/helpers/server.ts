import IVersion from '../abstraction/common/IVersion';
import IRecipeWithLastVersion from '../abstraction/common/IRecipeWithLastVersion';

export type DescriptionToPost = {
  description: string;
};
export type RecipeFromGet = {
  id: string;
  dateCreated: string;
  description: string;
};

export const createDescriptionToPost = (description: string) => ({ description });

const createVersion = (date: string, description: string) => {
  let version: IVersion = {
    date: new Date(date),
    description: description
  };
  return version;
};

export const mapRecipesToVersions = (recipes: RecipeFromGet[]) => {
  return recipes.map((recipe: RecipeFromGet) => createVersion(recipe.dateCreated, recipe.description));
};

export const mapRecipesToRecipesWithLastVersions = (recipes: RecipeFromGet[]) => {
  return recipes.map((recipe: RecipeFromGet) => {
    let recipeWithLastVersion: IRecipeWithLastVersion = {
      id: recipe.id,
      version: createVersion(recipe.dateCreated, recipe.description)
    };
    return recipeWithLastVersion;
  });
};
