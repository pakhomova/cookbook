import IRecipeWithLastVersion from '../../common/IRecipeWithLastVersion';

export default interface IRecipesState {
    recipes: IRecipeWithLastVersion[];
    isLoading: boolean;
    hasErrored: boolean
}