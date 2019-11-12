import { WithStyles } from 'react-jss';
import IVersion from '../../../common/IVersion';

export default interface IRecipeProps extends WithStyles<any> {
    id: number;
    version: IVersion
}