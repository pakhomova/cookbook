import {RouteComponentProps} from 'react-router-dom';
import IEditState from '../../../../abstraction/reducers/edit/IEditState';
import IRecipeWithLastVersion from '../../../../abstraction/common/IRecipeWithLastVersion';

export default interface IRecipesPageProps extends
    IEditState, RouteComponentProps {
    postVersion: any;
    editPageMounted: any;
    recipesWithLastVersions: IRecipeWithLastVersion[]
}