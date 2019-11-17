import IVersion from '../../common/IVersion';

export default interface IVersionsAction {
  type: string;
  versions?: IVersion[];
}
