import IRecipeWithLastVersion from '../../common/IRecipeWithLastVersion';

export default interface IRecepiesAction {
    type: string;
    recepies?: IRecipeWithLastVersion[]
}