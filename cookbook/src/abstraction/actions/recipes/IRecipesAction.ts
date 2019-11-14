import IRecipeWithLastVersion from '../../common/IRecipeWithLastVersion';

export default interface IRecipesAction {
    type: string;
    recipes?: IRecipeWithLastVersion[]
}