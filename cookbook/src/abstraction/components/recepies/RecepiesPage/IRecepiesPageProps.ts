import {RouteComponentProps} from 'react-router-dom';
import IRecepiesState from '../../../../abstraction/reducers/recepies/IRecepiesState';

export default interface IRecepiesPageProps extends
    IRecepiesState, RouteComponentProps {
    getRecepies: any
}