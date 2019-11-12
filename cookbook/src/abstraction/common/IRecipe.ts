import IVersion from './IVersion';

export default interface IRecipe {
    id: number;
    versions: IVersion[];
}