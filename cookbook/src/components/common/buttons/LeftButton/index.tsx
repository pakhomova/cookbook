import React, {Component} from 'react';
import {styles} from './styles';
import withStyles from 'react-jss';
import IButtonProps from '../../../../abstraction/components/common/Button/IButtonProps';
import Button from '../Button';

class LeftButton extends Component<IButtonProps> {
    render() {
        return(
            <div className={this.props.classes.leftButtonContainer}>
                <Button
                    {...this.props}
                />
            </div>
        );
    };
}

export default withStyles(styles)(LeftButton);