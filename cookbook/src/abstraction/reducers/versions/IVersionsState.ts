import IVersion from '../../common/IVersion';

export default interface IVersionsState {
    versions: IVersion[];
    isLoading: boolean;
    hasErrored: boolean
}