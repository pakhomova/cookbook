import { WithStyles } from 'react-jss';

export default interface IButtonProps extends WithStyles<any> {
  title: string;
  onClick: (event: React.MouseEvent) => void;
  disabled?: boolean;
}
