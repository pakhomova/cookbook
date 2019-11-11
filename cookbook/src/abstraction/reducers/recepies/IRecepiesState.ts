import IRecipe from '../../common/IRecipe';

export default interface IRecepiesState {
    recepies: IRecipe[];
    isLoading: boolean;
    hasErrored: boolean
}