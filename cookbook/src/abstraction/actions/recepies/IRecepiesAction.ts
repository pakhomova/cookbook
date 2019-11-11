import IRecipe from '../../common/IRecipe';

export default interface IRecepiesAction {
    type: string;
    recepies?: IRecipe[]
}