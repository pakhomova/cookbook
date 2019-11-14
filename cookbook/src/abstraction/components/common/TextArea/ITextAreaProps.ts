import {WithStyles} from 'react-jss';

export default interface ITextAreaProps extends WithStyles<any> {
    rows: number;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void 
}