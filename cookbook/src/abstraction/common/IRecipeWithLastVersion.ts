import IVersion from './IVersion';

export default interface IRecipeWithLastVersion {
  id: string;
  version: IVersion;
}
