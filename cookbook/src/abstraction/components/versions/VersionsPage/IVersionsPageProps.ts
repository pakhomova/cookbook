import IVersionsState from '../../../../abstraction/reducers/versions/IVersionsState';
import {RouteComponentProps} from 'react-router-dom';

export default interface IRecipesPageProps extends
    IVersionsState, RouteComponentProps {
    getVersions: any
}