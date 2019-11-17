import { WithStyles } from 'react-jss';
import IRecipeWithLastVersion from '../../../common/IRecipeWithLastVersion';

export default interface IRecipeProps extends WithStyles<any>, IRecipeWithLastVersion {
  index: number;
}
