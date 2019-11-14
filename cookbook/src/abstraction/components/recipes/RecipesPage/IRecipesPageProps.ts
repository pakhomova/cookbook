import {RouteComponentProps} from 'react-router-dom';
import IRecipesState from '../../../reducers/recipes/IRecipesState';

export default interface IRecipesPageProps extends
    IRecipesState, RouteComponentProps {
    getRecipes: any
}