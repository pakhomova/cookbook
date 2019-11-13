import {WithStyles} from 'react-jss';

export default interface ITextAreaProps extends WithStyles<any> {
    rows: number;
    placeholder: string;
    value: string;
    onValueChange: (value: string) => void 
}