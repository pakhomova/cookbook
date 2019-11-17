import IVersion from './IVersion';

export default interface IRecipe {
  id: string;
  versions: IVersion[];
}
