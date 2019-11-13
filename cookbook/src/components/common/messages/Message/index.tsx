import React, {Component} from 'react';
import {styles} from './styles';
import withStyles from 'react-jss';
import IMessageProps from '../../../../abstraction/components/common/messages/Message/IMessageProps';

class Message extends Component<IMessageProps> {
    render() {
        return(
            <p className={this.props.classes.message}>
                {this.props.messageText}
            </p>
        );
    }
}

export default withStyles(styles)(Message);