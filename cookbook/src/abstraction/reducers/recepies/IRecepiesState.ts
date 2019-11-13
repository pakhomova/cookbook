import IRecipeWithLastVersion from '../../common/IRecipeWithLastVersion';

export default interface IRecepiesState {
    recepies: IRecipeWithLastVersion[];
    isLoading: boolean;
    hasErrored: boolean
}