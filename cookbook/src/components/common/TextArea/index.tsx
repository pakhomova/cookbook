import React, {Component} from 'react';
import {styles} from './styles';
import withStyles from 'react-jss';
import ITextAreaProps from '../../../abstraction/components/common/TextArea/ITextAreaProps';

class TextArea extends Component<ITextAreaProps> {
    render() {
        return(
            <div className={this.props.classes.container}>
                <textarea
                    onChange={this.onChange}
                    {...this.props}
                />
            </div>
        );
    };

    onChange = (event: React.ChangeEvent) => {
        this.props.onValueChange(event.target.nodeValue!);
    };
}

export default withStyles(styles)(TextArea);